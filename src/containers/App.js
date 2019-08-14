import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
// import { robots } from '../robots.js';


import './App.css';

// const state = {
// 	robots: robots,
// 	searchField: ''
// }

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {this.setState({ robots: users })});
	}

	onSearchChange = (event) => {
		// console.log(event.target.value);
		this.setState({ searchField: event.target.value })

		//console.log(filterRobots);
	}

	render(){
		const {robots, searchField} = this.state;

		const filterRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});

		if (robots.length === 0){
			return <h1> Loading </h1>
		}
		else{
			return(
				<div className='tc'>
					<h1 className='f1'>Robo Friends</h1>
					<SearchBox searchChange={this.onSearchChange}/> 
					<Scroll>
						<CardList robots={filterRobots}/>
					</Scroll>
				</div>
			);		
		}
	}
}

export default App;
