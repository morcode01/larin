import React from 'react';
import ReactDOM from 'react-dom';
import './MessagesSingle.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import logoIcon from '../Img/larin-icon.svg';
import favoritesIcon from '../Img/favorites-icon.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Messages from '../Main/Messages';
import axios from "axios";

class MessagesSingle extends React.Component {
	constructor(props){
    super(props);
		this.state = {
			messages: [],
			newMessage: '',
		}
	}
	openMessages = index => {
		ReactDOM.render(<OpenMessages />,document.getElementById('main-content'));
	};
	handleNewMessage = value => {
		this.setState({ newMessage: value });
	};
	sendMessage = () => {
		if(this.state.newMessage != ''){
			const userData = {CONVERSATION_ID: this.props.conversationID, TOKEN: localStorage.getItem('userToken'), MESSAGE: this.state.newMessage}
			axios.post(global.config.apiUrl+"insertMessage", userData)
			.then(res => {
				if(res.data==1){
					this.state.messages.push({SEND:1,MESSAGE:this.state.newMessage,DATE:new Date()});
					this.setState({ newMessage: '' });
				}
				
			})
		}
	}
	_handleKeyDown = e => {
		if (e.key === 'Enter') {
			this.sendMessage();
		}
	}
	componentDidMount() {
		var objDiv = document.getElementById('chat-messages');
		objDiv.scrollTop = objDiv.scrollHeight;
		// START: GET MESSAGES
		axios.get(global.config.apiUrl+"getMessagesByConversation/"+this.props.conversationID+"/"+localStorage.getItem('userToken'))
		.then(res => {
			const messages = res.data;
			this.setState({ messages });
		  })
		// END: GET MESSAGES
		// START: CHANGE STATUS OF CONVERSATION
		const userData = {CONVERSATION_ID: this.props.conversationID, TOKEN: localStorage.getItem('userToken')}
		axios.post(global.config.apiUrl+"changeConversationStatus", userData)
		.then(res => {
		})
		// END: CHANGE STATUS OF CONVERSATION
		var that = this;
		// set Interval
		this.interval = setInterval(function(){
			// START: GET MESSAGES
			axios.get(global.config.apiUrl+"getMessagesByConversation/"+that.props.conversationID+"/"+localStorage.getItem('userToken'))
			.then(res => {
				const messages = res.data;
				that.setState({ messages });
			})
			// END: GET MESSAGES
			// START: CHANGE STATUS OF CONVERSATION
			const userData = {CONVERSATION_ID: that.props.conversationID, TOKEN: localStorage.getItem('userToken')}
			axios.post(global.config.apiUrl+"changeConversationStatus", userData)
			.then(res => {
			})
			// END: CHANGE STATUS OF CONVERSATION
		}, 7000);
	}
	componentWillUnmount() {
		// Clear the interval right before component unmount
		clearInterval(this.interval);
	}
	render () {
		return(
			<div className="messages-single main">
				<div className="messages-top">
					<div className="float-left">
						<Button className="btn-back" onClick={() => this.openMessages()}><i className="menu-icon icon-arrow-left-icon"></i></Button>
					</div>
					<div className="float-right">
						<Button className="btn-info" onClick={() => this.openMessages()}><i className="menu-icon icon-info-icon"></i></Button>
					</div>
				</div>
				<div className="messages-list">
					<div className="message-item">
						<div className="message-img-container">
							<img
								className="message-img"
								src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
							/>
							<div className="message-online-status"></div>
						</div>
						<div>
							<p className="message-title">Conversa com</p>
							<p className="message-subtitle">{this.props.convWith}</p>
						</div>
					</div>
				</div>
				<div className="chat-list" id="chat-messages">
					<div className="chat-date"><p>4 abril de 2022</p></div>
					{this.state.messages.map((value, index) => {
						return (
							<div className={"chat-item "+(value.SEND == 0 ? 'received' : 'sent')}>
								<p>{value.MESSAGE}</p>
							</div>
						)
					})}
				</div>
				<div className="new-message-container">
					<i className="menu-icon icon-heart-icon"></i>
					<input type="text" id="new-message" value={this.state.newMessage} placeholder="Escreve uma mensagem…" onKeyDown={this._handleKeyDown} onChange={e => this.handleNewMessage(e.target.value)}/>
					<button onClick={() => this.sendMessage()} className="menu-icon icon-arrow-link-icon"></button>
				</div>
			</div>
		)
	}
}

export default MessagesSingle;

class OpenMessages extends React.Component {
	render () {
		window.history.pushState("", "", '/messages');
		return(
			<div>
				<Messages />
			</div>
		)
	}
}
