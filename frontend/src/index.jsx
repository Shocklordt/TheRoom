/******** DO NOT DELETE THESE LINES ********/

import React from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/style.css'

const baseURL = "http://195.201.28.131:9000"

/***** PASTE YOUR CODE AFTER THIS LINE *****/

const GetData = async () => {
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



class Game extends React.Component{
  constructor(){
    super();
    this.state = {colour: ''}
  }
  async componentWillMount(){
    const colourresult = await GetData()
    if(colourresult == true){
      this.setState({colour: 'green'})
    }
    else if(colourresult == false){
      this.setState({colour: 'red'})
    }
    else{
      this.setState({colour: ''})
    }
  }
  render(){
      return (
        document.getElementById('box1').style.color = this.state.colour
      )
  }
}


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);