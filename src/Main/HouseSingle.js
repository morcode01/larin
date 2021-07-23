import React from 'react';
import './HouseSingle.css';
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

class HouseSingle extends React.Component {
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
			<div className="house-single main">
				<div className="carousel-container">
					<Carousel interval={null}>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={process.env.PUBLIC_URL + '/Slides/slide-m-1.png'}
								alt="First slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
								alt="First slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={process.env.PUBLIC_URL + '/Slides/slide-2.jpg'}
								alt="First slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src={process.env.PUBLIC_URL + '/Slides/slide-3.jpg'}
								alt="First slide"
							/>
						</Carousel.Item>
					</Carousel>
				</div>
				<div className="house-details">
					<h1>Casa de Repouso São José de Maria</h1>
					<div className="house-rating">
						<FontAwesomeIcon icon={Icons.faStar} /><FontAwesomeIcon icon={Icons.faStar} /><FontAwesomeIcon icon={Icons.faStar} /><FontAwesomeIcon icon={Icons.faStar} /><FontAwesomeIcon icon={Icons.faStar} /> <span className="house-price">888 • <strong>€€</strong></span>
					</div>
					<div className="house-location">
						<p><FontAwesomeIcon icon={Icons.faMapMarkerAlt} size="2x"/> Mafra, Lisboa - <a href="#">Ver no mapa</a></p>
						<p><FontAwesomeIcon icon={Icons.faMapMarkerAlt} size="2x"/> ERPI - Estrutura Residencial para Idosos</p>
						<p><FontAwesomeIcon icon={Icons.faMapMarkerAlt} size="2x"/> IPSS</p>
					</div>
					<div className="house-description">
						Procure as melhores condições para aqueles de quem gostamos mais, de modo que possam facilmente encontrar as condições necessárias para continuar a sorrir. <br/>Lorem ipsum… <a href="#">Ler mais</a>
					</div>
					<hr/>
					<div className="house-description-list">
						<h4>Descrição</h4>
						<ul>
							<li>Fundação <span>1980</span></li>
							<li>Licença <span>09/2013</span></li>
							<li>Lotação <span>90 px</span></li>
							<li>Certificação Qualidade <span>Sim</span></li>
							<li>Actividades e projectos <span>Sim</span></li>
							<li>Residência <span>Sim</span></li>
							<li>Centro de dia <span>Sim</span></li>
							<li>Massagens e Cuidados pessoais <span>Sim</span></li>
							<li>Eventos culturais <span>Sim</span></li>
							<li>Horário de visitas <span>10h - 17h</span></li>
							<li>Preço médio <span>€€</span></li>
						</ul>
						<a href="#">Ler Mais <FontAwesomeIcon icon={Icons.faAngleDown} size="lg"/></a>
					</div>
					<hr/>
					<div className="house-map-location">
						<h4>Localização</h4>
						<p>A informação da localização exacta será fornecida após reserva ou registo.</p>
						<img
							className="d-block w-100"
							src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
							alt="First slide"
						/>
					</div>
					<hr/>
					<div className="house-host">
						<Row>
							<Col xs={8}>
								<h4>Alberto de Carvalho</h4>
								<p>O seu anfitrião</p>
								<div className="house-host-rating">
									<FontAwesomeIcon icon={Icons.faStar} /><FontAwesomeIcon icon={Icons.faStar} /><FontAwesomeIcon icon={Icons.faStar} /><FontAwesomeIcon icon={Icons.faStar} /><FontAwesomeIcon icon={Icons.faStar} /> <span className="house-price">888</span>
								</div>
							</Col>
							<Col xs={4}>
								<img
									className="house-host-img"
									src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
									alt="First slide"
								/>
							</Col>
						</Row>
						<div className="house-host-description">
							Alberto de Carvalho é responsável pela Casa de Repouso São José de Maria. Os melhores condições para aqueles de quem gostamos necessárias para continuar a sorrir… <a href="#">Ler mais</a>
						</div>
						<Button className="btn-secondary">Enviar mensagem a Alberto</Button>
					</div>
					<hr/>
					<div className="house-guidelines">
						<h4>Diretrizes da casa</h4>
						<p>Pontos de bom funcionamento deste espaço</p>
						<FontAwesomeIcon icon={Icons.faAngleRight} size="3x" />
					</div>
					<hr/>
					<div className="house-comments">
						<h4>Comentários sobre a Casa de Repouso São José de Maria</h4>
						<div className="house-comment-rating">
							<FontAwesomeIcon icon={Icons.faStar} /><FontAwesomeIcon icon={Icons.faStar} /><FontAwesomeIcon icon={Icons.faStar} /><FontAwesomeIcon icon={Icons.faStar} /><FontAwesomeIcon icon={Icons.faStar} /> <span className="house-price">888</span>
						</div>
						<div className="house-comment">
							<div className="house-comment-img-name">
								<img
									className="house-comment-img"
									src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
									alt="First slide"
								/>
								<div className="house-comment-name-date">
									<p className="house-comment-name">João</p>
									<p className="house-comment-date">maio de 2019</p>
								</div>
							</div>
							<div className="house-comment-message">
								Procure as melhores condições para aqueles de quem gostamos mais, de modo que possam facilmente encontrar as condições necessárias para continuar a sorrir… <a href="#">Ler mais</a>
							</div>
						</div>
						<div className="house-comment last">
							<div className="house-comment-img-name">
								<img
									className="house-comment-img"
									src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
									alt="First slide"
								/>
								<div className="house-comment-name-date">
									<p className="house-comment-name">João</p>
									<p className="house-comment-date">maio de 2019</p>
								</div>
							</div>
							<div className="house-comment-message">
								Procure as melhores condições para aqueles de quem gostamos mais, de modo que possam facilmente encontrar as condições necessárias para continuar a sorrir… <a href="#">Ler mais</a>
							</div>
						</div>
						<a href="#" className="read-all-comments">Ler todos os comentários <FontAwesomeIcon icon={Icons.faArrowRight} /></a>
						<br/><br/>
						<a href="#" className="report-house">Denunciar este espaço <FontAwesomeIcon icon={Icons.faFlag} /></a>
					</div>
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

export default HouseSingle;
