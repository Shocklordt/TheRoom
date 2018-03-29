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

exports.update = async (ctx) => {
  const params = ctx.request.body;

  console.log(ctx.request.body)

  ctx.status = 201;
}

exports.create = async (ctx) => {
  const params = ctx.request.body;

  console.log(ctx.request.body)

  const chat = await database.Chat.create({temperature: params.temperature, light: params.light});

  ctx.body = await chat.toJSON();
  ctx.status = 201;
};
 