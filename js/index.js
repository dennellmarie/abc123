require('babel-polyfill');

const React = require('react')
const ReactDOM = require('react-dom')
const List = require('./components/List')
const Card = require('./components/Card')
const Board = require('./components/Board')

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(<Board title='board 1' lists={['list 1', 'list 2']}/>, document.getElementById('app'))
})

