var path = require("path"),
    config = require("./webpack.config.js");

config.output.publicPath = "http://localhost:8081/assets/";
config.devServer = {
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:8081",
    "Access-Control-Allow-Credentials": "true"
  }
};

module.exports = config;
