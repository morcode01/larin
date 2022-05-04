import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Bootstrap/bootstrap.min.css';
import logoIcon from './Img/larin-icon.svg';
import Header from './Header/Header';
import Home from './Main/Home';
import Search from './Main/Search';
import Explore from './Main/Explore';
import Messages from './Main/Messages';
import HouseSingle from './Main/HouseSingle';
import Bottom from './Bottom/Bottom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import axios from "axios";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

class Template extends React.Component {
	constructor(props){
        super(props);

        this.state = {
            myDistrict: "",
        };
    }
	componentDidMount(){
		if ("geolocation" in navigator) {
			var that = this;
			navigator.geolocation.getCurrentPosition(function(position) {
			console.log("Latitude is :", position.coords.latitude);
			console.log("Longitude is :", position.coords.longitude);
			localStorage.setItem('myLatitude', position.coords.latitude);
			localStorage.setItem('myLongitude', position.coords.longitude);
				// START: GET DISTRICT BY COORDINATES
				axios.get("https://geoptapi.org/gps?lat="+position.coords.latitude+"&lon="+position.coords.longitude).then(function(response){
					that.setState({myDistrict: response.data.distrito})
					localStorage.setItem('myDistrict', response.data.distrito);
					axios.get(global.config.apiUrl+"getDistrictByName/"+this.state.myDistrict)
					.then(res => {
						const district = res.data;
						localStorage.setItem('myDistrictID', district.DISTRICT_ID);
						localStorage.setItem('myDistrictPrefix', district.PREFIX);
					})
				}.bind(that));
				// END: GET DISTRICT BY COORDINATES
			});
		} else {
		console.log("Not Available");
		}
	}
	render () {
		return(
			<div>
				<div id="main-content">
					{this.state.myDistrict && this.state.myDistrict != '' && this.props.componentLocation == 'home' &&
						<div>
							<Header />
							<Home myDistrict={this.state.myDistrict}/>
						</div>
					}
					{this.props.componentLocation == 'search' &&
						<Search/>
					}
					{this.props.componentLocation == 'explore' &&
						<Explore districtID={localStorage.getItem('myDistrictID')} prefixDistrict={localStorage.getItem('myDistrictPrefix')} nameDistrict={localStorage.getItem('myDistrict')} housesTab={0} />
					}
					{this.props.match &&
						<div>
							{this.props.match.params.spaceid != null &&
								<HouseSingle activeBottom={1} spaceID={this.props.match.params.spaceid} history={'home'}/>
							}
							{this.props.match.params.serviceid != null &&
								<HouseSingle activeBottom={4} spaceID={this.props.match.params.serviceid} history={'home'}/>
							}
						</div>
					}
					
				</div>
				<div id="main-bottom">
					<div>
						<Bottom activeIndexRouter={this.props.componentLocation}/>
					</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<Router>
	  <div>
		<Route exact path="/">
			<Template componentLocation={'home'} />
		</Route>
		<Route exact path="/larin">
			<Template componentLocation={'home'} />
		</Route>
		<Route path="/search">
			<Template componentLocation={'search'}/>
		</Route>
		<Route path="/explore">
			<Template componentLocation={'explore'}/>
		</Route>
		<Route path="/messages">
			<Template componentLocation={'messages'}/>
		</Route>
		<Route path="/house/:spaceid" component={Template}>
		</Route>
		<Route path="/service/:serviceid" component={Template}>
		</Route>
	  </div>
	</Router>,
	document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

