import React from 'react';
import chai from 'chai';
import TestUtils from 'react-addons-test-utils';

const ButtonClick = React.createClass({
	onClick (e) {
		e.preventDefault();
		this.props.onClickLetter(this.props.image);

	},
	render () {
		return (
			<button className="button" onClick={this.onClick}><img src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-128.png' width='25' /></button>	//click option		
		)
	}
})

module.exports = ButtonClick;

//ask Chris if we can put word from ListContainer on button