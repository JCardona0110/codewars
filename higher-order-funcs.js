// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// Notes:

// The format of the strings will always be Europe and JavaScript.
// All data will always be valid and uniform as in the example above.

// not my solution
function countDevelopers(list) {
	return list.filter(
		(x) => x.continent == 'Europe' && x.language == 'JavaScript'
	).length;
}

//p-list of objects
//r-return number of js devs from Europe
//e-  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// return 1 (Noah)

// another good one
const countDevelopers = (list) =>
	list.filter(
		({ continent, language }) =>
			continent === 'Europe' && language === 'JavaScript'
	).length;
