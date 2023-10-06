import React, { Component }  from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots';
import Scroll from '../components/Scroll';

import './App.css';


// const state = {
// 	robots:robot,
// 	searchfield: ''
// }

// const App = () => {
// class App extends React.Component {
class App extends Component {
	constructor() {
		super()
		this.state = {
			robots:[],
			searchfield: ''
		  }
		  // console.log('constructor');
	}


	componentDidMount() {

	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 		.then(response=> {
	// 			return response.json();
	// 	  	})
	// 		.then(users => {
	// 				this.setState({ robots: users})
	// 		})
	// 	// console.log('check');
	// 	// this.setState({ robots: robots})
	// 	// console.log('componentDidMount');
	// }

		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			// .then(users => {});
			.then(users => this.setState({ robots: users}));
		}	




onSearchChange = (event) => {
	// this.setState({ searchfield: event.target.value })
	// const filteredRobots = this.state.robots.filter(robots =>{
	this.setState({ searchfield: event.target.value })

		

	// })
	// console.log(filteredRobots);
}
render() {
		
	const { robots, searchfield } = this.state;	
	// const filteredRobots = this.state.robots.filter(robot =>{
	const filteredRobots = robots.filter(robot =>{
		// return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})

	// if (this.state.robots.length === 0) {
	// if (robots.length === 0) {
	// if (!robots.length) {
	 return !robots.length ?
		// return <h1>Loading</h1>
	  <h1>Loading</h1> :
	// } else {
		(
	// console.log('render');
		// return (
				<div className='tc'>
					<h1 className='f2'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>	
				</div>
			);
		
		}
	}



export default App;