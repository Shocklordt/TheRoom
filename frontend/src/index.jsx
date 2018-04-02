/******** DO NOT DELETE THESE LINES ********/

import React from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/style.css'

const baseURL = "http://195.201.28.131:9000"

/***** PASTE YOUR CODE AFTER THIS LINE *****/

const GetData = async () => {
  try {
    const url = `${baseURL}/room/status`
    console.log("Getting greeting from "+url)
    const response = await fetch(url);
    const results = await response.json()
    return results['results']
  } catch (error) {
    console.error(error);
  }
  return { greeting: "error"};
};



class Game extends React.Component {
  async componentWillMount() {
    this.state = {open: await GetData()}
    console.log(this.state)
  }
  render(){
    const open = this.state.open
    if(open == false){
      return (
        document.getElementById('box1').style.color = 'red'
      )
    }
    else{
    return (
      document.getElementById('box1').style.color = 'green'
    )
  }
  };
}



ReactDOM.render(
  <Game />,
  document.getElementById('root')
);