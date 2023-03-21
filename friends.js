// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
function friend(friends) {
	let realOnes = friends.filter((el) => el.length === 4);
	return realOnes;
}

//p-list of strings
//r-return
//e-friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
