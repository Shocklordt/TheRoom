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

const getAns = async () =>{
  let options = {};
  const result = await database.Chat.findAll(options);
  let weatherdata = await Promise.all(result.map(chat => chat.toJSON()))
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
    const answer = {results: false};
  }else if(ligdat > 2000 && tempdat < 25 || ligdat < 2000 && tempdat > 25){
    const answer = {results: ''}
  }else{
    const answer = {results: true}
  }
  return await answer
}

exports.status = async (ctx) => {
  ctx.body = await getAns();
}

exports.create = async (ctx) => {
  const params = ctx.request.body;

  console.log(ctx.request.body)

  const chat = await database.Chat.create({temperature: params.temperature, light: params.light});

  ctx.body = await chat.toJSON();
  ctx.status = 201;
};
 