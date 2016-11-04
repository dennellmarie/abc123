import React from 'react';
import chai from 'chai';
chai.should();
import TestUtils from 'react-addons-test-utils';
import Board from '../js/components/Board';

describe('Board component', function() {
	var renderer, result;
	beforeEach(function() {
		renderer = TestUtils.createRenderer();
		renderer.render(<Board title='Mary Poppins' lists={['Jane', 'Michael']} onClickLetter={()=>[]} />);
		result = renderer.getRenderOutput();
	});

	it('Renders board', function() {
		result.props.className.should.equal('board');

		var h3 = result.props.children[0];
		h3.type.should.equal('h3');
		h3.props.children.should.equal('Mary Poppins');
	});
});