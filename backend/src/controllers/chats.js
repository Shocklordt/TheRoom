const database = require('../database');

exports.list = async (ctx) => {
  let options = {};

  let result = await database.Chat.findAll(options);
  let chats = await Promise.all(result.map(chat => chat.toJSON()));

  let response = {
    results: chats,
  };

  ctx.body = response;
};

exports.status = async (ctx) => {
  const response = await fetch("http:/195.201.28.131:9000/room/42")
  const result = await response.json()
  const arraylist = await weatherdata.slice(Math.max(weatherdata.length - 3, 0))
  var tempdat = 0
  var ligdat = 0
  for (var i = 0; i< arraylist.length; i++){
    tempdat += arraylist[i].temperature
    ligdat += arraylist[i].light
  }
  tempdat = Math.round(tempdat / 3)
  ligdat = Math.round(ligdat / 3)
  if(ligdat > 2000 && tempdat > 25){
    let answer = {results: false};
  }else if(ligdat > 2000 && tempdat < 25 || ligdat < 2000 && tempdat > 25){
    let answer = {results: ''}
  }else{
    let answer = {results: true}
  }
  ctx.body = await answer;
  console.log(ctx.body)
}

exports.create = async (ctx) => {
  const params = ctx.request.body;

  console.log(ctx.request.body)

  const chat = await database.Chat.create({temperature: params.temperature, light: params.light});

  ctx.body = await chat.toJSON();
  ctx.status = 201;
};
 