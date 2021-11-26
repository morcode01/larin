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

class Login extends React.Component {
	openRegister = () => {
		ReactDOM.render(<OpenRegister />,document.getElementById('main-content'));
	};
	render () {
		return(
			<div className="login account" style={{background: 'url('+process.env.PUBLIC_URL+'/Slides/slide-3.jpg)'}}>
				<div className="login-box">
					<p className="background-caption"><b>Mafra, Lisboa</b><br/>Casa de Repouso São José de Maria</p>
					<h3>Entrar no Larin</h3>
					<p className="subtitle">Prefere usar o <span>Facebook</span> ou <span>Google</span>?</p>
					<div className="field label-float">
						<input type="email" id="email" placeholder=" "/>
						<label>Endereço de E-mail</label>
					</div>
					<div className="field label-float">
						<input type="password" id="password" placeholder=" "/>
						<label>Palavra chave</label>
					</div>
					<label className="checkbox-container">Lembrar
					  <input type="checkbox"/>
					  <span className="checkmark"></span>
					</label>
					<button className="btn-primary">Entrar</button>
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
		return(
			<div>
				<Register />
			</div>
		)
	}
}