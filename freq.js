var freq = (function() {
	function getFreq(s) {
		let map = new Map,
				i = 0,
				len = s.length;

		while (i < len) {
			let c = s.charAt(i++);
			map.has(c) ? map.set(c, map.get(c) + 1) : map.set(c, 1);
		}

		return map;
	}

	function display(data, displayVertical, spaces) {
		if (data.size === 0) {
			console.log("No input")
			return
		}

		displayVertical ? vert() : hor();

		function vert() {
			const high = getHighest();
			let out = "\n";

			for (let i = 0; i < high; i++) {
				data.forEach((v) => {
					(high - v - i <= 0) ? 
					out += "*" + " ".repeat(spaces) :
					out += " " + " ".repeat(spaces);
				});
				out += "\n";
			}
			
			data.forEach((v, k) => { out += k + " ".repeat(spaces); });

			console.log(out);

			function getHighest() {
				let cnt = 0;
				data.forEach((v) => { if (v > cnt) cnt = v });
				return cnt;
			}
		}

		function hor() {
			data.forEach((v, k) => { console.log(`${k} ${"*".repeat(v)}`); });
		}
	}

	return {
		display: display,
		get: getFreq
	};
})();

//const s = "kirk loves to program in javascript";
const s = "the quick red fox jumped over the lazy brown dog";
freq.display(freq.get(s), false, 2);
freq.display(freq.get(s), true, 2);