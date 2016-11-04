import React from 'react';
import chai from 'chai';
chai.should();
import TestUtils from 'react-addons-test-utils';
import ButtonClick from '../js/components/ButtonClick';

describe('ButtonClick Component', function() {
	var renderer, result;
	beforeEach(function() {
		renderer = TestUtils.createRenderer();
		renderer.render(<ButtonClick />);
		result = renderer.getRenderOutput();
	});

	it('has correct class name', function() {
		result.props.className.should.equal('button');
	});
});