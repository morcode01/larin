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


class MessagesSingle extends React.Component {
	constructor(props){
    super(props);
		this.state = {
		   messageID: props.messageID
		}
	}
	openMessages = index => {
		ReactDOM.render(<OpenMessages />,document.getElementById('main-content'));
	};
	componentDidMount() {
		var objDiv = document.getElementById('chat-messages');
		objDiv.scrollTop = objDiv.scrollHeight;
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
							<p className="message-subtitle">Casa de Repouso São José de Maria…</p>
						</div>
					</div>
				</div>
				<div className="chat-list" id="chat-messages">
					<div className="chat-date"><p>26 março de 2020</p></div>
					<div className="chat-item received">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
					</div>
					<div className="chat-item sent">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
					<div className="chat-item received">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
					<div className="chat-item sent">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.</p>
					</div>
					<div className="chat-item received">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
					</div>
					<div className="chat-item sent">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
					<div className="chat-item received">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
					<div className="chat-item sent">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.</p>
					</div>
					<div className="chat-item received">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
					</div>
					<div className="chat-item sent">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
					<div className="chat-item received">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					</div>
					<div className="chat-item sent">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.</p>
					</div>
				</div>
				<div className="new-message-container">
					<i className="menu-icon icon-heart-icon"></i>
					<input type="text" id="new-message" placeholder="Escreve uma mensagem…"/>
					<i className="menu-icon icon-arrow-link-icon"></i>
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
