import React from 'react';
import './Bottom.css';
import logoIcon from '../Img/larin-icon.svg';
import marketIcon from '../Img/market-icon.svg';
import messagesIcon from '../Img/messages-icon.svg';
import favoritesIcon from '../Img/favorites-icon.svg';
import menuIcon from '../Img/menu-icon.svg';
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
								<button className="btn-nav-bottom btn-home active">
									<img src={logoIcon} className="menu-icon" />
								</button>
								<p>Larin</p>
							</Col>
							<Col className="col-market">
								<button className="btn-nav-bottom btn-market">
									<img src={marketIcon} className="menu-icon" />
								</button>
								<p>Mercado</p>
							</Col>
							<Col className="col-messages">
								<button className="btn-nav-bottom btn-messages">
									<img src={messagesIcon} className="menu-icon" />
								</button>
								<p>Mensagens</p>
							</Col>
							<Col className="col-favorites">
								<button className="btn-nav-bottom btn-favorites">
									<img src={favoritesIcon} className="menu-icon" />
								</button>
								<p>Favoritos</p>
							</Col>
							<Col className="col-menu">
								<button className="btn-nav-bottom btn-menu">
									<img src={menuIcon} className="menu-icon" />
								</button>
								<p>Menu</p>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		)
	}
}

export default Bottom;
