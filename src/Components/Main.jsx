import { MovieCard } from "./MovieCard";
import { Loader } from "./Loader";
import { useEffect, useState } from "react";
import axios from "axios";

export const Main = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const fetchMovies = async () => {
    try {
      const url = `https://entertainment-app-backend-3huo.onrender.com/extramovies?page=${page}`;
      const response = await axios.get(url); // Use url state variable here
      const data = await response.data.allmovies;
      setMovies((prev) => [...prev, ...data]);
      setLoading(false);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  const handleInfiteScroll = async () => {
    try {
      if (
        document.documentElement.scrollTop + window.innerHeight + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiteScroll);
    return () => window.removeEventListener("scroll", handleInfiteScroll);
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
      {loading && <Loader />}
    </div>
  );
};
