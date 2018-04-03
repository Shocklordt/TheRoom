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
    const result = await response.json()
    if(await result['results'] == true){
      return 'green'
    }
    else if(result == false){
      return 'red'
    }
    else{
      return 'yellow'
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
  constructor(){
    super();
    this.state = {color: "black"};
    this.state = {temperature: ""}
    this.state = {light: ""}
  }
  async componentWillMount(){
    this.setState({color: await getColour()})
    const weatherdata = await GetData()
    const arraylist = await weatherdata.slice(Math.max(weatherdata.length - 3, 0))
    var tempdat = 0
    var ligdat = 0
    for (var i = 0; i< arraylist.length; i++){
      tempdat += arraylist[i].temperature
      ligdat += arraylist[i].light
    }
    tempdat = Math.round(tempdat / 3)
    ligdat = Math.round(ligdat / 3)
    this.setState({temperature: await `${tempdat}°C`})
    this.setState({light: await ligdat})
  }
  render(){
      return(
        document.getElementById('room').style.color = this.state.color,
        document.getElementById('box1').innerHTML = this.state.temperature,
        document.getElementById('box2').innerHTML = this.state.light,
        <div></div>
      )
    }
  }


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);