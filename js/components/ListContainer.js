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
					image: 'http://media.istockphoto.com/vectors/apple-vector-id165788969?k=6&m=165788969&s=170667a&w=0&h=XKhxo8Opr8JY7gTmj0gHtbPQM3KcS3nVEWtwyxnHowc='
				},
				{
					title: 'B',
					word: 'boat',
					image: 'http://www.clipartkid.com/images/71/row-boat-clipart-boat-clip-art-fJ7axS-clipart.png'
				},
				{
					title: 'C',
					word: 'cat',
					image: 'https://s-media-cache-ak0.pinimg.com/236x/59/87/6c/59876c15abd6d705ea8b87033633f009.jpg'
				},
				{
					title: 'D',
					word: 'dog',
					image: 'http://www.wikirefs.com/pictures/files/fdl%5E/pluto-dog-cartoon.jpg'
				},
				{
					title: 'E',
					word: 'elephant',
					image: 'http://ngarti.com/wp-content/uploads/2013/01/funny-cartoon-elephants.jpg'
				},
				{
					title: 'F',
					word: 'fish',
					image: 'http://www.clipartbest.com/cliparts/dT8/Gbn/dT8GbnnTe.jpeg'
				},
				{
					title: 'G',
					word: 'ghost',
					image: 'http://ih0.redbubble.net/image.14414467.6602/sticker,375x360-bg,ffffff.u2.png'
				},
				{
					title: 'H',
					word: 'hat',
					image: 'http://www.clipartbest.com/cliparts/7ca/o57/7cao577pi.png'
				},
				{
					title: 'I',
					word: 'ice cream',
					image: 'http://cliparts.co/cliparts/8iz/rzz/8izrzzRbT.jpg'
				},
				{
					title: 'J',
					word: 'jellyfish',
					image: 'http://cliparts.co/cliparts/rin/G8B/rinG8BB4T.png'
				},
				{
					title: 'K',
					word: 'kite',
					image: 'http://www.my-best-kite.com/images/cartoon-kite-06.jpg'
				},
				{
					title: 'L',
					word: 'lollipop',
					image: 'https://reallyclueless.files.wordpress.com/2010/03/lolly.jpg'
				},
				{
					title: 'M',
					word: 'mouse',
					image: 'http://www.disneyimage.com/_/rsrc/1409662797715/funny-mouse-images/Funny_Blue_Cartoon_Mouse.png?height=320&width=320'
				},
				{
					title: 'N',
					word: 'nest',
					image: 'http://exchangedownloads.smarttech.com/public/content/72/725b9d68-67a4-408f-8247-5b2365b0cf03/previews/medium/0001.png'
				},
				{
					title: 'O',
					word: 'octopus',
					image: 'http://cliparts.co/cliparts/qiB/AyG/qiBAyG5rT.jpg'
				},
				{
					title: 'P',
					word: 'pizza',
					image: 'http://images.realclear.com/327998_5_.png'
				},
				{
					title: 'Q',
					word: 'queen',
					image: 'http://img.time2draw.com/2015/09/Evil-Queen-Snow-White-Fairy-Tale-Simple-Drawing-Tutorial-final-step-215x382.png'
				},
				{
					title: 'R',
					word: 'rainbow',
					image: 'http://www.clipartkid.com/images/447/cartoon-rainbow-clipart-best-sfhdqm-clipart.png'
				},
				{
					title: 'S',
					word: 'starfish',
					image: 'http://www.clipartkid.com/images/155/sea-star-clipart-cliparts-co-yH1dUV-clipart.png'
				},
				{
					title: 'T',
					word: 'turtle',
					image: 'https://s-media-cache-ak0.pinimg.com/236x/d9/5b/e3/d95be308112435c61e54b1b9aef7a9e5.jpg'
				},
				{
					title: 'U',
					word: 'unicorn',
					image: 'http://i1232.photobucket.com/albums/ff380/hizu-alison/12151202-bleu-mignon-licorne-animal-art-illustration-vecteur_zps062543dc.jpg'
				},
				{
					title: 'V',
					word: 'viking',
					image: 'https://s-media-cache-ak0.pinimg.com/564x/fe/23/ce/fe23ceb267f2e8b22b2bb217c05d4946.jpg'
				},
				{
					title: 'X',
					word: 'xylophone',
					image: 'http://www.clipartbest.com/cliparts/aiq/ebb/aiqebbdyT.png'
				},
				{
					title: 'Y',
					word: 'yarn',
					image: 'http://www.clipartkid.com/images/36/ball-of-yarn-cartoon-ball-of-yarn-knitting-hnqFvU-clipart.jpg'
				},
				{
					title: 'Z',
					word: 'zebra',
					image: 'http://cliparts.co/cliparts/Lcd/oxe/LcdoxeRqi.jpg'
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
});

module.exports = ListContainer;
