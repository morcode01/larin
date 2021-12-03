import React from 'react';
import ReactDOM from 'react-dom';
import './Menu.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Explore from '../Main/Explore';
import Login from '../Account/Login';
import Register from '../Account/Register';
import Bottom from '../Bottom/Bottom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import logoIcon from '../Img/larin-icon.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from "axios";

class Menu extends React.Component {
	constructor(props) {
    super(props);
		this.state = { 
			housesTab: 0,
			district: [],
			myDistrict: sessionStorage.getItem('myDistrict')
		 };
	}

	openExplore = index => {
		if(index==0){
			document.getElementById("btn-close-menu").click(); 
			var elems = document.querySelectorAll(".btn-nav-bottom");
			setTimeout(() => {
				[].forEach.call(elems, function(el) {
					el.classList.remove("active");
				});
			}, 300);
			ReactDOM.render(<OpenExplore districtID={this.state.district.CODE} prefixDistrict={this.state.district.PREFIX} nameDistrict={this.state.district.DESCRIPTION} housesTab={0} />,document.getElementById('main-content'));
			
		}
		else if(index==1){
			document.getElementById("btn-close-menu").click();
			ReactDOM.render(<OpenExplore districtID={this.state.district.CODE} prefixDistrict={this.state.district.PREFIX} nameDistrict={this.state.district.DESCRIPTION} housesTab={1} />,document.getElementById('main-content'));
			
		}
		else if(index==2){
			document.getElementById("btn-close-menu").click();
			ReactDOM.render(<OpenExplore districtID={this.state.district.CODE} prefixDistrict={this.state.district.PREFIX} nameDistrict={this.state.district.DESCRIPTION} housesTab={2} />,document.getElementById('main-content'));
			
		}
	};
	openLogin = () => {
		document.getElementById("btn-close-menu").click(); 
		var elems = document.querySelectorAll(".btn-nav-bottom");
		setTimeout(() => {
			[].forEach.call(elems, function(el) {
				el.classList.remove("active");
			});
		}, 300);
		ReactDOM.render(<OpenLogin />,document.getElementById('main-content'));
	};
	openRegister = () => {
		document.getElementById("btn-close-menu").click(); 
		var elems = document.querySelectorAll(".btn-nav-bottom");
		setTimeout(() => {
			[].forEach.call(elems, function(el) {
				el.classList.remove("active");
			});
		}, 300);
		ReactDOM.render(<OpenRegister />,document.getElementById('main-content'));
	};
	componentDidMount(){
		// START: GET DISTRICT BY NAME
		axios.get(global.config.apiUrl+"getDistrictByName/"+this.state.myDistrict)
		.then(res => {
			const district = res.data;
			this.setState({ district });
		  })
		// END: GET DISTRICT BY NAME
	}
	render () {
		return(
			<div className="menu main">
				<ul>
					<li><button onClick={() => this.openExplore(0)}>Explore espaços</button></li>
					<li><button onClick={() => this.openExplore(1)}>Encontre serviços seniores</button></li>
					<li><button onClick={() => this.openExplore(2)}>Experiências e eventos</button></li>
					<li><button>Sobre o Larin</button></li>
					<li><button>Testemunhos</button></li>
					<li><button>Revista Larin</button></li>
					<li><button>Ajuda e perguntas frequentes</button></li>
				</ul>
				<hr/>
				<p>Porquê aderir ao Larin registe o seu espaço e serviços <b>aumentando a sua</b> para a comunidade local e nacional.</p>
				<button className="btn-secondary">Adicione o seu espaço</button>
				<hr/>
				<div className="account-btns">
					<div>
						<button onClick={() => this.openLogin()} className="btn-link">Entrar</button>
						<button onClick={() => this.openRegister()} className="btn-link">Registar</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Menu;

class OpenExplore extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			districtID: props.districtID,
			prefixDistrict: props.prefixDistrict,
			nameDistrict: props.nameDistrict,
			houseTab: props.houseTab
		 }
	}
	render () {
		return(
			<div>
				<Explore districtID={this.state.districtID} prefixDistrict={this.state.prefixDistrict} nameDistrict={this.state.nameDistrict} housesTab={this.state.housesTab}  />
			</div>
		)
	}
}

class OpenLogin extends React.Component {
	render () {
		return(
			<div>
				<Login />
			</div>
		)
	}
}

class OpenRegister extends React.Component {
	render () {
		return(
			<div>
				<Register />
			</div>
		)
	}
}