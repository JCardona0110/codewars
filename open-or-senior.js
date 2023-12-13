// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// my failed attempt
function openOrSenior(data) {
	// map through
	// handicap range from -2 to +26
	// senior >= 55 && handicap >7
	// else open
	// splice out the index and replace with string open or senior
	let category = data.map((el) => {
		if (el[0] >= 55 && el[1] > 7) {
			data.splice(data.indexOf(el), 1, "senior");
		} else {
			data.splice(data.indexOf(el), 1, "open");
    }
  })
  return category
}

openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])

// best answer 
function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}
// arrays inside array containing 2 nums
// return
// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
