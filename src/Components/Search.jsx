import axios from "axios";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { Loader } from "./Loader";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Search = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const navigate = useNavigate();

  const fetchMovies = async (reset = false) => {
    try {
      const url = `https://entertainment-app-backend-3huo.onrender.com/extramovies/search?title=${title}&page=${page}`;
      const response = await axios.get(url); // Use url state variable here
      const data = await response.data;
      setMovies((prev) => [...prev, ...data]);
      setLoading(false);
      if (title === "") {
        navigate("/");
      }
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    setPage(1);
    setMovies([]);
    fetchMovies(true); // Reset movies when props.req changes
  }, [title]);

  useEffect(() => {
    if (page > 1) {
      fetchMovies();
      setLoading(true);
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
