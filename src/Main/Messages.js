import React from 'react';
import ReactDOM from 'react-dom';
import './Messages.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import logoIcon from '../Img/larin-icon.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MessagesSingle from '../Main/MessagesSingle';
import axios from "axios";

class Messages extends React.Component {
	constructor(){
	super();
		this.state = {
			chats: [],
		}
	}
	openMessagesSingle = (index,convWith) => {
		ReactDOM.render(<OpenMessagesSingle conversationID={index} convWith={convWith} />,document.getElementById('main-content'));
	};
	componentDidMount(){
		// START: GET CONVERSATIONS BY USER
		axios.get(global.config.apiUrl+"getConversationsByUser/"+localStorage.getItem('userToken'))
		.then(res => {
			const chats = res.data;
			this.setState({ chats });
		  })
		// END: GET CONVERSATIONS BY USER
	}
	render () {
		return(
			<div className="messages main">
				<div className="messages-top">
					<div className="float-left">
						<h3 className="title-default">Conversas</h3>
					</div>
					<div className="float-right">
						<i className="icon icon-search-icon"></i>
						<i className="icon icon-message-nav-icon"></i>
					</div>
				</div>
				<Tabs>
					<TabList>
						<Tab>Mensagens</Tab>
						<Tab>Notificações <span>20</span></Tab>
					</TabList>

					<TabPanel>
						<div className="messages-list">
							{this.state.chats.map((value, index) => {
								return (
									<div className="message-item" onClick={() => this.openMessagesSingle(value.CONVERSATION_ID,value.CONV_WITH)}>
										<div className="message-img-container">
											<img
												className="message-img"
												src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
											/>
											<div className="message-online-status"></div>
										</div>
										<div>
											<p className="message-title">{value.CONV_WITH}</p>
											<p className={"message-subtitle " + (value.STATUS == 0 ? 'unread' : '')}>{value.LAST_MESSAGE}</p>
										</div>
									</div>
								)
							})}
						</div>
					</TabPanel>
					<TabPanel>
						<h2>Notificações</h2>
					</TabPanel>
				</Tabs>
			</div>
		)
	}
}

export default Messages;

class OpenMessagesSingle extends React.Component {
	constructor(props){
    super(props);
		this.state = {
		   conversationID: props.conversationID,
		   convWith: props.convWith
		}
		
	}
	render () {
		return(
			<div>
				<MessagesSingle conversationID={this.state.conversationID} convWith={this.state.convWith}/>
			</div>
		)
	}
}