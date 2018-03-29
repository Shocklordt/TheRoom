var Sequelize = require('sequelize');
var sequelize = require('./sequelize');

var ChatMessage = sequelize.define('chats', {
  temperature: Sequelize.FLOAT,
  light: Sequelize.FLOAT
}, {
  timestamps: true,
  instanceMethods: {
    toJSON: async function () {
      return {
        // This is a unique id that is generated automatically
        id: this.id,
        createdAt: this.createdAt,
        temperature: this.temperature,
        light: this.light,
      };
    },
  },
});

module.exports = ChatMessage;
