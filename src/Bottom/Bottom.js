import React from 'react';
import ReactDOM from 'react-dom';
import './Bottom.css';
import logoIcon from '../Img/larin-icon.svg';
import marketIcon from '../Img/market-icon.svg';
import messagesIcon from '../Img/messages-icon.svg';
import favoritesIcon from '../Img/favorites-icon.svg';
import menuIcon from '../Img/menu-icon.svg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Header from '../Header/Header';
import Home from '../Main/Home';
import Market from '../Main/Market';
import Messages from '../Main/Messages';

class Bottom extends React.Component {
	constructor(props) {
    super(props);
		this.state = { activeIndex: 0 };
	}

	setActive = index => {
		if(index==0) ReactDOM.render(<OpenHome />,document.getElementById('main-content'));
		else if(index==1) ReactDOM.render(<OpenMarket />,document.getElementById('main-content'));
		else if(index==2) ReactDOM.render(<OpenMessages />,document.getElementById('main-content'));
		this.setState({ activeIndex: index });
		
	};
	render () {
		return(
			<div className="bottom">
				<div className="nav-bottom">
					<Container>
						<Row>
							<Col className="col-home">
								<button className={'btn-nav-bottom btn-home ' + (this.state.activeIndex === 0 ? "active" : "")} onClick={() => this.setActive(0)}>
									<i className="menu-icon icon-larin-icon"></i>
								</button>
								<p>Larin</p>
							</Col>
							<Col className="col-market">
								<button className={'btn-nav-bottom btn-market ' + (this.state.activeIndex === 1 ? "active" : "")} onClick={() => this.setActive(1)}>
									<i className="menu-icon icon-market-icon"></i>
								</button>
								<p>Mercado</p>
							</Col>
							<Col className="col-messages">
								<button className={'btn-nav-bottom btn-messages ' + (this.state.activeIndex === 2 ? "active" : "")} onClick={() => this.setActive(2)}>
									<i className="menu-icon icon-message-nav-icon"></i>
								</button>
								<p>Mensagens</p>
							</Col>
							<Col className="col-favorites">
								<button className={'btn-nav-bottom btn-favorites ' + (this.state.activeIndex === 3 ? "active" : "")} onClick={() => this.setActive(3)}>
									<i className="menu-icon icon-heart-icon"></i>
								</button>
								<p>Favoritos</p>
							</Col>
							<Col className="col-menu">
								<button className={'btn-nav-bottom btn-menu ' + (this.state.activeIndex === 4 ? "active" : "")} onClick={() => this.setActive(4)}>
									<i className="menu-icon icon-menu-icon"></i>
								</button>
								<p>Menu</p>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		)
	}
}

export default Bottom;

class OpenHome extends React.Component {
	render () {
		return(
			<div>
				<Header />
				<Home />
			</div>
		)
	}
}

class OpenMarket extends React.Component {
	render () {
		return(
			<div>
				<Market />
			</div>
		)
	}
}

class OpenMessages extends React.Component {
	render () {
		return(
			<div>
				<Messages />
			</div>
		)
	}
}


