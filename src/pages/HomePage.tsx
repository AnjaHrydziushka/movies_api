import { useEffect, useState } from "react";

interface DisplayMovies {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export const HomePage = () => {
  const [movies, setMovies] = useState<DisplayMovies[]>([]);

  useEffect(() => {
    getMovies().then((data) => setMovies(data));
  }, []);

  async function getMovies(): Promise<DisplayMovies[]> {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDY2NTgyOWVlMTg3YmNiM2RlNTFlMTljNGQ1MTEwYiIsInN1YiI6IjY2MDE3ZmEzMWIxZjNjMDE3YzljMGIxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TrXcjxIfgLLnZPlZ1IOC6boIvrHkLHzKFjN1RxU2i50",
      },
    };

    const api = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const data = await api.json();
    return data.results;
  }

  if (!movies) return <div>Loading...</div>;

  return (
    <div>
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <img
              style={{ height: "240px", objectFit: "cover" }}
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            />
            <h1>{movie.title}</h1>
            <p>
              Release date: {movie.release_date} | Rating: {movie.vote_average}
            </p>
            <p>{movie.overview}</p>
          </div>
        );
      })}
    </div>
  );
};
