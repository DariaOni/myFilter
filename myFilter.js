Array.prototype.pushMethod = function (...value) {
	for (const el of value) {
		this[this.length] = el;
	}
	return this.length;
};

Array.prototype.myFilterMethod = function (callback) {
	let filtered = [];

	for (let i = 0; i < this.length; i++) {
		let passesTest = callback(this[i], i, this);

		if (passesTest) {
			filtered.pushMethod(this[i]);
		}
	}

	return filtered;
};

let list = [4, 8, 12, 3, 5, 7, 43, 24];
let evenNums = list.myFilterMethod((el) => el % 2 === 0);
console.log(evenNums);
