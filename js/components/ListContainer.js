const React = require('react')
const Board = require('./board')//

const ListContainer = React.createClass({
	getInitialState () {
		return {
			title: 'Easy as ABC',
			lists: [
				{
					title: 'A',
					cards: ['apple'],
					image: 'https://thumbs.dreamstime.com/x/wooden-alphabet-blocks-eps-11018061.jpg'
				},
				{
					title: 'B',
					cards: ['boat']
				},
				{
					title: 'C',
					cards: ['cat']
				},
				{
					title: 'D',
					cards: ['dog']
				},
				{
					title: 'E',
					cards: ['elephant']
				},
				{
					title: 'F',
					cards: ['frog']
				},
				{
					title: 'G',
					cards: ['ghost']
				},
				{
					title: 'H',
					cards: ['hat']
				},
				{
					title: 'I',
					cards: ['ice cream']
				},
				{
					title: 'J',
					cards: ['jack-in-the-box']
				},
				{
					title: 'K',
					cards: ['kite']
				},
				{
					title: 'L',
					cards: ['lollipop']
				},
				{
					title: 'M',
					cards: ['mouse']
				},
				{
					title: 'N',
					cards: ['nest']
				},
				{
					title: 'O',
					cards: ['octopus']
				},
				{
					title: 'P',
					cards: ['pig']
				},
				{
					title: 'Q',
					cards: ['queen']
				},
				{
					title: 'R',
					cards: ['rainbow']
				},
				{
					title: 'S',
					cards: ['starfish']
				},
				{
					title: 'T',
					cards: ['turtle']
				},
				{
					title: 'U',
					cards: ['unicorn']
				},
				{
					title: 'V',
					cards: ['viking']
				},
				{
					title: 'X',
					cards: ['xylophone']
				},
				{
					title: 'Y',
					cards: ['yarn']
				},
				{
					title: 'Z',
					cards: ['zebra']
				}
			]
		}
	},

	onClickLetter (index, text) {
		let lists = this.state.lists  

		lists[index] = {
			title: lists[index].title,
			cards: lists[index].cards,
			image: lists[index].image.concat()

		}
		this.setState({
			lists: lists
		})
	},

	render () {
		return <Board title={this.state.title} lists={this.state.lists} onClickLetter={this.onClickLetter} />
	}
})

module.exports = ListContainer;
