const React = require('react')
const Board = require('./board')//

const Trello = React.createClass({
	getInitialState () {
		return {
			title: 'Board Title',
			lists: [
				{
					title: 'List 1 title',
					cards: ['Card 1', 'Card 20', 'Card 3']
				},
				{
					title: 'List 2 title',
					cards: ['Card 1', 'Card 2', 'Card 3']
				}
			]
		}
	},

	onAddSubmit (index, text) {
		let lists = this.state.lists.concat()    

		lists[index] = {
			title: lists[index].title,
			cards: lists[index].cards.concat(text)
		}
		this.setState({
			lists: lists
		})
	},

	render () {
		console.log(this.state)
		return <Board title={this.state.title} lists={this.state.lists} onAddSubmit={this.onAddSubmit} />
	}
})

module.exports = Trello
