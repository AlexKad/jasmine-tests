describe('work with DOM', function(){
	var renderer, el;


	beforeEach(function(){
		el = $("<div>sample text</div>");
		$('body').append(el);
		renderer = new Renderer(el);
	});

	afterEach(function(){
		el.remove();
	});

	it('should render expected text', function(){
		renderer.renderName('Alex');
		expect(el.text()).toBe('Hi, Alex!');
	})

	describe('async specs', function(){
		beforeEach(function (done) {
		    renderer.hideName(done);		   	    	      	    
		});

		it('should fade out after 1 sec', function(done){
			expect(el.css('display')).toBe('none');
			done();
		});

	});
});
