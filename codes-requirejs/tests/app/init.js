define(['src/arithmetic'], function(arithmetic) {

	var a = expect = {};

	a = new arithmetic();
	expect = chai.expect;

	describe("Arithmetic operations", function() {

		before(function() {
			a = new arithmetic();
			expect = chai.expect;
		});

		it("Addition of numbers", function() {
			expect(a.add(5, 5)).to.equal(10);
		});

		it("Addition of string", function() {
			expect(a.add("Ashwin", "Hegde")).to.equal("AshwinHegde");
		});

		after(function() {
			a = expect = {};
		});

	})
});