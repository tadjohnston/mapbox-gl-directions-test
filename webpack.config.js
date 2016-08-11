var path = require('path')
var config = require('webpack-config-rentpath').config
var webpack = require('webpack')

config.entry = {
  css: './app/assets/stylesheets/main',
  main: './app/assets/javascripts/main/main',
  working: './app/assets/javascripts/working/main'
};

config.module.loaders.push({
    test: /\.js$/,
    include: path.resolve(__dirname, 'node_modules/webworkify/index.js'),
    loader: 'worker'
  },{
    test: /\.js$/,
    include: path.resolve(__dirname, 'node_modules/mapbox-gl-shaders/index.js'),
    loader: 'transform/cacheable?brfs'
});

config.module.noParse = [/mapbox-gl-directions.js$/]

config.module.postLoaders = [{
  include: /node_modules\/mapbox-gl-shaders/,
  loader: 'transform',
  query: 'brfs'
}];

module.exports = config;
