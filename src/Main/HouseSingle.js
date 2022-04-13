import React from 'react';
import ReactDOM from 'react-dom';
import './HouseSingle.css';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import DatePicker, { registerLocale } from "react-datepicker";
import pt from "date-fns/locale/pt";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import logoIcon from '../Img/larin-icon.svg';
import Home from '../Main/Home';
import Explore from '../Main/Explore';
import Header from '../Header/Header';
import axios from "axios";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
registerLocale("pt", pt);

class HouseSingle extends React.Component {
	constructor(props){
    super(props);
		this.state = {
		   arrowRotation1: 'arrow-up',
		   arrowRotation2: 'arrow-down',
		   arrowRotation3: 'arrow-down',
		   activeBottom: props.activeBottom,
		   spaceID: props.spaceID,
		   history: props.history,
		   spaceDetails: [],
		   spaceDescription: '',
		   bedroomType:1,
		   startDate: new Date(),
		   numberPeople: 1,
		   activeCheckbox:0
		}
		this.rotateArrow = this.rotateArrow.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
	setActiveBottom = index => {
		this.setState({ activeBottom: index });
	}
	setBedroomType = index => {
		this.setState({ bedroomType: index });
	}
	setNumberPeople = index => {
		if(index==1 && this.state.numberPeople!=1) this.setState({ numberPeople: this.state.numberPeople-1 });
		else if(index==2) this.setState({ numberPeople: this.state.numberPeople+1 });
	}
	setActiveCheckbox = index => {
		if(this.state.activeCheckbox != index) this.setState({ activeCheckbox: index });
		else this.setState({ activeCheckbox: 0 });
	}
	expandDescription = () => {
		this.setState({ spaceDescription: this.state.spaceDetails.DESCRIPTION });
	}
	goBack = () => {
		if(this.state.history=="home") ReactDOM.render(<OpenHome />,document.getElementById('main-content'));
		else ReactDOM.render(<OpenExplore  districtID={localStorage.getItem('myDistrictID')} prefixDistrict={localStorage.getItem('myDistrictPrefix')} nameDistrict={localStorage.getItem('myDistrict')} />,document.getElementById('main-content'));
	};
	handleChange(date) {
		this.setState({
		  startDate: date
		})
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
	selectStyle = {
		container: (provided, state) => ({
		  ...provided,
		  height: 50
		}),
		control: (provided, state) => ({
		  ...provided,
		  height: '100%'
		}),
		option: (provided, state) => ({
		  ...provided,
		  fontWeight: state.isSelected ? "bold" : "normal",
		  color: state.isSelected ? "#746666" : "#B1A1A1",
		  fontSize: 16,
		  backgroundColor: "transparent"
		}),
		singleValue: (provided, state) => ({
		  ...provided,
		  color: "#746666",
		  fontWeight: "bold",
		  fontSize: 16
		}),
		indicatorSeparator: (provided, state) => ({
		  ...provided,
		  width: 0
		})
	  };
	componentDidMount(){
		if(this.props.activeBottom != 4){
			// START: GET SPACE
			axios.get(global.config.apiUrl+"getSpaceByURL/"+this.state.spaceID)
			.then(res => {
				const spaceDetails = res.data;
				this.setState({ spaceDetails });
				if(res.data.DESCRIPTION.length > 100) this.setState({ spaceDescription: res.data.DESCRIPTION.substring(0,99)+'...' })
				else this.setState({ spaceDescription: res.data.DESCRIPTION })
			  })
			// END: GET SPACE
		}
		else{
			// START: GET SERVICE
			axios.get(global.config.apiUrl+"getServiceByURL/"+this.state.spaceID)
			.then(res => {
				const spaceDetails = res.data.FIELDS;
				this.setState({ spaceDetails });
				if(res.data.DESCRIPTION.length > 100) this.setState({ spaceDescription: res.data.DESCRIPTION.substring(0,99)+'...' })
				else this.setState({ spaceDescription: res.data.DESCRIPTION })
			  })
			// END: GET SERVICE
		}
	}
	render () {
		const options = [
		  { value: 'pt', label: 'Português' },
		  { value: 'en', label: 'English' },
		  { value: 'en', label: 'Español' }
		]
		const optionsRegime = [
		  { value: '1', label: 'Residência permanente' },
		  { value: '2', label: 'Opção 2' }
		]
		const optionsHours = [
		  { value: '7:00', label: '7:00' },
		  { value: '8:00', label: '8:00' },
		  { value: '9:00', label: '9:00' },
		  { value: '10:00', label: '10:00' },
		  { value: '11:00', label: '11:00' },
		  { value: '12:00', label: '12:00' },
		  { value: '13:00', label: '13:00' },
		  { value: '14:00', label: '14:00' },
		  { value: '15:00', label: '15:00' },
		  { value: '16:00', label: '16:00' },
		  { value: '17:00', label: '17:00' },
		  { value: '18:00', label: '18:00' },
		  { value: '19:00', label: '19:00' },
		  { value: '20:00', label: '20:00' },
		  { value: '21:00', label: '21:00' },
		  { value: '22:00', label: '22:00' },
		  { value: '23:00', label: '23:00' },
		]
		const optionsRegularity = [
		  { value: 'Díario', label: 'Díario' },
		  { value: 'Semanal', label: 'Semanal' },
		  { value: 'Mensal', label: 'Mensal' },
		  { value: 'Anual', label: 'Anual' }
		]
		const monthNames = ["January", "February", "March", "April", "May", "June",
		  "July", "August", "September", "October", "November", "December"
		];

		const prevIcon = <i className="icon-arrow-left-icon"></i>;
		const nextIcon = <i className="icon-arrow-right-icon"></i>;
		
		
		const { arrowRotation1, arrowRotation2, arrowRotation3, spaceID, spaceDetails } = this.state;
		return(
			<div className="house-single main">
				<div className={"house-single-bottom " + (this.state.activeBottom != 1 ? "dnone" : "")} >
					<div className="nav-bottom">
						<Container>
							<Row>
								<Col>
									<a onClick={() => this.setActiveBottom(3)}>Pedir para reservar</a>
								</Col>
								<Col>
									<Button className="btn-primary" onClick={() => this.setActiveBottom(2)}>Ver preço</Button>
								</Col>
							</Row>
						</Container>
					</div>
				</div>
				<div className={"house-single-bottom " + (this.state.activeBottom != 2 ? "dnone" : "")}>
					<div className="nav-bottom">
						<Container>
							<Row>
								<Col>
									<div>
										<p className="hsb-label">Preço desde <span>-30%</span></p>
										<p className="hsb-price">500,00 €</p>
									</div>
								</Col>
								<Col>
									<Button className="btn-secondary" onClick={() => this.setActiveBottom(3)}>Reservar</Button>
								</Col>
							</Row>
						</Container>
					</div>
				</div>
				<div className={"house-single-bottom " + (this.state.activeBottom != 3 ? "dnone" : "")}>
					<div className="nav-bottom">
						<Container>
							<Row>
								<Col>
									<div>
										<p className="hsb-label">Preço desde <span>-30%</span></p>
										<p className="hsb-price">500,00 €</p>
									</div>
								</Col>
								<Col>
									<Button className="btn-primary" onClick={() => this.setActiveBottom(1)}>Confirmar</Button>
								</Col>
							</Row>
						</Container>
					</div>
				</div>
				<div className={"house-single-booking " + (this.state.activeBottom != 3 ? "dnone" : "")}>
					<div className="hs-booking">
						<Row>
							<Col xs={12}>
							<p className="label">Regime pretendido</p>
							<Select 
							defaultValue={optionsRegime[0]}
							options={optionsRegime}
							styles={this.selectStyle}
							/>
							</Col>
							<Col xs={12}>
								<p className="label">Tipo de quarto</p>
							</Col>
							<Col xs={6}>
								<div className={"bedroom-type-container " + (this.state.bedroomType == 1 ? "selected" : "")} onClick={() => this.setBedroomType(1)}>
									<i className="menu-icon icon-bed-icon"></i>
									<div>
										<p className="bedroom-type-title">Quarto privado</p>
										<p className="bedroom-type-desc">Cama individual</p>
									</div>
								</div>
							</Col>
							<Col xs={6}>
								<div className={"bedroom-type-container " + (this.state.bedroomType == 2 ? "selected" : "")} onClick={() => this.setBedroomType(2)}>
									<i className="menu-icon icon-bed-icon"></i>
									<div>
										<p className="bedroom-type-title">Quarto partilhado</p>
										<p className="bedroom-type-desc">Cama de casal</p>
									</div>
								</div>
							</Col>
							<Col xs={12}>
								<p className="label">Data ideal de admissão</p>
								<div className="datepicker-container">
									<DatePicker selected={this.state.startDate} onChange={this.handleChange} locale="pt" dateFormat="dd MMMM yyyy" />
									<i className="menu-icon icon-calendar-icon"></i>
								</div>
							</Col>
							<Col xs={12}>
								<p className="label">Pessoas para quem procura?</p>
								<Button className="btn-minus" onClick={() => this.setNumberPeople(1)}>-</Button>
								<input type="number" id="numberPeople" value={this.state.numberPeople} min="1"/>
								<Button className="btn-plus" onClick={() => this.setNumberPeople(2)}>+</Button>
							</Col>
							<Col xs={12}>
								<p className="label">Pessoa(s) autónama(s)?</p>
								<Row>
									<Col>
										<label className="checkbox-container">Sim
										  <input type="checkbox" id="checkbox-yes" checked={this.state.activeCheckbox == 1} onChange={() => this.setActiveCheckbox(1)}/>
										  <span className="checkmark"></span>
										</label>
									</Col>
									<Col>
										<label className="checkbox-container">Não
										  <input type="checkbox" id="checkbox-no" checked={this.state.activeCheckbox == 2} onChange={() => this.setActiveCheckbox(2)}/>
										  <span className="checkmark"></span>
										</label>
									</Col>
									<Col>
										<div className="checkbox-text-container">
											<label className="checkbox-container">
											  <input type="checkbox" id="checkbox-partial" checked={this.state.activeCheckbox == 3} onChange={() => this.setActiveCheckbox(3)}/>
											  <span className="checkmark"></span>
											</label>
											<input type="text" id="partialAutonome" value="Apenas 1"/>
										</div>
									</Col>
								</Row>
							</Col>
							<Col xs={12}>
								<p className="terms">Ao confirmar está a aceitar os <a href="#">termos e confições</a>.</p>
							</Col>
						</Row>
					</div>
				</div>
				<div className={"service-bottom " + (this.state.activeBottom != 4 ? "dnone" : "")}>
					<div className="nav-bottom">
						<Container>
							<Row>
								<Col>
									<div>
										<p className="hsb-label">Preço desde <span>-30%</span></p>
										<p className="hsb-price">296,00 €</p>
									</div>
								</Col>
								<Col>
									<Button className="btn-secondary" onClick={() => this.setActiveBottom(5)}>Ver datas</Button>
								</Col>
							</Row>
						</Container>
					</div>
				</div>
				<div className={"service-bottom " + (this.state.activeBottom != 5 ? "dnone" : "")}>
					<div className="nav-bottom">
						<Container>
							<Row>
								<Col>
									<div>
										<p className="hsb-label">Preço desde <span>-30%</span></p>
										<p className="hsb-price">1.184,00 € / mês</p>
									</div>
								</Col>
								<Col>
									<Button className="btn-primary" onClick={() => this.setActiveBottom(3)}>Confirmar</Button>
								</Col>
							</Row>
						</Container>
					</div>
				</div>
				<div className={"service-booking " + (this.state.activeBottom != 5 ? "dnone" : "")}>
					<div className="s-booking">
						<Row>
							<Col xs={6}>
								<p className="label">Escolha a data que pretende este serviço</p>
							</Col>
							<Col xs={6}>
								<div className="service-booking-cancel-container">
									<a href="#" onClick={() => this.setActiveBottom(4)} className="service-booking-cancel">Cancelar</a>
								</div>
							</Col>
							<Col xs={12} className="s-booking-calendar">
								<DatePicker selected={this.state.startDate} onChange={this.handleChange} locale="pt" dateFormat="dd MMMM yyyy" inline/>
							</Col>
							<Col xs={6}>
								<p className="label">A que horas gostaria este serviço?</p>
								<Select 
								defaultValue={optionsHours[0]}
								options={optionsHours}
								styles={this.selectStyle}
								/>
							</Col>
							<Col xs={6}>
								<p className="label">Pretende manter este serviço regular?</p>
								<Select 
								defaultValue={optionsRegularity[0]}
								options={optionsRegularity}
								styles={this.selectStyle}
								/>
							</Col>
						</Row>
					</div>
				</div>
				<Button className="btn-back" onClick={() => this.goBack()}><i className="icon-arrow-left-icon"></i></Button>
				<div className="carousel-container">
					<Carousel nextIcon ={nextIcon} prevIcon={prevIcon} interval={null}>
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
					{this.props.activeBottom != 4 &&
						<div>
							<h1>{spaceDetails.NAME}</h1>
							<div className="house-rating">
								<FontAwesomeIcon icon={Icons.faStar} /><FontAwesomeIcon icon={Icons.faStar} /><FontAwesomeIcon icon={Icons.faStar} /><FontAwesomeIcon icon={Icons.faStar} /><FontAwesomeIcon icon={Icons.faStar} /> <span className="house-price">888 • <strong>€€</strong></span>
							</div>
							<div className="house-location">
								<p><i className="menu-icon icon-location-icon"></i> {spaceDetails.LOCATION}, {spaceDetails.DISTRICT} - <a href="#">Ver no mapa</a></p>
								<p><i className="menu-icon icon-location-icon"></i> ERPI - Estrutura Residencial para Idosos</p>
								<p><i className="menu-icon icon-location-icon"></i> IPSS</p>
							</div>
							<div className="house-description">
								{this.state.spaceDescription}&nbsp; 
								{this.state.spaceDescription && this.state.spaceDescription.length && this.state.spaceDescription.length == 102 &&
									<a onClick={() => this.expandDescription()}>Ler mais</a>
								}
							</div>
							<hr/>
						</div>
					}
					<div className="house-description-list">
						<h4>Descrição</h4>
						{this.props.activeBottom != 4 &&
							<ul>
								<li>Fundação <span>{spaceDetails.FUNDATION}</span></li>
								<li>Licença <span>{spaceDetails.LICENSE}</span></li>
								<li>Lotação <span>{spaceDetails.LOTATION} px</span></li>
								<li>Certificação Qualidade <span>{spaceDetails.CERTIFICATION == 1 ? 'Sim' : 'Não'}</span></li>
								<li>Actividades e projectos <span>{spaceDetails.ACTIVITY == 1 ? 'Sim' : 'Não'}</span></li>
								<li>Residência <span>{spaceDetails.RESIDENCE == 1 ? 'Sim' : 'Não'}</span></li>
								<li>Centro de dia <span>{spaceDetails.CENTER_DAY == 1 ? 'Sim' : 'Não'}</span></li>
								<li>Massagens e Cuidados pessoais <span>{spaceDetails.MASSAGES == 1 ? 'Sim' : 'Não'}</span></li>
								<li>Eventos culturais <span>{spaceDetails.CULTURAL_EVENTS == 1 ? 'Sim' : 'Não'}</span></li>
								<li>Horário de visitas <span>{spaceDetails.SCHEDULE}</span></li>
								<li>Preço médio <span>€€</span></li>
							</ul>
						}
						{this.props.activeBottom == 4 &&
							<ul>
							{this.state.spaceDetails.map((item, index) => (
								<li>{item.FIELD} <span>{item.VALUE}</span></li>
							))}
							</ul>
						}
						
						<a href="#">Ler Mais <i className="menu-icon icon-arrow-down-icon"></i></a>
					</div>
					<hr/>
					{spaceDetails.LATITUDE && spaceDetails.LATITUDE!=0 &&
						<div className="house-map-location">
							<h4>Localização</h4>
							<p>A informação da localização exacta será fornecida após reserva ou registo.</p>
							<div className='map-container'>
								<MapWithAMarker
									googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCSJxvgAN84nz6pWZXqskNqdL9IFrANU2Q&v=3.exp&libraries=geometry,drawing,places"
									loadingElement={<div style={{ height: `100%` }} />}
									containerElement={<div style={{ height: `100%` }} />}
									mapElement={<div style={{ height: `100%` }} />}
									latitude={spaceDetails.LATITUDE}
									longitude={spaceDetails.LONGITUDE}
								/>
							</div>
						</div>
					}
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
						<i className="menu-icon icon-arrow-right-icon"></i>
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
						<a href="#" className="read-all-comments">Ler todos os comentários <i className="menu-icon icon-arrow-link-icon"></i></a>
						<br/><br/>
						<a href="#" className="report-house">Denunciar este espaço <i className="menu-icon icon-flag-icon"></i></a>
					</div>
				</div>
				<div className="footer section">
					<Select 
					defaultValue={options[0]}
					options={options}
					styles={this.selectStyle}
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

export default HouseSingle;

class OpenHome extends React.Component {
	render () {
		window.history.pushState("", "", '/');
		return(
			<div>
				<Header />
				<Home myDistrict={localStorage.getItem('myDistrict')} />
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
const MapWithAMarker = withScriptjs(withGoogleMap((props) =>
	<GoogleMap
	  defaultZoom={13}
	  defaultCenter={{ lat: parseFloat(props.latitude), lng: parseFloat(props.longitude) }}
	>
	  <Marker
		position={{ lat: parseFloat(props.latitude), lng: parseFloat(props.longitude) }}
	  />
	</GoogleMap>
  ));