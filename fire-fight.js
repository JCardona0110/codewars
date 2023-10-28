// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!

function fireFight(s){
  return s.replaceAll('Fire', '~~')
}

fireFight("Mast Deck Engine Water Fire")
// string of words
// return string with fire replaced by '~~'
// ("Mast Deck Engine Water Fire"), "Mast Deck Engine Water ~~")