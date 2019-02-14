var Physics = {
	update: function(data) {
		Physics.jobs.Gravity(data.objects.bird);
		Physics.jobs.Detection(data);
	},
	jobs: {
		Gravity: function(object) {
			object.currentState = object.state.fly;
			object.g+=0.1;
			object.y+=object.g;
		},
		Detection: function(data) {
			var bird = data.objects.bird			
			var Detection = function(object) {
				if(bird.x<object.x+object.w && bird.x + bird.w > object.x && bird.y<object.y+object.h && bird.y+bird.h>object.y) {
					Physics.jobs.Collision(data, object);
				}
			}
			data.objects.wallTable.forEach(function(wall) {
				Detection(wall);
			});
		},
		Collision: function(data, object) {
			var bird = data.objects.bird;
			var map = data.objects.map;
			// Render.jobs.final(data);
			// Engine.stop(data);
			if(object.typ === "wall") {
				if (bird.y + bird.h > object.y && (bird.x+ bird.w) > object.x + 8 && bird.x < (object.x + object.w) - 8 && bird.g >= 0) {
					bird.y = object.y - bird.h;
					bird.g = 0;		
				}
				if(bird.x + bird.w > (object.x+8) && bird.x<object.x+object.w-8 && bird.y<object.y+object.h && bird.g < 0) {
					bird.y = object.y + object.h;
					bird.g = 1;
				} else if(bird.x<object.x && bird.y + bird.h > object.y && bird.y < object.y + object.h) {
					bird.x = object.x - bird.w;
				}
			}
		}
	}
}