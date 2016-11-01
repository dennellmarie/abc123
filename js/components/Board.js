const React = require('react')
const List = require('./List')

const Board = (props) => (
	<div className='board'>
		<List title='List title' cards={["Card 1", "Card 2", "muahhh"]}/>
	</div>
)

module.exports = Board