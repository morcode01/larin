import React from 'react';
import ReactDOM from 'react-dom';
import '../config.js';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select'
import logoIcon from '../Img/larin-icon.svg';
import HouseSingle from '../Main/HouseSingle';
import Explore from '../Main/Explore';
import axios from "axios";

class Home extends React.Component {
	constructor(props){
    super(props);
		this.state = {
		   arrowRotation1: 'arrow-up',
		   arrowRotation2: 'arrow-down',
		   arrowRotation3: 'arrow-down',
		   banners: [],
		   spacesFeatured: [],
		   visibleSpacesFeatured: [],
		   districts: [],
		   district: [],
		   services: [],
		   ownSpaceClose: false,
		   myDistrict: this.props.myDistrict,
		}
		this.rotateArrow = this.rotateArrow.bind(this);
	}
	 
	openHouseSingle = index => {
		ReactDOM.render(<OpenHouseSingle spaceID={index} history={"home"} />,document.getElementById('main-content'));
	};

	openService = index => {
		ReactDOM.render(<OpenService spaceID={index} history={"home"} />,document.getElementById('main-content'));
	};
	
	openExplore = (districtID, prefixDistrict, nameDistrict) => {
		ReactDOM.render(<OpenExplore  districtID={districtID} prefixDistrict={prefixDistrict} nameDistrict={nameDistrict} />,document.getElementById('main-content'));
	};
	
	expandSpacesFeatured = currentLength => {
		this.setState({ visibleSpacesFeatured: this.state.spacesFeatured.slice(0,currentLength+10) });
	};

	closeOwnSpace = () => {
		this.setState({ ownSpaceClose: true });
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
		// START: GET BANNERS
		axios.get(global.config.apiUrl+"getBanners")
		.then(res => {
			const banners = res.data;
			this.setState({ banners });
		  })
		// END: GET BANNERS
		// START: GET SPACES FEATURED
		axios.get(global.config.apiUrl+"getSpacesByDistrict/"+this.state.myDistrict)
		.then(res => {
			const spacesFeatured = res.data;
			this.setState({ spacesFeatured });
			const visibleSpacesFeatured = this.state.spacesFeatured.slice(0, 10);
			this.setState({ visibleSpacesFeatured });
		  })
		// END: GET SPACES FEATURED
		// START: GET DISTRICT BY NAME
		axios.get(global.config.apiUrl+"getDistrictByName/"+this.state.myDistrict)
		.then(res => {
			const district = res.data;
			this.setState({ district });
		  })
		// END: GET DISTRICT BY NAME
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
		  })
		// END: GET SERVICES
	}
	componentDidUpdate(prevProps){
		const { myDistrict } = this.props;
		if (myDistrict !== prevProps.myDistrict) {
			this.setState({ myDistrict });
			
			// START: GET SPACES FEATURED
			axios.get(global.config.apiUrl+"getSpacesByDistrict/"+myDistrict)
			.then(res => {
				const spacesFeatured = res.data;
				this.setState({ spacesFeatured });
				const visibleSpacesFeatured = this.state.spacesFeatured.slice(0, 10);
				this.setState({ visibleSpacesFeatured });
			})
			// END: GET SPACES FEATURED
			// START: GET DISTRICT BY NAME
			axios.get(global.config.apiUrl+"getDistrictByName/"+myDistrict)
			.then(res => {
				const district = res.data;
				this.setState({ district });
			})
			// END: GET DISTRICT BY NAME
		}
		
	}
	render () {
		const options = [
		  { value: 'pt', label: 'Portugu??s' },
		  { value: 'en', label: 'English' },
		  { value: 'en', label: 'Espa??ol' }
		]
		const { arrowRotation1, arrowRotation2, arrowRotation3, banners, spacesFeatured, districts, district, services, ownSpaceClose } = this.state;
		return(
			<div className="home main">
				<div className="carousel-container">
					<Carousel controls={false} fade={true}>
						{banners.map((value, index) => {
							return (
								<Carousel.Item key={index}>
									<img
										className="d-block w-100"
										src={global.config.uploadsPath + value.FILE}
										alt="First slide"
									/>
									<Carousel.Caption>
										<h3>{value.TITLE1}</h3>
										<p>{value.SUBTITLE1}</p>
									</Carousel.Caption>
									<div className="info-bottom">
										<p className="title">{value.TITLE2}</p>
										<p className="description">{value.SUBTITLE2} <a href="#">Ver mais &gt;</a></p>
									</div>
								</Carousel.Item>
							)
						})}
					</Carousel>
					<div className="search-container">
						<label>Onde</label>
						<input type="text" className="search" placeholder='Experimente procurar "Porto"'/>
						<div className="search-icon">
							<i className="icon-search-icon"></i>
						</div>
					</div>
				</div>
				<div className={"own-space " + (ownSpaceClose ? 'closed' : '')}>
					<div>
						<img
						src={process.env.PUBLIC_URL + '/Slides/slide-3.jpg'}
						alt="Third slide"
						/>
					</div>
					<div className="own-space-text">
						<h4>Saiba quanto poderia ganhar ao promover o seu espa??o</h4>
						<p>Coloque o seu espa??o dispon??vel para todos que procuram um lar</p>
					</div>
					<button className="btn-close" onClick={() => this.closeOwnSpace()}><i className="menu-icon icon-close-btt"></i></button>
				</div>
				<div className="features section">
					{district &&
						<div>
							<h3 className="title-default">Melhores lares e resid??ncias {district.PREFIX} {district.NAME}</h3>
							<p className="subtitle-default">Encontre o lar ou resid??ncia para proporcionar o maior conforto ao seu ente mais querido.</p>
						</div>
					}
					<Row>
						{this.state.visibleSpacesFeatured.map((value, index) => {
							return (
								<Col xs={6} onClick={() => this.openHouseSingle(value.URL)}>
									<img
									  className="d-block w-100 house-img"
									  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
									  alt="First slide"
									/>
									{district &&
										<p className="house-location">Matosinhos, {district.NAME}</p>
									}
									<p className="house-name">{value.NAME}</p>
									<p className="house-price">Desde {value.PRICE} ???/ m??s</p>
									<p className="house-rating"><FontAwesomeIcon icon={Icons.faStar} /> {value.RATING} <span>(888)</span></p>
								</Col>
							)
						})}
					</Row>
					{this.state.visibleSpacesFeatured && this.state.visibleSpacesFeatured.length < spacesFeatured.length &&
						<a onClick={() => this.expandSpacesFeatured(this.state.visibleSpacesFeatured.length)} className="btn-view-more">Ver mais <FontAwesomeIcon icon={Icons.faArrowRight} /></a>
					}
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
						<h3>Saiba quanto poderia ganhar ao promover o seu espa??o</h3>
						<p>Coloque o seu espa??o dispon??vel para todos que procuram um lar</p>
						<button className="btn-white">Adicionar um lar</button>
					</div>
				</div>
				<div className="services section">
					<h3 className="title-default">Servi??os na 3?? pessoa</h3>
					<p className="subtitle-default">Encontre os melhores servi??os para proporcionar o maior conforto ao seu ente mais querido.</p>
					<div className="services-scroll">
						<div className="services-container">
							{services.map((value, index) => {
								return (
									<div className="service-item" onClick={() => this.openService(value.URL)}>
										<img
										className="d-block w-100 service-img"
										src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
										alt="First slide"
										/>
										<p className="service-name">{value.NAME}</p>
									</div>
								)
							})}
						</div>
					</div>
					<a href="#" className="btn-view-more">Ver todos <FontAwesomeIcon icon={Icons.faArrowRight} /></a>
				</div>
				<div className="extra section">
					<h2 className="title-default">A casa onde o seu pai, av??s ou bisav??s ir??o morar ?? importante!</h2>
					<p className="subtitle-default">Procure as melhores condi????es para aqueles de quem gostamos mais, de modo que possam facilmente encontrar as condi????es necess??rias para continuar a sorrir, cheio de conforto que tanto merecem.<br/><b>Bem vindo a casa!</b></p>
				</div>
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

export default Home;

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
