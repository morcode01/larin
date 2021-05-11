import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';

class Home extends React.Component {
	render () {
		return(
			<div className="home main">
				<Carousel>
				    <Carousel.Item>
						<img
						  className="d-block w-100"
						  src={![]('/Slides/slide-1.jpg')}
						  alt="First slide"
						/>
						<Carousel.Caption>
						  <h3>Second slide label</h3>
						  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
				    </Carousel.Item>
					<Carousel.Item>
						<img
						  className="d-block w-100"
						  src={'/Slides/slide-2.jpg'}
						  alt="Second slide"
						/>
						<Carousel.Caption>
						  <h3>First slide label</h3>
						  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
				    </Carousel.Item>
					<Carousel.Item>
						<img
						  className="d-block w-100"
						  src={'/Slides/slide-3.jpg'}
						  alt="Third slide"
						/>
						<Carousel.Caption>
						  <h3>Third slide label</h3>
						  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
				    </Carousel.Item>
				</Carousel>
			</div>
		)
	}
}

export default Home;
