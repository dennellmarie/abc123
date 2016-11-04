import React from 'react';
import chai from 'chai';
chai.should();
import TestUtils from 'react-addons-test-utils';
import Block from '../js/components/Block';

describe('Block component unflipped', function() {
	var renderer, result;
	beforeEach(function() {
		renderer = TestUtils.createRenderer();
		renderer.render(<Block title='Your majesty' word='supercalifragilisticexpialidocious' />);
		result = renderer.getRenderOutput();
	});

	it('Renders the block when not flipped', function() {
		result.props.className.should.equal('block-list');
		
		var h3 = result.props.children[0];
		h3.type.should.equal('h3');
		h3.props.children.should.equal('Your majesty');

		var word = result.props.children[1];
		word.type.should.equal('div');
		word.props.children[0].props.children.should.equal('supercalifragilisticexpialidocious');
	});
});

describe('Block component flipped', function() {
	var renderer, result;
	beforeEach(function() {
		renderer = TestUtils.createRenderer();
		renderer.render(<Block flipped='true' image='image.jpg' word='supercalifragilisticexpialidocious' />);
		result = renderer.getRenderOutput();
	});

	it('Renders the block when flipped', function() {
		result.props.className.should.equal('block-list');
		
		var image = result.props.children[0];
		image.type.should.equal('img');
		image.props.src.should.equal('image.jpg');

		var word = result.props.children[1];
		word.type.should.equal('div');
		word.props.children[0].props.children.should.equal('supercalifragilisticexpialidocious');
	});
})