import React, { Component } from 'react';
//import logo from './logo.svg';
import Loader from 'react-loader-spinner';
import './App.css';

class App extends Component {
	//<img src={logo} className="App-logo" alt="logo" />
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<p><b> ThumbTack Application Framework </b></p>
					<i>build modern web applications and microservices using Jakarta EE 8 code</i>
					<br></br>
					<br></br>
					<br></br>
					<p>
						<Loader type="Grid" color="#008080" height={80} width={80} />
						Coming soon
					</p>
				</header>
			</div>
		);
	}
}

export default App;
