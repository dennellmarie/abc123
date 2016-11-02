const React = require('react')

const AddCardForm = React.createClass({
	onSubmit (e) {
		e.preventDefault()

		if(!this.props.onAddSubmit) {
			return
		}

		this.props.onAddSubmit(this.refs.textInput.value)
	},
	render () {
		return (
			<form onSubmit={this.onSubmit}>
				<input type="text" ref="textInput" />
				<button>Add Card</button>
			</form>
		)
	}
})

module.exports = AddCardForm