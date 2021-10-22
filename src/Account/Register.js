import React from 'react';
import ReactDOM from 'react-dom';
import './Register.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import logoIcon from '../Img/larin-icon.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RegisterEmail from '../Account/RegisterEmail';
import Login from '../Account/Login';

class Register extends React.Component {
	constructor(){
		super();
		this.state = {
		   registerEmail: false,
		}
	}
	setRegisterEmail = value => {
		this.setState({ registerEmail: value });
	}
	openLogin = index => {
		ReactDOM.render(<OpenLogin />,document.getElementById('main-content'));
	};
	render () {
		return(
			<div className="register account" style={{background: 'url('+process.env.PUBLIC_URL+'/Slides/slide-3.jpg)'}}>
				<div className="register-scroll">
					<div className="register-box">
						<p className="background-caption"><b>Mafra, Lisboa</b><br/>Casa de Repouso São José de Maria</p>
						<h3>Registe-se no Larin</h3>
						<div className={(this.state.registerEmail ? "dnone" : "")}>
							<p className="subtitle">Inscreva-se agora para aceder a todas as opções que o Larin tem para lhe oferecer.</p>
							<div className="buttons-container">
								<button className="btn-secondary btn-facebook"><FontAwesomeIcon icon={Icons.faEnvelope} /> Registar-se com Facebook</button>
								<button className="btn-secondary btn-google"><FontAwesomeIcon icon={Icons.faEnvelope} /> Registar-se com Google</button>
								<button className="btn-primary" onClick={() => this.setRegisterEmail(true)}><FontAwesomeIcon icon={Icons.faEnvelope} /> Registar-se com o E-mail</button>
							</div>
						</div>
						<div className={(this.state.registerEmail ? "" : "dnone")}>
							<RegisterEmail/>
						</div>
						<p className="subtitle" onClick={() => this.openLogin()}>Já tem conta no Larin? <button className="btn-link">Entrar</button></p>
					</div>
				</div>
			</div>
		)
	}
}

export default Register;

class OpenLogin extends React.Component {
	render () {
		return(
			<div>
				<Login />
			</div>
		)
	}
}