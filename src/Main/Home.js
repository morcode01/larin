import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

class Home extends React.Component {
	render () {
		return(
			<div className="home main">
				<div className="carousel-container">
				<Carousel controls={false}>
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
				    </Carousel.Item>					
				</Carousel>
				<div className="search-container">
					<label>Onde</label>
					<input type="text" className="search" placeholder='Experimente procurar "Porto"'/>
					<div className="search-icon">
						<FontAwesomeIcon icon={Icons.faSearch} size="2x" />
					</div>
				</div>
				</div>
				<div className="features">
					<h3>Melhores lares e residências no Porto</h3>
					<p>Encontre o lar ou residência para proporcionar o maior conforto ao seu ente mais querido.</p>
					<Row>
						<Col xs={6}>
							<img
							  className="d-block w-100 house-img"
							  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
							  alt="First slide"
							/>
							<p className="house-location">Campanhã, Porto</p>
							<p className="house-name">Casa de Repouso São José de Maria</p>
							<p className="house-price">Desde 1.200 €/ mês</p>
							<p className="house-rating">4.5 <span>(888)</span></p>
						</Col>
						<Col xs={6}>
							<img
							  className="d-block w-100 house-img"
							  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
							  alt="First slide"
							/>
							<p className="house-location">Campanhã, Porto</p>
							<p className="house-name">Casa de Repouso São José de Maria</p>
							<p className="house-price">Desde 1.200 €/ mês</p>
							<p className="house-rating">4.5 <span>(888)</span></p>
						</Col>
						<Col xs={6}>
							<img
							  className="d-block w-100 house-img"
							  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
							  alt="First slide"
							/>
							<p className="house-location">Campanhã, Porto</p>
							<p className="house-name">Casa de Repouso São José de Maria</p>
							<p className="house-price">Desde 1.200 €/ mês</p>
							<p className="house-rating">4.5 <span>(888)</span></p>
						</Col>
						<Col xs={6}>
							<img
							  className="d-block w-100 house-img"
							  src={process.env.PUBLIC_URL + '/Slides/slide-1.jpg'}
							  alt="First slide"
							/>
							<p className="house-location">Campanhã, Porto</p>
							<p className="house-name">Casa de Repouso São José de Maria</p>
							<p className="house-price">Desde 1.200 €/ mês</p>
							<p className="house-rating">4.5 <span>(888)</span></p>
						</Col>
					</Row>
				</div>
			</div>
		)
	}
}

export default Home;
