// complete the function/method so that it returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url) {
	// slice remaining string from # on
	if (url.includes("#"))
		return url.split("").slice(0, url.indexOf("#")).join("");
	else return url;
}
removeUrlAnchor("www.codewars.com");

// wow
function removeUrlAnchor(url) {
	return url.split("#")[0];
}
// string
// return
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"
