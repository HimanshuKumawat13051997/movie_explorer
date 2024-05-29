import axios from "axios";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { MovieCard } from "./MovieCard";
import { useNavigate } from "react-router-dom";

export const Filtered = ({ props }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const fetchMovies = async (reset = false) => {
    try {
      const url = `https://entertainment-app-backend-3huo.onrender.com/extramovies/info?page=${page}`;
      const response = await axios.post(url, props.req); // Use url state variable here
      const data = await response.data.allmovies;
      setMovies((prev) => [...prev, ...data]);
      setLoading(false);
    } catch (error) {
      navigate("/");
    }
  };

  useEffect(() => {
    setPage(1);
    setMovies([]);
    fetchMovies(true); // Reset movies when props.req changes
  }, [props.req]);

  useEffect(() => {
    if (page > 1) {
      fetchMovies();
    }
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
