import React from 'react';
import './Bottom.css';
import logoIcon from '../Img/larin-icon.svg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class Bottom extends React.Component {
	render () {
		return(
			<div className="bottom">
				<div className="nav-bottom">
					<Container>
						<Row>
							<Col className="col-home">
								<button className="btn-nav-bottom btn-feed active">
									<img src={logoIcon} className="menu-icon" />
									<p>larin</p>
								</button>
							</Col>
							<Col className="col-search">
								<button className="btn-nav-bottom btn-feed active">
									<img src={logoIcon} className="menu-icon" />
									<p>pesquisa</p>
								</button>
							</Col>
							<Col className="col-menu">
								<button className="btn-nav-bottom btn-feed active">
									<img src={logoIcon} className="menu-icon" />
									<p>menu</p>
								</button>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		)
	}
}

export default Bottom;
