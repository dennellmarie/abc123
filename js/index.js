require('babel-polyfill');

const React = require('react')
const ReactDOM = require('react-dom')
const List = require('./components/List')
const Card = require('./components/Card')
const Board = require('./components/Board')


document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(<Board />, document.getElementById('app'))
})

