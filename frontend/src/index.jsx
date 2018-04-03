/******** DO NOT DELETE THESE LINES ********/

import React from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/style.css'
const baseURL = "http://195.201.28.131:9000"


/***** PASTE YOUR CODE AFTER THIS LINE *****/

const GetBooleanData = async () => {
  try {
    const url = `${baseURL}/room/status`
    const response = await fetch(url);
    const results = await response.json()
    return results['results']
  } catch (error) {
    console.error(error);
  }
  return { greeting: "error"};
};

const GetData = async () => {
  try{
    const url = `${baseURL}/room/42`
    const response = await fetch(url)
    const results = await response.json()
    return results.results
  }catch(error){
    console.error(error)
  }
}

class Game extends React.Component{
  constructor(){
    super();
    this.state = {colour: ''}
  }
  async componentWillMount(){
    const colourresult = await GetBooleanData()
    const weatherdata = await GetData()
    if(colourresult == true){
      this.setState({colour: 'green'})
    }
    else if(colourresult == false){
      this.setState({colour: 'red'})
    }
    else{
      this.setState({colour: ''})
    }
    console.log(weatherdata.slice(Math.max(weatherdata.length - 2, 1)))

  }
  render(){
      return (
        document.getElementById('room').style.color = this.state.colour,
        document.getElementById('box1').innerHTML = ''
      )
  }
}


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);