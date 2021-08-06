import React from 'react';
import ReactDOM from 'react-dom';
import './Menu.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Explore from '../Main/Explore';
import Bottom from '../Bottom/Bottom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import logoIcon from '../Img/larin-icon.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Menu extends React.Component {
	constructor(props) {
    super(props);
		this.state = { housesTab: 0 };
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
			ReactDOM.render(<OpenExplore housesTab={0} />,document.getElementById('main-content'));
			
		}
		else if(index==1){
			document.getElementById("btn-close-menu").click();
			ReactDOM.render(<OpenExplore housesTab={1} />,document.getElementById('main-content'));
			
		}
		else if(index==2){
			document.getElementById("btn-close-menu").click();
			ReactDOM.render(<OpenExplore housesTab={2} />,document.getElementById('main-content'));
			
		}
	};
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
				<button className="btn-link">Entrar</button>
			</div>
		)
	}
}

export default Menu;

class OpenExplore extends React.Component {
	render () {
		return(
			<div>
				<Explore housesTab={this.props.housesTab} />
			</div>
		)
	}
}