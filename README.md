<!-- 7dca63a6a7c4d73a66737e20335ab73e -->
<!--
https://api.themoviedb.org/3/movie/popular?api_key=7dca63a6a7c4d73a66737e20335ab73e -->

1.get an api key from the tmdb app and the url for popular movies
2.test the url in the browser
3.store the apikey in a .env file as "API_KEY" created at the root level
4.create a variable called "api_key" and bind it with the api key using "process.env.API_KEY"
5.get rid of the boiler plate code in page.tsx and create an async function for fetching the data

6.pass the url into the fetch method and bind the url with the api_key

7.now in the Home component call the data fetching function with a moviesList variable

8.console.log() the moviesList and check the terminal in vs code if it is working

9.create a components folder and ten create  MoviesCard component

10.declare an interface for MovieCardProps and declare all the variables in it

11.Add an Image tag in the MovieCard component and pass props like src,alt

12.then add description in p tag and title in h1 tag

13.if the moviesList has length then conditionally render the MovieCard component and pass props like key and posterpath.title,description and id

14.
