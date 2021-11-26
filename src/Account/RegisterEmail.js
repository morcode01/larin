import React from 'react';
import ReactDOM from 'react-dom';
import './RegisterEmail.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import logoIcon from '../Img/larin-icon.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RegisterAcceptTerms from '../Account/RegisterAcceptTerms';

class RegisterEmail extends React.Component {
	
	constructor(){
		super();
		let stringTest = '';
		for(var i = 2000; i>=1920; i--){
			stringTest+="\n{ value: '"+i+"', label: '"+i+"' },"
		}
		console.log(stringTest);
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
	openRegisterAcceptTerms = index => {
		ReactDOM.render(<OpenRegisterAcceptTerms />,document.getElementById('main-content'));
	};
	componentDidMount() {
		window.removeEventListener('scroll', this.handleScroll, true);
	}
	render () {
		const dateDays = [
		    { value: '1', label: '01' },
		    { value: '2', label: '02' },
		    { value: '3', label: '03' },
		    { value: '4', label: '04' },
		    { value: '5', label: '05' },
		    { value: '6', label: '06' },
		    { value: '7', label: '07' },
		    { value: '8', label: '08' },
		    { value: '9', label: '09' },
		    { value: '10', label: '10' },
		    { value: '11', label: '11' },
		    { value: '12', label: '12' },
		    { value: '13', label: '13' },
		    { value: '14', label: '14' },
		    { value: '15', label: '15' },
		    { value: '16', label: '16' },
		    { value: '17', label: '17' },
		    { value: '18', label: '18' },
		    { value: '19', label: '19' },
		    { value: '20', label: '20' },
		    { value: '21', label: '21' },
		    { value: '22', label: '22' },
		    { value: '23', label: '23' },
		    { value: '24', label: '24' },
		    { value: '25', label: '25' },
		    { value: '26', label: '26' },
		    { value: '27', label: '27' },
		    { value: '28', label: '28' },
		    { value: '29', label: '29' },
		    { value: '30', label: '30' },
		    { value: '31', label: '31' }
		];
		const dateMonths = [
		    { value: '1', label: '01' },
		    { value: '2', label: '02' },
		    { value: '3', label: '03' },
		    { value: '4', label: '04' },
		    { value: '5', label: '05' },
		    { value: '6', label: '06' },
		    { value: '7', label: '07' },
		    { value: '8', label: '08' },
		    { value: '9', label: '09' },
		    { value: '10', label: '10' },
		    { value: '11', label: '11' },
		    { value: '12', label: '12' }
		];
		const dateYears = [
			{ value: '2021', label: '2021' },
			{ value: '2020', label: '2020' },
			{ value: '2019', label: '2019' },
			{ value: '2018', label: '2018' },
			{ value: '2017', label: '2017' },
			{ value: '2016', label: '2016' },
			{ value: '2015', label: '2015' },
			{ value: '2014', label: '2014' },
			{ value: '2013', label: '2013' },
			{ value: '2012', label: '2012' },
			{ value: '2011', label: '2011' },
			{ value: '2010', label: '2010' },
			{ value: '2009', label: '2009' },
			{ value: '2008', label: '2008' },
			{ value: '2007', label: '2007' },
			{ value: '2006', label: '2006' },
			{ value: '2005', label: '2005' },
			{ value: '2004', label: '2004' },
			{ value: '2003', label: '2003' },
			{ value: '2002', label: '2002' },
			{ value: '2001', label: '2001' },
			{ value: '2000', label: '2000' },
			{ value: '1999', label: '1999' },
			{ value: '1998', label: '1998' },
			{ value: '1997', label: '1997' },
			{ value: '1996', label: '1996' },
			{ value: '1995', label: '1995' },
			{ value: '1994', label: '1994' },
			{ value: '1993', label: '1993' },
			{ value: '1992', label: '1992' },
			{ value: '1991', label: '1991' },
			{ value: '1990', label: '1990' },
			{ value: '1989', label: '1989' },
			{ value: '1988', label: '1988' },
			{ value: '1987', label: '1987' },
			{ value: '1986', label: '1986' },
			{ value: '1985', label: '1985' },
			{ value: '1984', label: '1984' },
			{ value: '1983', label: '1983' },
			{ value: '1982', label: '1982' },
			{ value: '1981', label: '1981' },
			{ value: '1980', label: '1980' },
			{ value: '1979', label: '1979' },
			{ value: '1978', label: '1978' },
			{ value: '1977', label: '1977' },
			{ value: '1976', label: '1976' },
			{ value: '1975', label: '1975' },
			{ value: '1974', label: '1974' },
			{ value: '1973', label: '1973' },
			{ value: '1972', label: '1972' },
			{ value: '1971', label: '1971' },
			{ value: '1970', label: '1970' },
			{ value: '1969', label: '1969' },
			{ value: '1968', label: '1968' },
			{ value: '1967', label: '1967' },
			{ value: '1966', label: '1966' },
			{ value: '1965', label: '1965' },
			{ value: '1964', label: '1964' },
			{ value: '1963', label: '1963' },
			{ value: '1962', label: '1962' },
			{ value: '1961', label: '1961' },
			{ value: '1960', label: '1960' },
			{ value: '1959', label: '1959' },
			{ value: '1958', label: '1958' },
			{ value: '1957', label: '1957' },
			{ value: '1956', label: '1956' },
			{ value: '1955', label: '1955' },
			{ value: '1954', label: '1954' },
			{ value: '1953', label: '1953' },
			{ value: '1952', label: '1952' },
			{ value: '1951', label: '1951' },
			{ value: '1950', label: '1950' },
			{ value: '1949', label: '1949' },
			{ value: '1948', label: '1948' },
			{ value: '1947', label: '1947' },
			{ value: '1946', label: '1946' },
			{ value: '1945', label: '1945' },
			{ value: '1944', label: '1944' },
			{ value: '1943', label: '1943' },
			{ value: '1942', label: '1942' },
			{ value: '1941', label: '1941' },
			{ value: '1940', label: '1940' },
			{ value: '1939', label: '1939' },
			{ value: '1938', label: '1938' },
			{ value: '1937', label: '1937' },
			{ value: '1936', label: '1936' },
			{ value: '1935', label: '1935' },
			{ value: '1934', label: '1934' },
			{ value: '1933', label: '1933' },
			{ value: '1932', label: '1932' },
			{ value: '1931', label: '1931' },
			{ value: '1930', label: '1930' },
			{ value: '1929', label: '1929' },
			{ value: '1928', label: '1928' },
			{ value: '1927', label: '1927' },
			{ value: '1926', label: '1926' },
			{ value: '1925', label: '1925' },
			{ value: '1924', label: '1924' },
			{ value: '1923', label: '1923' },
			{ value: '1922', label: '1922' },
			{ value: '1921', label: '1921' },
			{ value: '1920', label: '1920' },
		];
		return(
			<div className="register-email">
				<p className="subtitle">Prefere registar-se através do <button className="btn-link">Facebook</button> ou <button className="btn-link">Google</button>?</p>
				<div className="field label-float">
					<input type="text" id="name" placeholder=" "/>
					<label>Primeiro e Último nome</label>
				</div>
				<div className="field">
					<label>Data de nascimento</label>
					<div className="birthdate">
						<div className="birthdate-select">
							<Select 
							defaultValue={dateDays[0]}
							options={dateDays}
							styles={this.selectStyle}
							/>
						</div>
						<div className="birthdate-select">
							<Select 
							defaultValue={dateMonths[0]}
							options={dateMonths}
							styles={this.selectStyle}
							/>
						</div>
						<div className="birthdate-select">
							<Select 
							defaultValue={dateYears[0]}
							options={dateYears}
							styles={this.selectStyle}
							/>
						</div>
					</div>
				</div>
				<div className="field label-float">
					<input type="email" id="email" placeholder="larin@email.com"/>
					<label>Endereço de E-mail</label>
				</div>
				<div className="field label-float">
					<input type="password" id="password" placeholder="•••••••••"/>
					<label>Palavra chave</label>
				</div>
				<p className="warning-text">Iremos enviar-lhe promoções de marketing, ofertas especiais, inspiração e atualizações das nossas políticas por e-mail.</p>
				<div className="align-center">
					<button className="btn-primary" onClick={() => this.openRegisterAcceptTerms()}>Inscrever-se</button>
				</div>
				<label className="checkbox-container">Não quero receber mensagens de marketing do Larin. Também posso optar por não receber estas informações a qualquer momento nas configurações da minha conta ou através dos canais de comunicação.
				  <input type="checkbox"/>
				  <span className="checkmark"></span>
				</label>
			</div>
		)
	}
}

export default RegisterEmail;

class OpenRegisterAcceptTerms extends React.Component {
	render () {
		return(
			<div>
				<RegisterAcceptTerms />
			</div>
		)
	}
}