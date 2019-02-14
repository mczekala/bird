var Animations = {
	update: function(data) {
		Animations.jobs.Map(data);
		Animations.jobs.Bird(data);
	},
	jobs: {
		Map: function(data) {
			data.objects.map.x -=1;
			if(data.objects.map.x < -3400) {
				for(var i = 0; i<data.objects.wallTable.length; i++) {
					data.objects.wallTable[i].x += 3400;
				}
				data.objects.map.x = 0;
			}
		},
		Bird: function(data) {
			data.objects.bird.currentState.animation(data);
		}
	}
}  