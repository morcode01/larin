import React from 'react';
import './Menu.css';
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
			<div className="menu main">
				<ul>
					<li><button>Explore espaços</button></li>
					<li><button>Encontre serviços seniores</button></li>
					<li><button>Experiências e eventos</button></li>
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

export default Messages;