import axios from "axios";
import { Loader } from "./Components/Loader";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const SingleMovie = () => {
  const { _id } = useParams();
  const [movie, setMovie] = useState(null);
  console.log(movie);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://entertainment-app-backend-3huo.onrender.com/extramovies/${_id}`
        );
        const data = response.data;
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, [_id]);

  if (!movie) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-[500px]  object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          <p className="text-gray-600 mb-4">
            {new Date(movie.releaseDate).toDateString()}
          </p>
          <p className="text-gray-700 mb-4">{movie.summary}</p>
          <div className="flex items-center space-x-2">
            {movie.genres.map((genre) => (
              <span
                key={genre}
                className="px-3 py-1 bg-blue-500 text-white rounded-full"
              >
                {genre}
              </span>
            ))}
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold">Cast</h2>
            <ul className="list-disc list-inside">
              {movie.cast.map((actor) => (
                <li key={actor} className="text-gray-700">
                  {actor}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <Link
              href={movie.trailerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Watch Trailer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
