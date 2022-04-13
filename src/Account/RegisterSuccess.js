import React from 'react';
import ReactDOM from 'react-dom';
import './RegisterSuccess.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import logoIcon from '../Img/larin-icon.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from '../Header/Header';
import Home from '../Main/Home';

class RegisterSuccess extends React.Component {
	constructor(){
		super();
	}
	openHome = () => {
		ReactDOM.render(<OpenHome />,document.getElementById('main-content'));
	}
	render () {
		return(
			<div className="register-success account">
				<div className="img-container">
					<img
						className="d-block w-100"
						src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
						alt="First slide"
					/>
					<div className="img-overlay">
						<p>Bem-vindo(a) ao Larin</p>
					</div>
				</div>
				<div className="text-container">
					<p className="subtitle">Para ajudar as pessoas de quem mais gostamos, criamos o Larin, onde pode encontrar desde Lares e residências, centros de dia, e mais, até serviços escolhidos para o melhor tratamento da nossa comunidade mais experiente e Sénior.<br/><br/> Confirme apenas <span>alguns detalhes em 4 passos</span>, para ativar desde já a sua conta.</p>
					<div className="buttons-container">
						<button className="btn-primary" onClick={() => this.openHome()}>Continuar</button>
					</div>
				</div>
			</div>
		)
	}
}

export default RegisterSuccess;


class OpenHome extends React.Component {
	render () {
		window.history.pushState("", "", '/');
		return(
			<div>
				<Header />
				<Home myDistrict={localStorage.getItem('myDistrict')} />
			</div>
		)
	}
}