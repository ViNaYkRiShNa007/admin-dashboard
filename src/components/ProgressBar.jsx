import React from "react";

const ProgressBar = () => {
  return (
    <div className="relative size-40">
      <svg
        className="size-full -rotate-90"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-gray-200"
          stroke-width="2"
        ></circle>

        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-blue-600"
          stroke-width="2"
          stroke-dasharray="100"
          stroke-dashoffset="30"
          stroke-linecap="round"
        ></circle>
      </svg>

      <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <span className="text-center text-2xl font-bold text-blue-600">
          70%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
