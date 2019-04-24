function StringCalc() {

}

StringCalc.prototype.add = function(numbers) {

	if (numbers.length === 0) {
		return 0;	
	}

	return parseInt(numbers);
}



describe("String Calc Kata", function() {

	var stringCalc;

	beforeEach(function() {
		stringCalc = new StringCalc();
	});

	it("Should return zero", function() {
		expect(stringCalc.add("")).toEqual(0);
	});

	it("Should return value of single number", function() {
		expect(stringCalc.add("1")).toEqual(1);
	});

	it("Should return sum of two numbers", function() {
		expect(stringCalc.add("1,2")).toEqual(3);
	});

	it("Should return sum of three numbers", function() {
		expect(stringCalc.add("1,2,3")).toEqual(6);
	});
});

