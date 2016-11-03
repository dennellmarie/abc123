const React = require('react')
const Board = require('./board')//

const ListContainer = React.createClass({
	getInitialState () {
		return {
			title: 'Easy as ABC',
			lists: [
				{
					title: 'A',
					word: 'apple',
					image: 'https://thumbs.dreamstime.com/x/wooden-alphabet-blocks-eps-11018061.jpg'
				},
				{
					title: 'B',
					word: 'boat'
				},
				{
					title: 'C',
					word: 'cat',
				},
				{
					title: 'D',
					word: 'dog',
				},
				{
					title: 'E',
					word: 'elephant',
				},
				{
					title: 'F',
					word: 'frog',
				},
				{
					title: 'G',
					word: 'ghost',
				},
				{
					title: 'H',
					word: 'hat',
				},
				{
					title: 'I',
					word: 'ice cream',
				},
				{
					title: 'J',
					word: 'jack-in-the-box',
				},
				{
					title: 'K',
					word: 'kite',
				},
				{
					title: 'L',
					word: 'lollipop',
				},
				{
					title: 'M',
					word: 'mouse',
				},
				{
					title: 'N',
					word: 'nest',
				},
				{
					title: 'O',
					word: 'octopus',
				},
				{
					title: 'P',
					word: 'pig',
				},
				{
					title: 'Q',
					word: 'queen',
				},
				{
					title: 'R',
					word: 'rainbow',
				},
				{
					title: 'S',
					word: 'starfish',
				},
				{
					title: 'T',
					word: 'turtle',
				},
				{
					title: 'U',
					word: 'unicorn',
				},
				{
					title: 'V',
					word: 'viking',
				},
				{
					title: 'X',
					word: 'xylophone',
				},
				{
					title: 'Y',
					word: 'yarn',
				},
				{
					title: 'Z',
					word: 'zebra',
				}
			]
		}
	},

	onClickLetter (index, text) {
		let lists = this.state.lists.concat(); 

		lists[index].flipped = !lists[index].flipped;
		console.log(lists[index]);
		
		this.setState({
			lists: lists
		})
	},

	render () {
		return <Board title={this.state.title} lists={this.state.lists} onClickLetter={this.onClickLetter} />
	}
})

module.exports = ListContainer;
