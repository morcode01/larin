import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import logoIcon from '../Img/larin-icon.svg';
import Login from '../Account/Login';
import Register from '../Account/Register';

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
	openRegister = index => {
		ReactDOM.render(<OpenRegister />,document.getElementById('main-content'));
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
							{localStorage.getItem('userName') != '' && localStorage.getItem('userName') != null &&
								<li><button className="btn-link">{localStorage.getItem('userName')}</button></li>
							}
							{localStorage.getItem('userName') == '' || localStorage.getItem('userName') == null &&
								<li><button className="btn-link" onClick={() => this.setActive(0)}>Login</button></li>
							}
							{localStorage.getItem('userName') == '' || localStorage.getItem('userName') == null &&
								<li><button className="btn-secondary" onClick={() => this.openRegister(0)}>Registar</button></li>
							}
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

class OpenRegister extends React.Component {
	render () {
		return(
			<div>
				<Register />
			</div>
		)
	}
}