import React from 'react';
import chai from 'chai';
chai.should();
import TestUtils from 'react-addons-test-utils';
import BoardContainer from '../js/components/BoardContainer';

describe('BoardContainer', function() {
	var renderer, result;
	beforeEach(function() {
		renderer = TestUtils.createRenderer();
		renderer.render(<BoardContainer />);
		result = renderer.getRenderOutput();
	});

	it('Renders the BoardContainer', function() {
		result.type.name.should.equal('Board');
	});
});