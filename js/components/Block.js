import React from 'react';
import ButtonClick from './ButtonClick';

const Block = (props) => (
	//console.log("IN LIST", JSON.stringify(props))||

	<div className='block-list' style={{borderColor: props.color}}>
		{
			props.flipped ? <img src={props.image} height='122' /> : 
		  	<h3 className='block-title' style={{color: props.color}}>{props.title}</h3>
		}
	  	<div className='word'>
			<p className='word-text'>{props.word}</p>
			<ButtonClick onClickLetter={props.onClickLetter} />
	 	</div>
	</div>	
)
//Objects are not valid as a React child
module.exports = Block;