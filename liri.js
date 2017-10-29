// This will be used to access all the information of the exports
// from my keys.js file
var funKeys = require("./keys.js");
var Twitter = require("Twitter");
var Spotify = require("node-spotify-api");
var request = require("request");
var fs = require('fs');

//var Twitter = require('twitter');
//var Spotify = require("node-")

var client = new Twitter ({
	consumer_key: 'O5U9QAzJxRR2qkQ5TiE6DdSFS',
	consumer_secret: 'kQmLEeJ6tV27ca7M4VdMTtI4brY5a1ey67Zs9j12CpzSjcKVlJ',
	access_token_key: '3022234123-kG7bC7KJR0rZqDETFEM6tv64awlofJfbcR1ng49',
	access_token_secret: 'tLwfWvd4KkKwFAgQEOM99xHWbS6How020VsMKcJaq2aM7'
});

var spotify = new Spotify ({
	id: "e6a25913408748ef9ffc87afb826fbcb",
	secret: "2c9d691e74fd4c679e99b4466c4d4832"
})

var userCommand = process.argv[2];
var secondCommand = process.argv[3];

function aSwitch(){

	switch (userCommand) {

		case 'my-tweets':
			showTweets();
			break;

		case "spotify-song":
			showSpotifySong();
			break;

		case "show-movie":
			showMovie();
			break;

		case "do-what-it-says":
			grabReadme();
			break;

	}
};



function showTweets(){
  //Display last 20 Tweets
  var screenName = {screen_name: 'ianstahl_'};
  client.get('statuses/user_timeline', screenName, function(error, tweets, response){
    if( userCommand === "my-tweets"){
      for(var i = 0; i< tweets.length; i++){
        var date = tweets[i].created_at;
        console.log("@ianstahl_ " + tweets[i].text + " Created At: " + date.substring(0, 19));
        console.log("-----------------------");
        
       
      }

    }else{
      console.log('Error occurred');
    }
  });
}

function showSpotifySong(){

	//variable for search term, test if defined.

	var searchTrack;
	if(secondCommand === undefined){
		searchTrack = "The Sign";
	}else{
		searchTrack = secondCommand;
	}
	//launch spotify search
	spotify.search({type:'track', query:searchTrack}, function(err,data){
	    if(err){
	        console.log('Error occurred: ' + err);
	        return;
	    }else{
	        //tried searching for release year! Spotify doesn't return this!
	  		console.log("Artist: " + data.tracks.items[0].artists[0].name);
	        console.log("Song: " + data.tracks.items[0].name);
	        console.log("Album: " + data.tracks.items[0].album.name);
	        
	    }
	});
};//end showSpotifySong

function showMovie() {

  var movieChoice;
  // Testing if search term is included with: movie-this '<movie name here>'
  if (secondCommand === undefined) {
    movieChoice = "Mr. Nobody";
  } else {
    movieChoice = secondCommand;
  };

  var queryUrl = "http://www.omdbapi.com/?t=" + movieChoice + "&y=&plot=short&apikey=40e9cece";

  console.log(queryUrl);
  // Code used from OMDB Exercise done in class then added the extra output information
  request(queryUrl, function(err, res, body) {

    if (!err && res.statusCode === 200) {

      console.log("Title: " + JSON.parse(body).Title);
      console.log("Release Year: " + JSON.parse(body).Year);
      console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
      console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value); // tomatoRating does not work but this does?
      console.log("Country: " + JSON.parse(body).Country);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Actors: " + JSON.parse(body).Actors);
    }
  });
};

function grabReadme() {
  // Code & Comments for this section used from fs.readFile exercise
  fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
    // Break the string down by comma separation and store the contents into the output array.
    var output = data.split().splice(",");
    // Loop Through the newly created output array
    for (var i = 0; i < output.length; i++) {
      // Print each element (item) of the array/
      console.log(output[i]);
    }
  });
}


aSwitch();