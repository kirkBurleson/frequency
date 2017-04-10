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
freq.display(freq.get(s), 1, 2);