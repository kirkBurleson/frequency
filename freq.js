/*
	1) Make a function that takes a string and returns an object that contains the
	total number of times each letter appears in the string (case matters). For example:

	{
		a: 3,
		b: 2,
		A: 1
	}

	2) Using the output from the first program, display the frequencies in the console. Each letter
	should appear on its own line and the frequency should be represented by the '*' character.
	For example:

	a ***
	b **
	A *

	3) Modify the second function so it can display the graph vertically, as well as, horizontally.
	You should leave a space in between letters so it's easier to read.
	For example: *Note the extra horizontal spaces for readability

	*
	*  *
	*  *  *
	a  b  A

*/

var freq = (function() {
	function getFreq(s) {
		let result = {},
				i = 0,
				len = s.length;

		while (i < len) {
			let c = s.charAt(i++);
			(result[c] === undefined) ? result[c] = 1 : result[c]++;
		}

		return result;
	}

	function display(data, displayVertical, spaces) {
		const keys = Object.keys(data);
		if (keys.length === 0) {
			console.log("No input");
			return;
		}

		displayVertical ? vert() : hor();

		function vert() {
			const high = getHighest();
			let out = "\n";

			for (let i = 0; i < high; i++) {
				keys.forEach((v) => {
					(high - data[v] - i <= 0) ? 
					out += "*" + " ".repeat(spaces) :
					out += " " + " ".repeat(spaces);
				});
				out += "\n";
			}
			
			keys.forEach((v) => { out += v + " ".repeat(spaces); });

			console.log(out);

			function getHighest() {
				let cnt = 0;
				keys.forEach((v) => { if (data[v] > cnt) cnt = data[v]; });
				return cnt;
			}
		}

		function hor() {
			keys.forEach((v) => { console.log(`${v} ${"*".repeat(data[v])}`); });
		}
	}

	return {
		display: display,
		get: getFreq
	};
})();

const s = "kirk loves to program in javascript";
freq.display(freq.get(s), 0, 2);