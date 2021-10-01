import React from 'react';
import ReactDOM from 'react-dom';
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

class Home extends React.Component {
	constructor(){
    super();
		this.state = {
		   arrowRotation1: 'arrow-up',
		   arrowRotation2: 'arrow-down',
		   arrowRotation3: 'arrow-down'
		}
		this.rotateArrow = this.rotateArrow.bind(this);
	}
	 
	openHouseSingle = index => {
		ReactDOM.render(<OpenHouseSingle />,document.getElementById('main-content'));
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
		const { arrowRotation1, arrowRotation2, arrowRotation3 } = this.state;
		return(
			<div className="home main">
				<div className="carousel-container">
					<Carousel controls={false} fade={true}>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
								alt="First slide"
							/>
							<Carousel.Caption>
								<h3>Bem-vindo a casa!</h3>
								<p>O seu lar in..crível</p>
							</Carousel.Caption>
							<div className="info-bottom">
								<p className="title">Mafra, Lisboa</p>
								<p className="description">Casa de Repouso São José de Maria <a href="#">Ver mais ></a></p>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<img
							  className="d-block w-100"
							  src={process.env.PUBLIC_URL + '/Slides/slide-2.jpg'}
							  alt="Second slide"
							/>
							<Carousel.Caption>
							  <h3>Bem-vindo a casa!</h3>
							  <p>O seu lar in..crível</p>
							</Carousel.Caption>
							<div className="info-bottom">
								<p className="title">Mafra, Lisboa</p>
								<p className="description">Casa de Repouso São José de Maria <a href="#">Ver mais ></a></p>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<img
							  className="d-block w-100"
							  src={process.env.PUBLIC_URL + '/Slides/slide-3.jpg'}
							  alt="Third slide"
							/>
							<Carousel.Caption>
							  <h3>Bem-vindo a casa!</h3>
							  <p>O seu lar in..crível</p>
							</Carousel.Caption>
							<div className="info-bottom">
								<p className="title">Mafra, Lisboa</p>
								<p className="description">Casa de Repouso São José de Maria <a href="#">Ver mais ></a></p>
							</div>
						</Carousel.Item>					
					</Carousel>
					<div className="search-container">
						<label>Onde</label>
						<input type="text" className="search" placeholder='Experimente procurar "Porto"'/>
						<div className="search-icon">
							<i className="icon-search-icon"></i>
						</div>
					</div>
				</div>
				<div className="own-space">
				<div>
					<img
					  src={process.env.PUBLIC_URL + '/Slides/slide-3.jpg'}
					  alt="Third slide"
					/>
					</div>
					<div>
						<h4>Saiba quanto poderia ganhar ao promover o seu espaço</h4>
						<p>Coloque o seu espaço disponível para todos que procuram um lar</p>
					</div>
				</div>
				<div className="features section">
					<h3 className="title-default">Melhores lares e residências no Porto</h3>
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
					<a href="#" className="btn-view-more">Ver todos <FontAwesomeIcon icon={Icons.faArrowRight} /></a>
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
						<h3>Saiba quanto poderia ganhar ao promover o seu espaço</h3>
						<p>Coloque o seu espaço disponível para todos que procuram um lar</p>
						<button className="btn-white">Adicionar um lar</button>
					</div>
				</div>
				<div className="services section">
					<h3 className="title-default">Serviços na 3ª pessoa</h3>
					<p className="subtitle-default">Encontre os melhores serviços para proporcionar o maior conforto ao seu ente mais querido.</p>
					<div className="services-scroll">
						<div className="services-container">
							<div className="service-item">
								<img
								  className="d-block w-100 service-img"
								  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
								  alt="First slide"
								/>
								<p className="service-location">Mafra, Lisboa</p>
								<p className="service-name">Dia de descanso nas termas S. José Salvador</p>
								<p className="service-price">Desde 1.200 €/ mês</p>
								<p className="service-rating"><FontAwesomeIcon icon={Icons.faStar} /> 4.5 <span>(888)</span></p>
							</div>
							<div className="service-item">
								<img
								  className="d-block w-100 service-img"
								  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
								  alt="First slide"
								/>
								<p className="service-location">Mafra, Lisboa</p>
								<p className="service-name">Dia de descanso nas termas S. José Salvador</p>
								<p className="service-price">Desde 1.200 €/ mês</p>
								<p className="service-rating"><FontAwesomeIcon icon={Icons.faStar} /> 4.5 <span>(888)</span></p>
							</div>
							<div className="service-item">
								<img
								  className="d-block w-100 service-img"
								  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
								  alt="First slide"
								/>
								<p className="service-location">Mafra, Lisboa</p>
								<p className="service-name">Dia de descanso nas termas S. José Salvador</p>
								<p className="service-price">Desde 1.200 €/ mês</p>
								<p className="service-rating"><FontAwesomeIcon icon={Icons.faStar} /> 4.5 <span>(888)</span></p>
							</div>
							<div className="service-item">
								<img
								  className="d-block w-100 service-img"
								  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
								  alt="First slide"
								/>
								<p className="service-location">Mafra, Lisboa</p>
								<p className="service-name">Dia de descanso nas termas S. José Salvador</p>
								<p className="service-price">Desde 1.200 €/ mês</p>
								<p className="service-rating"><FontAwesomeIcon icon={Icons.faStar} /> 4.5 <span>(888)</span></p>
							</div>
						</div>
					</div>
					<a href="#" className="btn-view-more">Ver todos <FontAwesomeIcon icon={Icons.faArrowRight} /></a>
				</div>
				<div className="extra section">
					<h2 className="title-default">A casa onde o seu pai, avós ou bisavós irão morar é importante!</h2>
					<p className="subtitle-default">Procure as melhores condições para aqueles de quem gostamos mais, de modo que possam facilmente encontrar as condições necessárias para continuar a sorrir, cheio de conforto que tanto merecem.<br/><b>Bem vindo a casa!</b></p>
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

export default Home;

class OpenHouseSingle extends React.Component {
	render () {
		return(
			<div>
				<HouseSingle activeBottom={1} />
			</div>
		)
	}
}
class OpenService extends React.Component {
	render () {
		return(
			<div>
				<HouseSingle activeBottom={4} />
			</div>
		)
	}
}
