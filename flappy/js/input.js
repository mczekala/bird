var Input = {
	init: function(data) {
		document.onkeydown = function(event) {
			Input.jobs.pressed= true;
		};
		document.onkeyup = function(event) {			
			Input.jobs.pressed=false;
		}
	},
	
	update: function(data) {
		var bird = data.objects.bird;
		if(Input.jobs.Pressed()) {
			bird.currentState = bird.state.jump;
		}
		else {
			bird.currentState = bird.state.fly;
		}
	},
	jobs: {
		Pressed: function() {
			return Input.jobs.pressed;
		},
		pressed: null,
	}
};