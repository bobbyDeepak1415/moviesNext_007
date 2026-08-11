import styles from "./page.module.css";

const api_key = process.env.API_KEY;

const getMovies = async () => {
  const moviesList = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`,
  );
  const moviesListJSON = await moviesList.json();
  return moviesListJSON
};

export default async function Home() {
const moviesList=await getMovies()
console.log(moviesList)


  return(

    <main className={styles.main}>
      <h1>The Movie Database</h1>
      <div>
          
      </div>
    </main>
  )
}
 