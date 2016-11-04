require('babel-polyfill');

const React = require('react')
const ReactDOM = require('react-dom')
const BoardContainer = require('./components/BoardContainer')

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(<BoardContainer />, document.getElementById('app'))
})

