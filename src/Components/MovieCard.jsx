import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:cursor-pointer">
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
        <p className="text-gray-600 mb-4">
          {new Date(movie.releaseDate).getFullYear()}
        </p>
        <p className="text-gray-700 mb-4">{movie.summary}</p>
        <Link
          to={`/singlemovie/${movie._id}`}
          className="text-blue-500 hover:text-blue-700"
        >
          More Info
        </Link>
      </div>
    </div>
  );
};
