// Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.

// You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.

// When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.

// Return the bag after for loop finished.

// You should use for, break and continue in your code. otherwise, your solution may not pass this kata.

// my attempt
function grabDoll(dolls) {
	let bag = [];
	// put kitty and barbie in bag
	// if other string, continue to skip
	// bag is full with 3 elements, use break to stop
	// if not full go until last element
	for (let i = 0; i <= dolls.length; i++) {
		if (dolls[i] !== "Hello Kitty" || dolls[i] !== "Barbie doll") {
			continue;
		}
		if (dolls[i] === "Hello Kitty") {
			bag.push(dolls[i]);
		}
		if (dolls[i] === "Barbie doll") {
			bag.push(dolls[i]);
		}
		if (bag.length == 3) break;
		return bag;
	}
}

// p-string array
// r-return
// e-(["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"]),["Hello Kitty","Hello Kitty"]);
//  -(["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"]),["Hello Kitty","Hello Kitty","Barbie doll"]);

// much better
function grabDoll(dolls) {
	var bag = [];

	for (var i = 0; i < dolls.length; i++) {
		if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll")
			bag.push(dolls[i]);
		else continue;

		if (bag.length === 3) break;
	}

	return bag;
}

// best
const grabDoll = (dolls) => {
	const bag = [];
	for (const doll of dolls) {
		if (bag.length === 3) break;
		if (doll !== `Hello Kitty` && doll !== `Barbie doll`) continue;
		bag.push(doll);
	}
	return bag;
};
