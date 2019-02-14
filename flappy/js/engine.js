var Engine = {
	init: function() {
		var bgCanvas = document.getElementById('bg-canvas');
		var fgCanvas = document.getElementById("fg-canvas");
		var score = document.getElementById('score');
		var container = document.getElementById('container');

		var display = document.getElementById('display');
		var btn = document.getElementById("button");
		display.style.display = 'block';
		btn.style.display = 'none';

		var canvas = {
			score: score,
			container: container,
			bgCanvas: bgCanvas,
			fgCanvas: fgCanvas,
			bgCtx: bgCanvas.getContext("2d"),
			fgCtx: fgCanvas.getContext("2d")
		};
		var graphics = new Image();
		graphics.src="img/sheet.png";
		graphics.addEventListener("load",function() {
			var graphics = this;
		});
		var data = {
			frame:0,
			canvas: canvas,
			graphics: graphics,
			stop:false
		};
		Input.init(data);
		Objects.init(data);
		Engine.start(data);
	},
	start: function(data) {
		stop=false;
		var loop = function() {
			Engine.input(data);
			Engine.update(data);
			Engine.render(data);
			data.frame++;
			if(stop) return;
			window.requestAnimationFrame(loop);
		};
		loop();
	},
	stop: function (data) {
		console.log('end');
		stop=true;
	},
	input: function(data) {
		Input.update(data);
	},
	update: function(data) {
		Animations.update(data);
		Movement.update(data);
		Physics.update(data);
	},
	render: function(data) {
		Render.update(data);
	}
};
window.onload = Engine.init();