// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an array where each object will have a new property 'greeting' with the following string value:

// Hi < firstName here >, what do you like the most about < language here >?

// my failed attempt
function greetDevelopers(arr) {
	return arr.map((e) =>
		e.push({ greeting: `Hi ${firstName}, what do you like about ${language}?` })
	);
}

// p-array of objects
// r-return array with new property
// e - { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', greeting: 'Hi Sofia, what do you like the most about Java?'

// best answer
function greetDevelopers(list) {
	list.forEach(function (developer) {
		developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
	});

	return list;
}
