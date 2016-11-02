const React = require('react')
const Board = require('./board')//

const ListContainer = React.createClass({
	getInitialState () {
		return {
			title: 'everyday thoughts',
			lists: [
				{
					title: 'head bangers',
					cards: ['syntax errors', 'documentation', 'trello boards']
				},
				{
					title: 'programming funnies',
					cards: ['commitlogsfromlastnight.com', 'httpcats.com', 'http://imgur.com/fuDDhdL']
				},
				{
					title: 'perks of programming',
					cards: ['free pizza at meetups', 'working in pjs', 'all the foods']
				},
				{
					title: 'foreign languages',
					cards: ['python', 'cobol', 'DeScribe Macro Language']
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

module.exports = ListContainer;
