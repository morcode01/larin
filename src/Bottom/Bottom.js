import React from 'react';
import ReactDOM from 'react-dom';
import './Bottom.css';
import logoIcon from '../Img/larin-icon.svg';
import marketIcon from '../Img/market-icon.svg';
import messagesIcon from '../Img/messages-icon.svg';
import favoritesIcon from '../Img/favorites-icon.svg';
import menuIcon from '../Img/menu-icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Header from '../Header/Header';
import Home from '../Main/Home';
import Market from '../Main/Market';
import Search from '../Main/Search';
import Messages from '../Main/Messages';
import Menu from '../Main/Menu';

class Bottom extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			activeIndex: 0, 
			lastIndex:0,
			activeIndexRouter: props.activeIndexRouter,
		};
	}

	setActive = index => {
		var elems = document.querySelectorAll(".btn-nav-bottom");
		[].forEach.call(elems, function(el) {
			el.classList.remove("active");
		});
		if(index==0) ReactDOM.render(<OpenHome />,document.getElementById('main-content'));
		else if(index==1) ReactDOM.render(<OpenSearch />,document.getElementById('main-content'));
		else if(index==2) ReactDOM.render(<OpenMessages />,document.getElementById('main-content'));
		else if(index==4) ReactDOM.render(<OpenMenu />,document.getElementById('main-content'));
		this.setActiveIndex(index);
		if(index!=4) this.setLastIndex(index);
	}
	setLastIndex = index => {
		this.setState({ lastIndex: index });
	}
	setActiveIndex = index => {
		this.setState({ activeIndexRouter: null });
		this.setState({ activeIndex: index });
	}
	render () {
		return(
			<div className="bottom">
				<div className="nav-bottom">
					<Container>
						<Row>
							<Col className={"col-home " + (this.state.activeIndex === 4 ? "dnone" : "")}>
								<button className={'btn-nav-bottom btn-home ' + ((this.state.activeIndex === 0 &&  this.state.activeIndexRouter == null) || this.state.activeIndexRouter === 'home' ? "active" : "")} onClick={() => this.setActive(0)}>
									<i className="menu-icon icon-larin-icon"></i>
								</button>
								<p>Larin</p>
							</Col>
							<Col className={"col-home " + (this.state.activeIndex != 4 ? "dnone" : "")}>
								<div className='logo-bottom'>
									<i className="menu-icon icon-larin-icon"></i>
								</div>
							</Col>
							<Col className={"col-market " + (this.state.activeIndex === 4 ? "hidden" : "")}>
								<button className={'btn-nav-bottom btn-market ' + (this.state.activeIndex === 1 || this.state.activeIndexRouter === 'search' ? "active" : "")} onClick={() => this.setActive(1)}>
									<i className="menu-icon icon-search-icon"></i>
								</button>
								<p>Pesquisa</p>
							</Col>
							<Col className={"col-messages " + (this.state.activeIndex === 4 || localStorage.getItem('userToken') == null || localStorage.getItem('userToken') == '' ? "hidden" : "")}>
								<button className={'btn-nav-bottom btn-messages ' + (this.state.activeIndex === 2 || this.state.activeIndexRouter === 'messages' ? "active" : "")} onClick={() => this.setActive(2)}>
									<i className="menu-icon icon-message-nav-icon"></i>
								</button>
								<p>Mensagens</p>
							</Col>
							<Col className={"col-favorites " + (this.state.activeIndex === 4 || localStorage.getItem('userToken') == null || localStorage.getItem('userToken') == '' ? "hidden" : "")}>
								<button className={'btn-nav-bottom btn-favorites ' + (this.state.activeIndex === 3 || this.state.activeIndexRouter === 'favourites' ? "active" : "")} onClick={() => this.setActive(3)}>
									<i className="menu-icon icon-heart-icon"></i>
								</button>
								<p>Favoritos</p>
							</Col>
							<Col className={"col-menu " + (this.state.activeIndex === 4 ? "dnone" : "")}>
								<button className={'btn-nav-bottom btn-menu ' + (this.state.activeIndex === 4 || this.state.activeIndexRouter === 'menu' ? "active" : "")} id="btn-menu" onClick={() => this.setActive(4)}>
									<i className="menu-icon icon-menu-icon"></i>
								</button>
								<p>Menu</p>
							</Col>
							<Col className={"col-close " + (this.state.activeIndex != 4 ? "dnone" : "")}>
								<button className='btn-nav-bottom btn-close-menu' id="btn-close-menu" onClick={() => this.setActive(this.state.lastIndex)}>
									<i className="menu-icon icon-close-btt"></i>
								</button>
								<p>Close</p>
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
		window.history.pushState("", "", '/larin');
		return(
			<div>
				<Header />
				<Home myDistrict={localStorage.getItem('myDistrict')} />
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

class OpenSearch extends React.Component {
	render () {
		window.history.pushState("", "", '/search');
		return(
			<div>
				<Search housesTab={0} />
			</div>
		)
	}
}

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

class OpenMenu extends React.Component {
	render () {
		return(
			<div>
				<Menu />
			</div>
		)
	}
}


