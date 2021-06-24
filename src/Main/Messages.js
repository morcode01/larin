import React from 'react';
import './Messages.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import logoIcon from '../Img/larin-icon.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Messages extends React.Component {
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
							<div className="message-item">
								<div className="message-img-container">
									<img
										className="message-img"
										src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
									/>
									<div className="message-online-status"></div>
								</div>
								<div>
									<p className="message-title">Casa de Repouso São José de Maria…</p>
									<p className="message-subtitle">Last message received in this chat…</p>
								</div>
							</div>
							<div className="message-item">
								<img
									className="message-img"
									src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
								/>
								<div>
									<p className="message-title">Casa de Repouso São José de Maria…</p>
									<p className="message-subtitle">Last message received in this chat…</p>
								</div>
							</div>
							<div className="message-item">
								<img
									className="message-img"
									src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
								/>
								<div>
									<p className="message-title">Casa de Repouso São José de Maria…</p>
									<p className="message-subtitle">Last message received in this chat…</p>
								</div>
							</div>
							<div className="message-item">
								<img
									className="message-img"
									src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
								/>
								<div>
									<p className="message-title">Casa de Repouso São José de Maria…</p>
									<p className="message-subtitle">Last message received in this chat…</p>
								</div>
							</div>
							<div className="message-item">
								<img
									className="message-img"
									src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
								/>
								<div>
									<p className="message-title">Casa de Repouso São José de Maria…</p>
									<p className="message-subtitle">Last message received in this chat…</p>
								</div>
							</div>
							<div className="message-item">
								<img
									className="message-img"
									src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
								/>
								<div>
									<p className="message-title">Casa de Repouso São José de Maria…</p>
									<p className="message-subtitle">Last message received in this chat…</p>
								</div>
							</div>
						</div>
					</TabPanel>
					<TabPanel>
						<h2>Any content 2</h2>
					</TabPanel>
				</Tabs>
			</div>
		)
	}
}

export default Messages;
