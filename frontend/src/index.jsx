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
    console.log(response.json())
    return response.json()
  } catch (error) {
    console.error(error);
  }
  return { greeting: "error"};
};



class Game extends React.Component {
  async componentWillMount() {
    const response = await GetData()
    console.log(response)
  }
  render() {
    return (
      <div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);