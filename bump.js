// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road(_) or bumps(n).If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

function bump(road){
  // get rid of road
  // get length of bumps
  // if bumps.length >15 Car Dead
  // else Woohoo!
  
  let bumps = road.split('_').join('')
  if (bumps.length > 15) {
    return 'Car Dead'
  } else {
    return 'Woohoo!'
  }
}


bump("nnn_n__n_n___nnnnn___n__nnn__")

// string of n's and underscores
// // return
// bump("nnn_n__n_n___nnnnn___n__nnn__"), "Woohoo!";
// bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead";