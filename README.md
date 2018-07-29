# LIRIBot

A CLI app designed specifically to showcase the support of several API's at once. Capable of essentially gathering data based on user input from 3 diffent API's in a conveninient small application for your own viewing pleasure. Future iterations of this app will provide users with a front-end to mess up, however, for now, I think it's important for simplicities sake to understand how API's work and how one could gather data from differen't API's.

It's is accomplished through 3 simple inputs.

For the Command line, input in this order, with spaces between each command:

1. node
2. liri.js (this is the file in which the logic is held. Without this, the app will not work)
3. *input command* (there are three available:)
   * my-tweets
   * spotify-song
   * show-movie
4. *an optional input command* (this is dependent on the previous command which I will discuss further.


## Twitter

![twitter](https://i.imgur.com/rLvsbAQ.png)

This one is relatively simple. It simply grabs the twitter data of my own account, I don't use twitter that often as apparent from the screenshot, but should give you an idea of what you see.

## Spotify

![spotify](https://i.imgur.com/y9xd822.png)

This one has the optional command of requesting a song name. It will simply gather the first instance of the song you were looking for.
In this case, we used the song NEVER which is a song from a soundtrack

## Movie

![OMDB movie](https://i.imgur.com/9hDLWUU.png)

Similar to Spotify, this one acquires the first instance of whichever movie you chose and displays some basic information of the film. 

