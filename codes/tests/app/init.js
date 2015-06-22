define(['../app/arithmetic'], function(arithmetic) {

	var a = {};
	var expect = {};

	describe("Arithmetic operations", function() {

		before(function() {
			a = new arithmetic();
			expect = chai.expect;
		});

		it("Addition", function() {
			expect(a.add(5, 5)).to.equal(10);
		});

	})
});