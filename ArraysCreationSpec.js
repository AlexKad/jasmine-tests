describe('Array creation', function(){

	describe('Array constructor', function(){
		it('with new Array', function(){
		expect(new Array(1,2,3)).toEqual([1,2,3]);
		});

		it('with new Array with fixed length', function(){
			let a = new Array(3);
			expect(a.length).toEqual(3);
		});

		it('with new Array with fixed length and prefilled. Ecma Script 6', function(){
			let a = new Array(5).fill(0);
			expect(a).toEqual([0,0,0,0,0]);
		});

		it('with new Array with fixed length using from. Ecma Script 6', function(){
			let a = Array.from(new Array(5), (item, index) => index + 1);
			expect(a).toEqual([1,2,3,4,5]);
		});

		it('with new Array and generator function.Ecma Script 6', function(){
			//it's better to move it to source file
			function* generate(max){
				let count = 0;
				while(max > count++){
					yield count;
				}
			}

			expect([...generate(5)]).toEqual([1,2,3,4,5]);
			expect(Array.from(generate(5))).toEqual([1,2,3,4,5]);
		})
	});
	

	it('with []', function(){
		let a = [1,2,3];
		expect(a).toEqual([1,2,3]);
	});

	it('with dot notation. Ecma Script 6', function(){
		let a = [1,2,3];
		let b = [4,5,6];
		expect([ ...a, ...b]).toEqual([1,2,3,4,5,6]);
	});

	it('with dot notation and generator function.Ecma Script 6', function(){
		//it's better to move it to source files
		function* elements(el, length){
			let index = 0;
			while(length > index++){
				yield el;
			}
		}

		expect([...elements(1,3)]).toEqual([1,1,1]);

	});
});