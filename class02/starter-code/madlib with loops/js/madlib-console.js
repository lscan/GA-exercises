//to create the startup ideas
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
//an array to hold the favorited ideas
var favoriteStartups = [];
//first randomization func
var random1 = function() {
	return Math.floor((Math.random() * startupX.length));
}
//second randomization func
var random2 = function() {
	return Math.floor((Math.random() * startupY.length));
}

//listener for the first button. this generates a madlib.
document.querySelector('#create').addEventListener('click', function() {
	document.querySelector('#xForY').innerHTML = 'A startup that is ' + startupX[random1()] + ', but for ' + startupY[random2()];
});
//listener for the second button. this adds a favorite into our array.
document.querySelector('#save').addEventListener('click', function() {
	//store the favorite in a var
	var newFavorite = document.querySelector('#xForY').innerHTML;
	//look to see if we've already stored this. if we have, don't add it.
	for(var i=0; i<favoriteStartups.length; i++) {
		if(favoriteStartups[i] == newFavorite) {
			return;
		}
	}
	//add this idea into our favorites
	favoriteStartups.push(newFavorite);
});
//listener for the third button. this prints the favorited ideas to the page.
document.querySelector('#print').addEventListener('click', function() {
	//reset the HTML each time we click the button
	var favoritesText = '';
	//loop through and add all ideas from the array into a <p> tag
	for(var i=0; i<favoriteStartups.length; i++) {
		favoritesText += '<p>' + favoriteStartups[i] + '</p>';
	}
	document.querySelector('#favorites').innerHTML = favoritesText;
});