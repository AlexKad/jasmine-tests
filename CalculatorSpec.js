describe('Calculator', function(){
	var calc;
	beforeEach(function(){
		calc = new Calculator();

		jasmine.addMatchers({
			toBeBetween: function(){
				return {
					compare: function(actual, min, max){
						var result = {};
						result.pass = actual >= min && actual <= max;
						return result;
					}
				};				
			}
		});
	});

	it('should be able to sum 1 and 2', function(){
		expect(calc.add(1,2)).toBe(3);
	});


	it('should be able to divide 3 and 2', function(){
		expect(calc.divide(3,2)).toBe(1.5);
	});

	it('should be able to divide 1 and 3', function(){
		expect(calc.divide(1,3)).toBeBetween(0.3, 0.4);

		//expect(calc.divide(1,3)).toBeGreaterThan(0.3);
		//expect(calc.divide(1,3)).toBeLessThan(0.4);
	})
});