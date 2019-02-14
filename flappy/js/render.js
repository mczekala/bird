var Render = {
	update: function(data) {
		data.canvas.bgCtx.clearRect(0,0, data.canvas.bgCanvas.width, data.canvas.bgCanvas.height);
		Render.jobs.draw(data.objects.map, data.canvas.bgCtx);
		
		data.canvas.fgCtx.clearRect(0,0, data.canvas.fgCanvas.width, data.canvas.fgCanvas.height);
		Render.jobs.draw(data.objects.bird, data.canvas.fgCtx);
		Render.jobs.setScore(data);
	},
	jobs: {
		draw: function(co, gdzie) {
			gdzie.drawImage(co.img.img, co.img.x, co.img.y, co.img.w, co.img.h, co.x, co.y, co.w, co.h);
		},
		setScore: function(data) {
			score.innerHTML=data.frame;
		},
		final: function(data) {
			var display = document.getElementById('display');
			var btn = document.getElementById("button");
			display.style.display = 'none';
			btn.style.display = 'block';
			btn.addEventListener("click", function() {
				Engine.init();
			});
		}
	}
}