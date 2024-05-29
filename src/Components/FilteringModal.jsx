import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Filtering = ({ closeModal, setReq }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const option = [
    "drama",
    "romance",
    "documentary",
    "adventure",
    "tv-movie",
    "thriller",
    "history",
    "family",
    "animation",
    "war",
    "horror",
    "mystery",
    "action",
    "fantasy",
    "music",
    "stand-up",
    "crime",
    "western",
    "scifi",
    "comedy",
  ];

  const onSubmit = (data) => {
    setReq(data);
    closeModal();
    navigate("/filtered");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg mx-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Filter Options</h2>
          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-gray-700">Genre</label>
            <select
              className="w-full mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              {...register("genres")}
            >
              {option.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700">User Ratings</label>
            <input
              defaultValue={0}
              type="range"
              min="0"
              max="10"
              className="w-full mt-2"
              {...register("rating")}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              // onClick={closeModal}
            >
              Apply Filters
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
