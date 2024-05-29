import { useState } from "react";
import { Filtering } from "./FilteringModal";
import { useNavigate } from "react-router-dom";

export const NavBar = ({ props }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      navigate(`/search?title=${e.target.value}`);
    }
  };

  return (
    <div>
      <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white font-bold text-xl">Movie Explorer</div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                className="w-full py-2 pl-10 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Search..."
                onKeyDown={handleEnter}
              />
              <svg
                className="w-5 h-5 absolute left-3 top-2.5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.414-1.414l4.386 4.387a1 1 0 01-1.415 1.414l-4.385-4.387zM10 16a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <button
              onClick={openModal}
              className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Filter
            </button>
          </div>
        </div>
      </nav>
      {isModalOpen && (
        <Filtering setReq={props.setReq} closeModal={closeModal} />
      )}
    </div>
  );
};
