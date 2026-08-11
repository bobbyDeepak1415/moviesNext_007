import MovieCard from "./components/MovieCard";
import styles from "./page.module.css";

interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const api_key = process.env.API_KEY;

const getMovies = async () => {
  const moviesList = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`,
  );
  const moviesListJSON = await moviesList.json();
  return moviesListJSON;
};

export default async function Home() {
  const moviesList = await getMovies();
  console.log(moviesList);

  return (
    <main className={styles.main}>
      <h1>The Movie Database</h1>
      <div>
        {moviesList.length > 0 &&
          moviesList.map((movie:MovieDetails) => {
            return (
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                title={movie.title}
                description={movie.overview}
                id={movie.id}
              />
            );
          })}
      </div>
    </main>
  );
}
