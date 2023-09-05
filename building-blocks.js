// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

// Define these methods:

// `getWidth()` return the width of the `Block`

// `getLength()` return the length of the `Block`

// `getHeight()` return the height of the `Block`

// `getVolume()` return the volume of the `Block`

// `getSurfaceArea()` return the surface area of the `Block`
// my attempt, couldnt figure out SA
// class Block {
// 	constructor(data) {
// 		this.data = data;
// 	}
// 	getWidth() {
// 		return this.data[0];
// 	}
// 	getLength() {
// 		return this.data[1];
// 	}
// 	getHeight() {
// 		return this.data[2];
// 	}
// 	getVolume() {
// 		let volume = this.data.reduce((acc, c) => acc * c, 1);
// 		return volume;
// 	}
// 	getSurfaceArea() {
// 		let surfaceArea = this.data.reduce((acc, c) => acc * c, 1) / this.data[1];
// 		return surfaceArea;
// 	}
// }
// best answer
class Block {
	constructor([width, length, height]) {
		this.width = width;
		this.length = length;
		this.height = height;
	}

	getWidth() {
		return this.width;
	}

	getLength() {
		return this.length;
	}

	getHeight() {
		return this.height;
	}

	getVolume() {
		return this.width * this.length * this.height;
	}

	getSurfaceArea() {
		return (
			2 *
			(this.width * this.length +
				this.width * this.height +
				this.length * this.height)
		);
	}
}
// clever answer
function Block([width, length, height]) {
	var volume = height * length * width,
		area = 2 * height * width + 2 * (height + width) * length;
	return {
		getWidth: () => width,
		getLength: () => length,
		getHeight: () => height,
		getVolume: () => volume,
		getSurfaceArea: () => area,
	};
}
