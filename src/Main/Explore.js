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
import axios from "axios";

class Explore extends React.Component {
	constructor(props){
	super(props);
		this.state = {
		   arrowRotation1: 'arrow-up',
		   arrowRotation2: 'arrow-down',
		   arrowRotation3: 'arrow-down',
		   sticky: false,
		   tabIndex: props.housesTab,
		   districtID: props.districtID,
		   prefixDistrict: props.prefixDistrict,
		   nameDistrict: props.nameDistrict,
		   spaces: [],
		   visibleSpaces: [],
		   districts: [],
		   services: [],
		   visibleServices: [],
		}
		this.handleScroll = this.handleScroll.bind(this);
		this.rotateArrow = this.rotateArrow.bind(this);
		
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll, true);
	}
	
	openHouseSingle = index => {
		ReactDOM.render(<OpenHouseSingle spaceID={index} history={"explore"}/>,document.getElementById('main-content'));
	};
	openService = index => {
		ReactDOM.render(<OpenService spaceID={index} history={"explore"}/>,document.getElementById('main-content'));
	};
	
	openMenu = index => {
		var myElement = document.getElementById('btn-menu');
		myElement.classList.add("active");
		ReactDOM.render(<OpenMenu />,document.getElementById('main-content'));
	};
	
	openExplore = (districtID, prefixDistrict, nameDistrict) => {
		ReactDOM.render(<OpenExplore  districtID={districtID} prefixDistrict={prefixDistrict} nameDistrict={nameDistrict} />,document.getElementById('main-content'));
	};

	expandSpaces = currentLength => {
		this.setState({ visibleSpaces: this.state.spaces.slice(0,currentLength+10) });
	};
	
	expandServices = currentLength => {
		this.setState({ visibleServices: this.state.services.slice(0,currentLength+10) });
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
	componentDidMount(){
		window.addEventListener('scroll', this.handleScroll, true);
		// START: GET SPACES BY DISTRICT
		axios.get(global.config.apiUrl+"getSpacesByDistrictID/"+this.state.districtID)
		.then(res => {
			const spaces = res.data;
			this.setState({ spaces });
			const visibleSpaces = this.state.spaces.slice(0, 10);
			this.setState({ visibleSpaces });
		  })
		// END: GET SPACES BY DISTRICT
		// START: GET DISTRICTS WITH SPACES
		axios.get(global.config.apiUrl+"getDistrictsWithSpaces")
		.then(res => {
			const districts = res.data;
			this.setState({ districts });
		  })
		// END: GET DISTRICTS WITH SPACES
		
		// START: GET SERVICES
		axios.get(global.config.apiUrl+"getServices/")
		.then(res => {
			const services = res.data;
			this.setState({ services });
			const visibleServices = this.state.services.slice(0, 10);
			this.setState({ visibleServices });
		  })
		// END: GET SERVICES
		
	}
	render () {
		const options = [
		  { value: 'pt', label: 'Portugu??s' },
		  { value: 'en', label: 'English' },
		  { value: 'en', label: 'Espa??ol' }
		]
		const { arrowRotation1, arrowRotation2, arrowRotation3, sticky, tabIndex, districtID, prefixDistrict, nameDistrict, spaces, services, districts } = this.state;
		return(
			<div className="explore main">
				<div className={sticky ? 'explore-top sticky' : 'explore-top'}>
					<Button className="btn-back" onClick={() => this.openMenu(0)}><i className="menu-icon icon-arrow-left-icon"></i></Button>
					<div className="search-container">
						<input type="text" className="search" placeholder="O que pretende..."/>
						<div className="search-icon">
							<i className="icon-search-icon"></i>
						</div>
					</div>
					<a href="#" className="btn-secondary">+ Filtros</a>
				</div>
				<Tabs selectedIndex={tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
				<div className="tab-scroll">
					<TabList>
						<Tab>Lares e resid??nciais</Tab>
						<Tab>Servi??os de apoio</Tab>
						<Tab>Eventos</Tab>
					</TabList>
				</div>
					<TabPanel>
						<div className="explore-houses section">
							<h2 className="title-default">Melhores lares e resid??ncias {prefixDistrict} {nameDistrict}</h2>
							<p className="subtitle-default">Encontre o lar ou resid??ncia para proporcionar o maior conforto ao seu ente mais querido.</p>
							<Row>
								{this.state.visibleSpaces.map((value, index) => {
									return (
										<Col xs={6} onClick={() => this.openHouseSingle(value.URL)}>
											<img
											  className="d-block w-100 house-img"
											  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
											  alt="First slide"
											/>
											<p className="house-location">Matosinhos, Porto</p>
											<p className="house-name">{value.NAME}</p>
											<p className="house-price">Desde {value.PRICE} ???/ m??s</p>
											<p className="house-rating"><FontAwesomeIcon icon={Icons.faStar} /> {value.RATING} <span>(888)</span></p>
										</Col>
									)
								})}
							</Row>
							<div className="btn-div">
								{this.state.visibleSpaces && this.state.visibleSpaces.length < spaces.length &&
									<a onClick={() => this.expandSpaces(this.state.visibleSpaces.length)} className="btn-secondary">Carregar mais</a>
								}
							</div>
						</div>
						<div className="explore-zone section">
							<h3 className="title-default">Explore por zonas</h3>
							<p className="subtitle-default">Uma nova sele????o de casas com conforto e qualidade verificados</p>
							<div className="zones-scroll">
								<div className="zones-container">
									{districts.map((value, index) => {
										return (
											<div className="zone-item">
												<div className="zone-img-container" onClick={() => this.openExplore(value.DISTRICT_ID, value.PREFIX, value.NAME)}>
													<img
													  className="d-block w-100 zone-img"
													  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
													  alt="First slide"
													/>
													<p>Lares {value.PREFIX} {value.NAME}</p>
												</div>
												<p className="zone-district">Distrito {value.NAME}</p>
												<p className="zone-desc">Veja a oferta de lares, centros de???</p>
											</div>
										)
									})}
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
								<h3>Precisa de sair da rotina para precisa de especial assit??ncia?</h3>
								<p>Desfruta de passeios refrescantes com todo o cuidado e gentileza de que merece!</p>
								<button className="btn-white">Ver mais</button>
							</div>
						</div>
					</TabPanel>
					<TabPanel>
						<div className="explore-houses section">
							<h2 className="title-default">Os servi??os que lhe dar??o o conforto desejado</h2>
							<p className="subtitle-default">Tenha os servi??os dos melhores profissionais para tornar o dia-a-dia para confort??vel, soci??vel e feliz.</p>
							<Row>
								{this.state.visibleServices.map((value, index) => {
									return (
										<Col xs={6} onClick={() => this.openService(value.URL)}>
											<img
											  className="d-block w-100 house-img"
											  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
											  alt="First slide"
											/>
											<p className="service-name">{value.NAME}</p>
										</Col>
									)
								})}
							</Row>
							<div className="btn-div">
								{this.state.visibleServices && this.state.visibleServices.length < services.length &&
									<a onClick={() => this.expandServices(this.state.visibleServices.length)} className="btn-secondary">Carregar mais</a>
								}
							</div>
						</div>
						<div className="explore-zone section">
							<h3 className="title-default">Explore por zonas</h3>
							<p className="subtitle-default">Uma nova sele????o de casas com conforto e qualidade verificados</p>
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
										<p className="zone-desc">Veja a oferta de lares, centros de???</p>
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
										<p className="zone-desc">Veja a oferta de lares, centros de???</p>
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
								<h3>Precisa de sair da rotina para precisa de especial assit??ncia?</h3>
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
									Adicionar o seu espa??o
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
					<p className="footer-links"><a href="#">Termos e condi????es</a> ??? <a href="#">Privacidade</a> ??? <a href="#">Site map</a></p>
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
	constructor(props){
    super(props);
		this.state = {
		   spaceID: props.spaceID,
		   history: props.history
		}
	}
	render () {
		window.history.pushState("", "", '/house/'+this.state.spaceID);
		return(
			<div>
				<HouseSingle activeBottom={1} spaceID={this.state.spaceID} history={this.state.history}/>
			</div>
		)
	}
}
class OpenService extends React.Component {
	constructor(props){
    super(props);
		this.state = {
		   spaceID: props.spaceID,
		   history: props.history
		}
	}
	render () {
		window.history.pushState("", "", '/service/'+this.state.spaceID);
		return(
			<div>
				<HouseSingle activeBottom={4} spaceID={this.state.spaceID} history={this.state.history}/>
			</div>
		)
	}
}
class OpenExplore extends React.Component {
	constructor(props){
    super(props);
		this.state = {
		   districtID: props.districtID,
		   prefixDistrict: props.prefixDistrict,
		   nameDistrict: props.nameDistrict
		}
	}
	render () {
		window.history.pushState("", "", '/explore');
		return(
			<div>
				<Explore districtID={this.state.districtID} prefixDistrict={this.state.prefixDistrict} nameDistrict={this.state.nameDistrict} housesTab={0} />
			</div>
		)
	}
}
