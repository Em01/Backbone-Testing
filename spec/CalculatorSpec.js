describe("Calculator", function(){
	var calculator;

	beforeEach(function(){
		calculator = new Calculator();
	});

	describe("add", function(){
		it("should be able to add 2 numbers", function(){
			var result = calculator.add(2, 3);

			expect(result).toEqual(5);
	});

		it("should throw and error if both arguments are not provided.", function(){
			var calculator = new Calculator();

			expect(function(){
				calculator.add(1)
			}).toThrow();
		});

		it("should be called with the right arguments.", function(){
			spyOn(calculator, "add").and.throwError("someError");

			var result = calculator.add(2, 5);

			expect(result).toEqual(7);

			expect(calculator.add).toHaveBeenCalled();

			expect(calculator.add).toHaveBeenCalledWith(2, 5);
		});
	});
});