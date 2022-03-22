import React from 'react';
import ReactDOM from 'react-dom';
import './RegisterAcceptTerms.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import logoIcon from '../Img/larin-icon.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Register from '../Account/Register';
import RegisterSuccess from '../Account/RegisterSuccess';
import axios from "axios";

class RegisterAcceptTerms extends React.Component {
	constructor(props){
		super(props);
	}
	openRegister = index => {
		ReactDOM.render(<OpenRegister />,document.getElementById('main-content'));
	};
	openRegisterSuccess = index => {
		const userData = {NAME: this.props.registerName, BIRTHDATE: this.props.registerBirthdate, EMAIL: this.props.registerEmail, PASSWORD: this.props.registerPassword, NEWSLETTER: this.props.registerNewsletter}
		axios.post(global.config.apiUrl+"registUser", userData)
		.then(res => {
			localStorage.setItem('userToken', res.data);
			ReactDOM.render(<OpenRegisterSuccess />,document.getElementById('main-content'));
		  })
	};
	render () {
		return(
			<div className="register-accept-terms account" style={{background: 'url('+process.env.PUBLIC_URL+'/Slides/slide-3.jpg)'}}>
				<div className="register-box">
					<h3>Antes de se registar {this.props.registerName}</h3>
					<p className="subtitle">Temos a missão de construir uma comunidade confiável onde todos possam sentir que o mundo é a sua casa. Para que isso seja possível, estamos a pedir-lhe para aceitar os nossos termos de serviço e assumir o compromisso de respeitar todos no Larin.</p>
					<h4>Compromisso da Comunidade Larin</h4>
					<p className="subtitle">Concordo em tratar todas as pessoas da comunidade do Larin com respeito e sem julgamentos ou preconceitos, independentemente da sua raça, religião, nacionalidade, etnia, cor da pele, deficiência, sexo, identidade de género, orientação sexual ou idade. <a className="btn-link">Saiba mais</a>.</p>
					<h4>Termos de Serviço do Larin</h4>
					<p className="subtitle">Também aceito os <a className="btn-link">Termos de Serviço do Larin</a>, a <a className="btn-link">Política de Privacidade</a> e a <a className="btn-link">Política de Não Discriminação</a>.</p>
					<div className="buttons-container">
						<button className="btn-secondary" onClick={() => this.openRegister()}>Recusar</button>
						<button className="btn-primary" onClick={() => this.openRegisterSuccess()}>Aceitar</button>
					</div>
				</div>
			</div>
		)
	}
}

export default RegisterAcceptTerms;

class OpenRegister extends React.Component {
	render () {
		return(
			<div>
				<Register />
			</div>
		)
	}
}
class OpenRegisterSuccess extends React.Component {
	render () {
		return(
			<div>
				<RegisterSuccess />
			</div>
		)
	}
}