describe('work with DOM', function(){
	var renderer;
	var elementId = "#renderer";

	beforeEach(function(){
		renderer = new Renderer($(elementId));
	});

	it('should render expected text', function(){
		renderer.renderName('Alex');
		expect($(elementId).text()).toBe('Hi, Alex!');
	})
});