var Content = require('./content');
var React = require('react');
var ReactDOM = require('react-dom');

var mount = document.createElement('div');
document.body.appendChild(mount);
ReactDOM.render(<Content />, mount);


