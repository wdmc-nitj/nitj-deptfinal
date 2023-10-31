import React from 'react';

const PopupCard = ({ isOpen, onClose, children, title, description }) => {
  return (
    <div
      className={`fixed inset-0 z-50 overflow-auto flex items-center justify-center ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      )}
      <div className="relative bg-white max-w-md mx-auto rounded shadow-lg z-50">
        <div className="p-8">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button
              onClick={onClose}
              className="top-0 right-0 m-2 hover:bg-gray-200 rounded-full cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="overflow-y-hidden"> {/* Adjust the max-height as needed */}
            <p>{description}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
