import React from "react";

// Définition des props attendues par le composant FiltreMenu
type Props = {
  onCategoryChange: (
    category: "all" | "animaux" | "nature" | "personnes"
  ) => void;
};

// Tableau des catégories pour générer dynamiquement les boutons
const categories = [
  { key: "all", label: "Tous" },
  { key: "animaux", label: "Animaux" },
  { key: "personnes", label: "Personnes" },
  { key: "nature", label: "Nature" },
];

// Composant FiltreMenu qui affiche le menu de filtres
const FiltreMenu = ({ onCategoryChange }: Props) => {
  return (
    <div className="lg:flex lg:flex-row lg:items-center lg:justify-between bg-gray-300 w-full p-2 rounded-md
                        sm:flex-col sm:flex sm:justify-center sm:items-center">
      <div>
        <h1 className="text-xl font-bold">Photo Galerie</h1>
      </div>
      <nav aria-label="Filtrer les catégories">
        <ul className="md:flex md:flex-row gap-6 sm:flex sm:flex-col">
          {categories.map((cat) => (
            <li key={cat.key} className="list-none">
              <button
                className="text-xl font-bold text-white bg-blue-300 p-1 m-1 rounded-xl cursor-pointer transition hover:bg-blue-500 focus:outline focus:ring-2 focus:ring-blue-500"
                onClick={() => onCategoryChange(cat.key as any)}
                aria-label={`Filtrer par ${cat.label}`}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FiltreMenu;
