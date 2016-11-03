require('babel-polyfill');

const React = require('react')
const ReactDOM = require('react-dom')
const ListContainer = require('./components/ListContainer')

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(<ListContainer />, document.getElementById('app'))
})

