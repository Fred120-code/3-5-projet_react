import React from "react";

type Props = {
  onCategoryChange: (
    category: "all" | "animaux" | "nature" | "personnes"
  ) => void;
};

const FiltreMenu = ({ onCategoryChange }: Props) => {
  return (
    <div className="lg:flex lg:flex-row lg:items-center lg:justify-between bg-gray-300 w-full p-2 rounded-md
                        sm:flex-col sm:flex sm:justify-center sm:items-center">
      <div>
        <h1 className="text-xl font-bold">Photo Galerie</h1>
      </div>
      <div>
        <ul className="md:flex md:flex-row gap-6 sm:flex sm:flex-col">
          <button
            className="text-xl font-bold text-white bg-blue-300 p-1 m-1 rounded-xl cursor-pointer"
            onClick={() => onCategoryChange("all")}
          >
            Tous
          </button>
          <button
            className="text-xl font-bold text-white bg-blue-300 p-1 m-1 rounded-xl cursor-pointer"
            onClick={() => onCategoryChange("animaux")}
          >
            Animaux
          </button>
          <button
            className="text-xl font-bold text-white bg-blue-300 p-1 m-1 rounded-xl cursor-pointer"
            onClick={() => onCategoryChange("personnes")}
          >
            Personnes
          </button>
          <button
            className="text-xl font-bold text-white bg-blue-300 p-1 m-1 rounded-xl cursor-pointer"
            onClick={() => onCategoryChange("nature")}
          >
            Nature
          </button>
        </ul>
      </div>
    </div>
  );
};

export default FiltreMenu;
