var Renderer = function(el){
	this.element = el;
}

Renderer.prototype.renderName = function(name){
	$(this.element).html('Hi, ' + name + '!');
}

Renderer.prototype.hideName = function(callback){
	$(this.element).fadeOut(1000, callback);
}