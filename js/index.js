require('babel-polyfill');

const React = require('react')
const ReactDOM = require('react-dom')
const List = require('./components/List')
const Card = require('./components/Card')
const Board = require('./components/Board')
const Trello = require('./components/Trello')

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(<Trello />, document.getElementById('app'))
})

