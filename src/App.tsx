import { useEffect } from "react";

function App() {
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDY2NTgyOWVlMTg3YmNiM2RlNTFlMTljNGQ1MTEwYiIsInN1YiI6IjY2MDE3ZmEzMWIxZjNjMDE3YzljMGIxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TrXcjxIfgLLnZPlZ1IOC6boIvrHkLHzKFjN1RxU2i50",
      },
    };

    const api = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    );
    const data = await api.json();
    console.log(data);
  };

  return <div>Hello</div>;
}

export default App;
