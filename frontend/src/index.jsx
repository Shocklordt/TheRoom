/******** DO NOT DELETE THESE LINES ********/

import React from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/style.css'
const baseURL = "http://195.201.28.131:9000"


/***** PASTE YOUR CODE AFTER THIS LINE *****/

const getColour = async () => {
  try {
    const url = `${baseURL}/room/status`
    const response = await fetch(url);
    const result = await response.json()['resutls']
    if(result == true){
      return 'green'
    }
    else if(result == false){
      return 'red'
    }
    else{
      return ''
    }
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
  constructor(color){
    super(color);
    this.color = 'black'
  }
  async componentWillMount(){
    console.log(this.color)
    this.color = await getColour()
    const weatherdata = await GetData()
    const arraylist = await weatherdata.slice(Math.max(weatherdata.length - 3, 0))
    const tempdat = []
    for (var i = 0; i< arraylist.length; i++){
      console.log(arraylist[i])
      tempdat.push(arraylist[i].temperature)
    }
    console.log(this.color)
  }
  render(){
      return(
        <div>
          </div>
      )
    }
  }


ReactDOM.render(
  <Game />,
  document.getElementById('root'),
  document.getElementById('room').style.color = Game.color,
  document.getElementById('box1').innerHTML = 'Memes'
);