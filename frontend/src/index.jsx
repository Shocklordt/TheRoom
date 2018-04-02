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
  constructor(props){
    super(props)
    this.state = {open: GetData()}
  }
  async componentWillMount(){
    console.log(this.state.open._v)
  }
  render(){
    const open = this.state.open._v
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