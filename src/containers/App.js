import React, { Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from './robots';
import Scroll from '../components/Scroll';
import './App.css';


// const state = {
// 	robots: robots,
// 	searchfield:''

// }

// const App = () => {
class App extends Component {
	constructor() {
		super()

		this.state = {
			robots: [],
			searchfield:''

		}

		// console.log('constructor');
	}

componentDidMount() {
	// console.log('check');
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> {
			return response.json();
	})
		.then(users => {
			this.setState( { robots: users});

		})
	
	// console.log('componentDidMount');
}

onSearchChange = (event) => {
	this.setState({ searchfield: event.target.value})
	
	
	console.log(event.target.value);

}


	render () {

		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})
		// console.log('render');
	// if ( robots.length === 0 ) {
	// if (!robots.length) {
	return (!robots.length) ?
		// return <h1>Loading</h1>
		 <h1>Loading</h1> :
		 (
	// } else {
		// return (

			<div className='tc'>
				<h1 className='f1'>Robofriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
				<CardList robots={filteredRobots}/>
				</Scroll>

			</div>

		     );

	     }
   }



 export default App;
