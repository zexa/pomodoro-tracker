const second = 1000;
const minute = second * 60;
const hour = minute * 60;

const defaultWorkTime = minute * 25;
const defaultRestTime = minute * 5;
const defaultBigRestTime = minute * 30;

let iteration = 0;
let state = 'rest';

const blinkBackground = function(color, times = 3) {
	let timeCurrent = 0;
	const blinkWhite = function() {
		document.body.style.background = '#FFFFFF';
		setTimeout(blinkColor, 500);
	}
	const blinkColor = function() {
		document.body.style.background = color;
		setTimeout(blink, 500);
	}
	const blink = function() {
		if (timeCurrent < times) {
			timeCurrent++;
			blinkWhite();
		}
	}
	blink();
}

const setWorkTime = function(time = defaultWorkTime) {
	state = 'work';
	blinkBackground('#a63c6b');
	setTimeout(toggleState, time);
}

const setRestTime = function(time = defaultRestTime) {
	state = 'rest';
	blinkBackground('#3c76a6');
	iteration++;
	setTimeout(toggleState, time);
}

const setBigRestTime = function(time = defaultBigRestTime) {
	state = 'big rest';
	blinkBackground('#3ca661');
	setTimeout(toggleState, time);
}

const toggleState = function() {
	if ((state === 'rest') || (state === 'big rest')) {
		setWorkTime();
	} else if (state === 'work') {
		if (iteration > 3) {
			setBigRestTime();
			iteration = 0;
		} else {
			setRestTime();
		}
	}
}

toggleState();
