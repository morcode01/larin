import React from 'react';
import './Header.css';
import logoIcon from '../Img/larin-icon.svg';

class Header extends React.Component {
	render () {
		return(
			<div className="header">
				<div className='nav-top'>
					<div className="pull-left">
						<img src={logoIcon} className="logo-icon" />
					</div>
					<div className="pull-right">
						<ul className="nav-top-links">
							<li><a href="#">Login</a></li>
							<li><a href="#" className="btn-secondary">Registo</a></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;
