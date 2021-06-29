import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import logoIcon from '../Img/larin-icon.svg';
import Login from '../Account/Login';

class Header extends React.Component {
	constructor(props) {
    super(props);
		this.state = { activeIndex: 0};
	}

	setActive = index => {
		if(index==0) ReactDOM.render(<OpenLogin />,document.getElementById('main-content'));
		else if(index==1) ReactDOM.render(<OpenLogin />,document.getElementById('main-content'));
		this.setState({ activeIndex: index });
	};
	render () {
		return(
			<div className="header">
				<div className='nav-top'>
					<div className="pull-left">
						<img src={logoIcon} className="logo-icon" />
					</div>
					<div className="pull-right">
						<ul className="nav-top-links">
							<li><button className="btn-link" onClick={() => this.setActive(0)}>Login</button></li>
							<li><button className="btn-secondary">Registar</button></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;

class OpenLogin extends React.Component {
	render () {
		return(
			<div>
				<Login />
			</div>
		)
	}
}