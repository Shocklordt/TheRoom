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
      return 'black'
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
  constructor(props){
    super(props);
    this.props.color = 'black'
  }
  async componentWillMount(){
    console.log(this.props.color)
    this.props.color = await getColour()
    const weatherdata = await GetData()
    const arraylist = await weatherdata.slice(Math.max(weatherdata.length - 3, 0))
    const tempdat = []
    for (var i = 0; i< arraylist.length; i++){
      console.log(arraylist[i])
      tempdat.push(arraylist[i].temperature)
    }
    console.log(this.props.color)
  }
  render(){
      return(
        document.getElementById('room').style.color = this.props.color,
        <div></div>
      )
    }
  }


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);