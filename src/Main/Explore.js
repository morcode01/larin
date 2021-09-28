import React from 'react';
import ReactDOM from 'react-dom';
import './Explore.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import logoIcon from '../Img/larin-icon.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Select from 'react-select';
import HouseSingle from '../Main/HouseSingle';
import Menu from '../Main/Menu';

class Explore extends React.Component {
	constructor(props){
	super(props);
		this.state = {
		   arrowRotation1: 'arrow-up',
		   arrowRotation2: 'arrow-down',
		   arrowRotation3: 'arrow-down',
		   sticky: false,
		   tabIndex: props.housesTab
		}
		
		this.rotateArrow = this.rotateArrow.bind(this);
	}
	
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll, true);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	
	openHouseSingle = index => {
		ReactDOM.render(<OpenHouseSingle />,document.getElementById('main-content'));
	};
	
	openMenu = index => {
		var myElement = document.getElementById('btn-menu');
		myElement.classList.add("active");
		ReactDOM.render(<OpenMenu />,document.getElementById('main-content'));
	};
	
	handleScroll = () => {
		let lastScrollY = 0;
		let ticking = false;
		var myElement = document.getElementsByClassName('main');
		lastScrollY = myElement[0].scrollTop;
		if (!ticking) {
			window.requestAnimationFrame(() => {
				if(lastScrollY > 1){
					this.setState({
						sticky: true
					});
				}
				else{
					this.setState({
						sticky: false
					});
				}
				ticking = false;
			});
			ticking = true;
		}
		
	  };
	  
	
	rotateArrow(i){
		if(i==1){
			if(this.state.arrowRotation1 == 'arrow-down'){
				this.setState({
				  arrowRotation1: 'arrow-up',
				  arrowRotation2: 'arrow-down',
				  arrowRotation3: 'arrow-down'
				});
			}
			else{
				this.setState({
				  arrowRotation1: 'arrow-down',
				  arrowRotation2: 'arrow-down',
				  arrowRotation3: 'arrow-down'
				});
			}
		}
		if(i==2){
			if(this.state.arrowRotation2 == 'arrow-down'){
				this.setState({
				   arrowRotation1: 'arrow-down',
				   arrowRotation2: 'arrow-up',
				   arrowRotation3: 'arrow-down'
				});
			}
			else{
				this.setState({
				  arrowRotation1: 'arrow-down',
				  arrowRotation2: 'arrow-down',
				  arrowRotation3: 'arrow-down'
				});
			}
		}
		if(i==3){
			if(this.state.arrowRotation3 == 'arrow-down'){
				this.setState({
				  arrowRotation1: 'arrow-down',
				  arrowRotation2: 'arrow-down',
				  arrowRotation3: 'arrow-up'
				});
			}
			else{
				this.setState({
				  arrowRotation1: 'arrow-down',
				  arrowRotation2: 'arrow-down',
				  arrowRotation3: 'arrow-down'
				});
			}
		}
	}
	
	render () {
		const options = [
		  { value: 'pt', label: 'Português' },
		  { value: 'en', label: 'English' },
		  { value: 'en', label: 'Español' }
		]
		const { arrowRotation1, arrowRotation2, arrowRotation3, sticky, tabIndex } = this.state;
		return(
			<div className="explore main">
				<div className={sticky ? 'explore-top sticky' : 'explore-top'}>
					<Button className="btn-back" onClick={() => this.openMenu(0)}><i className="menu-icon icon-arrow-left-icon"></i></Button>
					<div className="search-container">
						<input type="text" className="search" placeholder="A red placeholder text.."/>
						<div className="search-icon">
							<i className="icon-search-icon"></i>
						</div>
					</div>
					<a href="#" className="btn-secondary">+ Filtros</a>
				</div>
				<Tabs selectedIndex={tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
				<div className="tab-scroll">
					<TabList>
						<Tab>Lares e residênciais</Tab>
						<Tab>Serviços de apoio</Tab>
						<Tab>Eventos</Tab>
					</TabList>
				</div>
					<TabPanel>
						<div className="explore-houses section">
							<h2 className="title-default">Melhores lares e residências no Porto</h2>
							<p className="subtitle-default">Encontre o lar ou residência para proporcionar o maior conforto ao seu ente mais querido.</p>
							<Row>
								<Col xs={6} onClick={() => this.openHouseSingle(0)}>
									<img
									  className="d-block w-100 house-img"
									  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
									  alt="First slide"
									/>
									<p className="house-location">Campanhã, Porto</p>
									<p className="house-name">Casa de Repouso São José de Maria</p>
									<p className="house-price">Desde 1.200 €/ mês</p>
									<p className="house-rating"><FontAwesomeIcon icon={Icons.faStar} /> 4.5 <span>(888)</span></p>
								</Col>
								<Col xs={6} onClick={() => this.openHouseSingle(0)}>
									<img
									  className="d-block w-100 house-img"
									  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
									  alt="First slide"
									/>
									<p className="house-location">Campanhã, Porto</p>
									<p className="house-name">Casa de Repouso São José de Maria</p>
									<p className="house-price">Desde 1.200 €/ mês</p>
									<p className="house-rating"><FontAwesomeIcon icon={Icons.faStar} /> 4.5 <span>(888)</span></p>
								</Col>
								<Col xs={6} onClick={() => this.openHouseSingle(0)}>
									<img
									  className="d-block w-100 house-img"
									  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
									  alt="First slide"
									/>
									<p className="house-location">Campanhã, Porto</p>
									<p className="house-name">Casa de Repouso São José de Maria</p>
									<p className="house-price">Desde 1.200 €/ mês</p>
									<p className="house-rating"><FontAwesomeIcon icon={Icons.faStar} /> 4.5 <span>(888)</span></p>
								</Col>
								<Col xs={6} onClick={() => this.openHouseSingle(0)}>
									<img
									  className="d-block w-100 house-img"
									  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
									  alt="First slide"
									/>
									<p className="house-location">Campanhã, Porto</p>
									<p className="house-name">Casa de Repouso São José de Maria</p>
									<p className="house-price">Desde 1.200 €/ mês</p>
									<p className="house-rating"><FontAwesomeIcon icon={Icons.faStar} /> 4.5 <span>(888)</span></p>
								</Col>
							</Row>
							<div className="btn-div">
								<a href="#" className="btn-secondary">Carregar mais</a>
							</div>
						</div>
						<div className="explore-zone section">
							<h3 className="title-default">Explore por zonas</h3>
							<p className="subtitle-default">Uma nova seleção de casas com conforto e qualidade verificados</p>
							<div className="zones-scroll">
								<div className="zones-container">
									<div className="zone-item">
										<div className="zone-img-container">
											<img
											  className="d-block w-100 zone-img"
											  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
											  alt="First slide"
											/>
											<p>Lares no Porto</p>
										</div>
										<p className="zone-district">Distrito Porto</p>
										<p className="zone-desc">Veja a oferta de lares, centros de…</p>
									</div>
									<div className="zone-item">
										<div className="zone-img-container">
											<img
											  className="d-block w-100 zone-img"
											  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
											  alt="First slide"
											/>
											<p>Lares em Portalegre</p>
										</div>
										<p className="zone-district">Distrito Portalegre</p>
										<p className="zone-desc">Veja a oferta no distrito de Portalegre</p>
									</div>
									<div className="zone-item">
										<div className="zone-img-container">
											<img
											  className="d-block w-100 zone-img"
											  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
											  alt="First slide"
											/>
											<p>Lares no Porto</p>
										</div>
										<p className="zone-district">Distrito Porto</p>
										<p className="zone-desc">Veja a oferta de lares, centros de…</p>
									</div>
									<div className="zone-item">
										<div className="zone-img-container">
											<img
											  className="d-block w-100 zone-img"
											  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
											  alt="First slide"
											/>
											<p>Lares em Portalegre</p>
										</div>
										<p className="zone-district">Distrito Portalegre</p>
										<p className="zone-desc">Veja a oferta no distrito de Portalegre</p>
									</div>
								</div>
							</div>
						</div>
						<div className="add-home section">
							<img
							  className="d-block w-100 add-home-img"
							  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
							  alt="First slide"
							/>
							<div className="add-home-container">
								<h3>Precisa de sair da rotina para precisa de especial assitência?</h3>
								<p>Desfruta de passeios refrescantes com todo o cuidado e gentileza de que merece!</p>
								<button className="btn-white">Ver mais</button>
							</div>
						</div>
					</TabPanel>
					<TabPanel>
						<div className="explore-houses section">
							<h2 className="title-default">Os serviços que lhe darão o conforto desejado</h2>
							<p className="subtitle-default">Tenha os serviços dos melhores profissionais para tornar o dia-a-dia para confortável, sociável e feliz.</p>
							<Row>
								<Col xs={6} onClick={() => this.openHouseSingle(0)}>
									<img
									  className="d-block w-100 house-img"
									  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
									  alt="First slide"
									/>
									<p className="house-location">Campanhã, Porto</p>
									<p className="house-name">Casa de Repouso São José de Maria</p>
									<p className="house-price">Desde 1.200 €/ mês</p>
									<p className="house-rating"><FontAwesomeIcon icon={Icons.faStar} /> 4.5 <span>(888)</span></p>
								</Col>
								<Col xs={6} onClick={() => this.openHouseSingle(0)}>
									<img
									  className="d-block w-100 house-img"
									  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
									  alt="First slide"
									/>
									<p className="house-location">Campanhã, Porto</p>
									<p className="house-name">Casa de Repouso São José de Maria</p>
									<p className="house-price">Desde 1.200 €/ mês</p>
									<p className="house-rating"><FontAwesomeIcon icon={Icons.faStar} /> 4.5 <span>(888)</span></p>
								</Col>
								<Col xs={6} onClick={() => this.openHouseSingle(0)}>
									<img
									  className="d-block w-100 house-img"
									  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
									  alt="First slide"
									/>
									<p className="house-location">Campanhã, Porto</p>
									<p className="house-name">Casa de Repouso São José de Maria</p>
									<p className="house-price">Desde 1.200 €/ mês</p>
									<p className="house-rating"><FontAwesomeIcon icon={Icons.faStar} /> 4.5 <span>(888)</span></p>
								</Col>
								<Col xs={6} onClick={() => this.openHouseSingle(0)}>
									<img
									  className="d-block w-100 house-img"
									  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
									  alt="First slide"
									/>
									<p className="house-location">Campanhã, Porto</p>
									<p className="house-name">Casa de Repouso São José de Maria</p>
									<p className="house-price">Desde 1.200 €/ mês</p>
									<p className="house-rating"><FontAwesomeIcon icon={Icons.faStar} /> 4.5 <span>(888)</span></p>
								</Col>
							</Row>
							<div className="btn-div">
								<a href="#" className="btn-secondary">Carregar mais</a>
							</div>
						</div>
						<div className="explore-zone section">
							<h3 className="title-default">Explore por zonas</h3>
							<p className="subtitle-default">Uma nova seleção de casas com conforto e qualidade verificados</p>
							<div className="zones-scroll">
								<div className="zones-container">
									<div className="zone-item">
										<div className="zone-img-container">
											<img
											  className="d-block w-100 zone-img"
											  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
											  alt="First slide"
											/>
											<p>Lares no Porto</p>
										</div>
										<p className="zone-district">Distrito Porto</p>
										<p className="zone-desc">Veja a oferta de lares, centros de…</p>
									</div>
									<div className="zone-item">
										<div className="zone-img-container">
											<img
											  className="d-block w-100 zone-img"
											  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
											  alt="First slide"
											/>
											<p>Lares em Portalegre</p>
										</div>
										<p className="zone-district">Distrito Portalegre</p>
										<p className="zone-desc">Veja a oferta no distrito de Portalegre</p>
									</div>
									<div className="zone-item">
										<div className="zone-img-container">
											<img
											  className="d-block w-100 zone-img"
											  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
											  alt="First slide"
											/>
											<p>Lares no Porto</p>
										</div>
										<p className="zone-district">Distrito Porto</p>
										<p className="zone-desc">Veja a oferta de lares, centros de…</p>
									</div>
									<div className="zone-item">
										<div className="zone-img-container">
											<img
											  className="d-block w-100 zone-img"
											  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
											  alt="First slide"
											/>
											<p>Lares em Portalegre</p>
										</div>
										<p className="zone-district">Distrito Portalegre</p>
										<p className="zone-desc">Veja a oferta no distrito de Portalegre</p>
									</div>
								</div>
							</div>
						</div>
						<div className="add-home section">
							<img
							  className="d-block w-100 add-home-img"
							  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
							  alt="First slide"
							/>
							<div className="add-home-container">
								<h3>Precisa de sair da rotina para precisa de especial assitência?</h3>
								<p>Desfruta de passeios refrescantes com todo o cuidado e gentileza de que merece!</p>
								<button className="btn-white">Ver mais</button>
							</div>
						</div>
					</TabPanel>
					<TabPanel>
						<h2>Eventos</h2>
					</TabPanel>
				</Tabs>
				<div className="footer section">
					<Select 
					defaultValue={options[0]}
					options={options} 
					/>
					<Accordion defaultActiveKey="0">
					    <Card>
							<Card.Header>
								<Accordion.Toggle as={Button} onClick={() => this.rotateArrow(1)} variant="link" eventKey="0">
									Larin
									<div className={'arrow-div ' + arrowRotation1} >
									<i className="menu-icon icon-arrow-down-icon"></i>
									</div>
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="0">
								<Card.Body>
									<ul>
										<li>Sobre o Larin</li>
										<li>Testemunhos</li>
										<li>Dicas</li>
										<li>Blog</li>
										<li>Centro de imprensa</li>
										<li>Contacte-nos</li>
									</ul>
								</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card>
							<Card.Header>
								<Accordion.Toggle as={Button} onClick={() => this.rotateArrow(2)} variant="link" eventKey="1">
									Precisa de ajuda
									<div className={'arrow-div ' + arrowRotation2} >
									<i className="menu-icon icon-arrow-down-icon"></i>
									</div>
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="1">
								<Card.Body>
									<ul>
										<li>Sobre o Larin</li>
										<li>Testemunhos</li>
										<li>Dicas</li>
										<li>Blog</li>
										<li>Centro de imprensa</li>
										<li>Contacte-nos</li>
									</ul>
								</Card.Body>
							</Accordion.Collapse>
						</Card>
						<Card>
							<Card.Header>
								<Accordion.Toggle as={Button} onClick={() => this.rotateArrow(3)} variant="link" eventKey="2">
									Adicionar o seu espaço
									<div className={'arrow-div ' + arrowRotation3} >
									<i className="menu-icon icon-arrow-down-icon"></i>
									</div>
								</Accordion.Toggle>
							</Card.Header>
							<Accordion.Collapse eventKey="2">
								<Card.Body>
									<ul>
										<li>Sobre o Larin</li>
										<li>Testemunhos</li>
										<li>Dicas</li>
										<li>Blog</li>
										<li>Centro de imprensa</li>
										<li>Contacte-nos</li>
									</ul>
								</Card.Body>
							</Accordion.Collapse>
						</Card>
					</Accordion>
					<p className="footer-links"><a href="#">Termos e condições</a> • <a href="#">Privacidade</a> • <a href="#">Site map</a></p>
					<img src={logoIcon} className="logo-icon" />
				</div>
			</div>
		)
	}
}

export default Explore;

class OpenMenu extends React.Component {
	render () {
		return(
			<div>
				<Menu />
			</div>
		)
	}
}

class OpenHouseSingle extends React.Component {
	render () {
		return(
			<div>
				<HouseSingle />
			</div>
		)
	}
}

