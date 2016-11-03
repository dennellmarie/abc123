const React = require('react')

const AddCardForm = React.createClass({
	onClick (e) {
		e.preventDefault();

		if(!this.props.onClickLetter) {
			return
		}
		console.log(this.props.onClickLetter(this.props.image));

	},
	render () {
		return (
			
			// <a href={props.image}  props.title />//link
			<button className="button" onClick={this.onClick}>+</button>	//click option		
		)
	}
})

module.exports = AddCardForm

//ask Chris if we can put word from ListContainer on button