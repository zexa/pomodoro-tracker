const second = 1000;
const minute = second * 60;
const hour = minute * 60;

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

const setWorkTime = function() {
	blinkBackground('#a63c6b');
	setTimeout(setRestTime, minute * 25);
}

const setRestTime = function() {
	blinkBackground('#3c76a6');
	setTimeout(setWorkTime, minute * 5);
}

setWorkTime();
