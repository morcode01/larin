import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Bootstrap/bootstrap.min.css';
import logoIcon from './Img/larin-icon.svg';
import Header from './Header/Header';
import Home from './Main/Home';
import Bottom from './Bottom/Bottom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import axios from "axios";

class Template extends React.Component {
	constructor(){
        super();

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
					<div>
						<Header />
						{this.state.myDistrict && this.state.myDistrict != '' &&
							<Home myDistrict={this.state.myDistrict}/>
						}
					</div>
				</div>
				<div id="main-bottom">
					<div>
						<Bottom />
					</div>
				</div>
			</div>
		)
	}
}


ReactDOM.render(
  <Template />,
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

