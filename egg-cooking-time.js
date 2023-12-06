// You are the greatest chef on earth. No one boils eggs like you! Your restaurant is always full of guests, who love your boiled eggs. But when there is a greater order of boiled eggs, you need some time, because you have only one pot for your job. How much time do you need?

// Your Task
// Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

// Rules
// you can put at most 8 eggs into the pot at once
// it takes 5 minutes to boil an egg
// we assume, that the water is boiling all the time (no time to heat up)
// for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it

function cookingTime(eggs) {
	// every 8 eggs add 5 mins to time
	// 8 eggs === 5mins
	// 9 eggs === 10mins
	let boilTime = 5;
	let eggMath = eggs / 8;

	return boilTime * Math.ceil(eggMath);
}

cookingTime(17);

// number of eggs
// return time in minutes to boil all eggs
// Example (Input --> Output)
// 0 --> 0
// 5 --> 5
// 10 --> 10
