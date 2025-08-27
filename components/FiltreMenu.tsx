import React from "react";

const FiltreMenu = () => {
  return (
    <div className="flex items-center justify-between bg-gray-300 w-full p-2 rounded-md">
      <div>
        <h1 className="text-xl font-bold">Photo Gallery</h1>
      </div>
      <div>
        <ul className="flex gap-6">
          <button className="text-xl font-bold text-white bg-blue-300 p-1 m-1 rounded-xl cursor-pointer">
            All
          </button>
          <button className="text-xl font-bold text-white bg-blue-300 p-1 m-1 rounded-xl cursor-pointer">
            Animaux
          </button>
          <button className="text-xl font-bold text-white bg-blue-300 p-1 m-1 rounded-xl cursor-pointer">
            Personnes
          </button>
          <button className="text-xl font-bold text-white bg-blue-300 p-1 m-1 rounded-xl cursor-pointer">
            Nature
          </button>
        </ul>
      </div>
    </div>
  );
};

export default FiltreMenu;
