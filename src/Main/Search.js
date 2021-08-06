import React from 'react';
import './Search.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import logoIcon from '../Img/larin-icon.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Select from 'react-select';
import HouseSingle from '../Main/HouseSingle';

class Search extends React.Component {
	constructor(){
		super();
		this.state = {
		   searchResults: 'dnone'
		}
	}
	
	handleKeyup = () => {
		var myElement = document.getElementById('search');
		console.log(myElement.value);
		if(myElement.value.length > 2){
			this.setState({
				searchResults: ''
			});
		}
		else{
			this.setState({
				searchResults: 'dnone'
			});
		}
	  };
	
	
	
	render () {
		const { searchResults } = this.state;
		return(
			<div className="search main">
				<div className="search-container">
					<input type="text" className="search-input" id="search" onKeyUp={this.handleKeyup} placeholder="A red placeholder text.."/>
					<div className="search-icon">
						<i className="icon-search-icon"></i>
					</div>
					<div className="close-search-icon">
						<FontAwesomeIcon icon={Icons.faTimes} size="2x" />
					</div>
					<div className={"search-results " + searchResults}>
						<ul>
							<li>Porto, Portugal</li>
							<li>Porto Covo, Portugal</li>
							<li>Portalegre, Portugal</li>
							<li>Porto Santo, Portugal</li>
						</ul>
					</div>
				</div>
				<div className="explore-search">
					<h4>Explore na Larin</h4>
					<div className="explore-btns-container">
						<div className="explore-btns">
							<a href="#" className="btn-secondary">Lares e residênciais</a>
							<a href="#" className="btn-secondary">Centro de dia</a>
							<a href="#" className="btn-secondary">Centro de dia</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Search;
