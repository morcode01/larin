import React from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import logoIcon from '../Img/larin-icon.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Register from '../Account/Register';
import 'react-tabs/style/react-tabs.css';
import axios from "axios";
import Header from '../Header/Header';
import Bottom from '../Bottom/Bottom';
import Home from '../Main/Home';

class Login extends React.Component {
	constructor(){
		super();
		this.state = {
		   loginEmail: '',
		   loginPassword: '',
		   loginError: 0,
		}
	}
	openRegister = () => {
		ReactDOM.render(<OpenRegister />,document.getElementById('main-content'));
	};
	handleLoginEmail = value => {
		this.setState({ loginEmail: value });
	};
	handleLoginPassword = value => {
		this.setState({ loginPassword: value });
	};
	login = () => {
		const userData = {EMAIL: this.state.loginEmail, PASSWORD: this.state.loginPassword};
		axios.post(global.config.apiUrl+"loginUser", userData)
		.then(res => {
			if(res.data!=null && res.data != ''){
				localStorage.setItem('userName', res.data.username);
				localStorage.setItem('userToken', res.data.token);
				ReactDOM.render(<OpenHome />,document.getElementById('main-content'));
				ReactDOM.render(<OpenBottom />,document.getElementById('main-bottom'));
			}
			else{
				this.setState({ loginError: 1 });
			}
		  })
	}
	render () {
		return(
			<div className="login account" style={{background: 'url('+process.env.PUBLIC_URL+'/Slides/slide-3.jpg)'}}>
				<div className="login-box">
					<p className="background-caption"><b>Mafra, Lisboa</b><br/>Casa de Repouso São José de Maria</p>
					<h3>Entrar no Larin</h3>
					<p className="subtitle">Prefere usar o <span>Facebook</span> ou <span>Google</span>?</p>
					{this.state.loginError == 1 &&
						<p className="register-error">Email ou password errados</p>
					}
					<div className="field label-float">
						<input type="email" id="email" placeholder=" " onChange={e => this.handleLoginEmail(e.target.value)}/>
						<label>Endereço de E-mail</label>
					</div>
					<div className="field label-float">
						<input type="password" id="password" placeholder=" " onChange={e => this.handleLoginPassword(e.target.value)}/>
						<label>Palavra chave</label>
					</div>
					<label className="checkbox-container">Lembrar
					  <input type="checkbox"/>
					  <span className="checkmark"></span>
					</label>
					<button className="btn-primary" onClick={() => this.login()}>Entrar</button>
					<hr/>
					<p className="subtitle">Não tem conta no Larin? <button className="btn-link" onClick={() => this.openRegister()}>Registar-se</button></p>
				</div>
			</div>
		)
	}
}

export default Login;

class OpenRegister extends React.Component {
	render () {
		window.history.pushState("", "", '/register');
		return(
			<div>
				<Register />
			</div>
		)
	}
}

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

class OpenBottom extends React.Component {
	render () {
		return(
			<div>
				<Bottom />
			</div>
		)
	}
}