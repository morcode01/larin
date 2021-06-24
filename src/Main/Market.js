import React from 'react';
import './Market.css';
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

class Market extends React.Component {
	constructor(){
    super();
		this.state = {
		   arrowRotation1: 'arrow-up',
		   arrowRotation2: 'arrow-down',
		   arrowRotation3: 'arrow-down'
		}
		this.rotateArrow = this.rotateArrow.bind(this);
	}
	  
	
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
			<div className="market main">
				<div className="carousel-container">
					<Carousel controls={false}>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={process.env.PUBLIC_URL + '/Slides/slide-m-1.png'}
								alt="First slide"
							/>
							<Carousel.Caption>
								<h3>Creme Reafirmante, Nutritivo e Reparador - 50 ml | 100% Garantía</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
								alt="First slide"
							/>
							<Carousel.Caption>
								<h3>Creme Reafirmante, Nutritivo e Reparador - 50 ml | 100% Garantía</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={process.env.PUBLIC_URL + '/Slides/slide-2.jpg'}
								alt="First slide"
							/>
							<Carousel.Caption>
								<h3>Creme Reafirmante, Nutritivo e Reparador - 50 ml | 100% Garantía</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={process.env.PUBLIC_URL + '/Slides/slide-3.jpg'}
								alt="First slide"
							/>
							<Carousel.Caption>
								<h3>Creme Reafirmante, Nutritivo e Reparador - 50 ml | 100% Garantía</h3>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
				<div className="search-container">
					<input type="text" className="search"/>
					<div className="search-icon">
						<i className="icon-search-icon"></i>
					</div>
				</div>
				<div className="suggestions section">
					<h4 className="title-default">Sugestões para si</h4>
					<div className="suggestions-scroll">
						<div className="suggestions-container">
							<div className="suggestions-item">
								<div className="suggestions-img-container">
									<img
									  className="d-block w-100 suggestions-img"
									  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
									  alt="First slide"
									/>
								</div>
								<p className="suggestions-title">Endocare</p>
								<p className="suggestions-subtitle">Creme rejuvenescente para mãos - 50 ml</p>
								<p className="suggestions-rating"><FontAwesomeIcon icon={Icons.faStar} /> 4.5 <span>(888)</span></p>
								<p className="suggestions-price">26.50 € <span>26.50 €</span></p>
							</div>
							<div className="suggestions-item">
								<div className="suggestions-img-container">
									<img
									  className="d-block w-100 suggestions-img"
									  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
									  alt="First slide"
									/>
								</div>
								<p className="suggestions-title">Endocare</p>
								<p className="suggestions-subtitle">Creme rejuvenescente para mãos - 50 ml</p>
								<p className="suggestions-rating"><FontAwesomeIcon icon={Icons.faStar} /> 4.5 <span>(888)</span></p>
								<p className="suggestions-price">26.50 € <span>26.50 €</span></p>
							</div>
							<div className="suggestions-item">
								<div className="suggestions-img-container">
									<img
									  className="d-block w-100 suggestions-img"
									  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
									  alt="First slide"
									/>
								</div>
								<p className="suggestions-title">Endocare</p>
								<p className="suggestions-subtitle">Creme rejuvenescente para mãos - 50 ml</p>
								<p className="suggestions-rating"><FontAwesomeIcon icon={Icons.faStar} /> 4.5 <span>(888)</span></p>
								<p className="suggestions-price">26.50 € <span>26.50 €</span></p>
							</div>
							<div className="suggestions-item">
								<div className="suggestions-img-container">
									<img
									  className="d-block w-100 suggestions-img"
									  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
									  alt="First slide"
									/>
								</div>
								<p className="suggestions-title">Endocare</p>
								<p className="suggestions-subtitle">Creme rejuvenescente para mãos - 50 ml</p>
								<p className="suggestions-rating"><FontAwesomeIcon icon={Icons.faStar} /> 4.5 <span>(888)</span></p>
								<p className="suggestions-price">26.50 € <span>26.50 €</span></p>
							</div>
							<div className="suggestions-item">
								<div className="suggestions-img-container">
									<img
									  className="d-block w-100 suggestions-img"
									  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
									  alt="First slide"
									/>
								</div>
								<p className="suggestions-title">Endocare</p>
								<p className="suggestions-subtitle">Creme rejuvenescente para mãos - 50 ml</p>
								<p className="suggestions-rating"><FontAwesomeIcon icon={Icons.faStar} /> 4.5 <span>(888)</span></p>
								<p className="suggestions-price">26.50 € <span>26.50 €</span></p>
							</div>
						</div>
					</div>
					<a href="#" className="btn-view-more">Ver todos <FontAwesomeIcon icon={Icons.faArrowRight} /></a>
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
									<FontAwesomeIcon icon={Icons.faAngleDown} />
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
									<FontAwesomeIcon icon={Icons.faAngleDown} />
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
									<FontAwesomeIcon icon={Icons.faAngleDown} />
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

export default Market;
