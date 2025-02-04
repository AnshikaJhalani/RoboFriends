import React,{Component} from 'react';
import CardList from '../components/CardList';
import {robots} from '../components/robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
class App extends Component   {
    constructor() {
        super()
        this.state = {
            robots:[],
            searchfield : ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=>{this.setState({robots:users})}); 
    }

    onSearchChange=(event) => { 
        this.setState({searchfield:event.target.value})
       
    }
    render(){
        const {robots,searchfield} =this.state;
        const  filteredrobots=robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if(!robots.length){
            return <h1>loading</h1>
        }else{
            return (
                <div className='tc'>
                    <h1 className='allura-regular' >ROBO FRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredrobots} />
                    </ErrorBoundary>
                    </Scroll>
                </div>
        );
        }
    } 
}

export default App;
