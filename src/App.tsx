import { useEffect, useState } from "react";
import Gallery from "../components/Gallery";
import FiltreMenu from "../components/FiltreMenu"; // Correction du nom d'import

type Image = {
  id: number;
  url: string;
  categorie: string;
  title: string;
};

const App = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const initialImages: Image[] = [
      {
        id: 1,
        url: "https://i.pinimg.com/736x/c3/0b/f5/c30bf56d02e797e5a3731bbb537b57e6.jpg",
        categorie: "animaux",
        title: "Chien mignon",
      },
      {
        id: 2,
        url: "https://i.pinimg.com/736x/35/99/24/3599249b2d3b016c0643ee974063c949.jpg",
        categorie: "animaux",
        title: "Panda curieux",
      },
      {
        id: 3,
        url: "https://i.pinimg.com/736x/cd/de/7e/cdde7ea7703fcddfaaf824b5b38592a3.jpg",
        categorie: "nature",
        title: "Montagne",
      },
      {
        id: 4,
        url: "https://i.pinimg.com/1200x/da/c8/13/dac813bb7a2b1ce8ecfa6e95fbc00614.jpg",
        categorie: "nature",
        title: "Forêt",
      },
      {
        id: 5,
        url: "https://i.pinimg.com/736x/c3/d3/09/c3d309c67a377b57811aef7f88513647.jpg",
        categorie: "nature",
        title: "Lac",
      },
      {
        id: 6,
        url: "https://i.pinimg.com/1200x/0d/25/69/0d2569fa15d54f392b77c48adfc46d68.jpg",
        categorie: "personnes",
        title: "Portrait homme",
      },
      {
        id: 7,
        url: "https://i.pinimg.com/1200x/5e/ed/f5/5eedf507c5f5dc998665eac69ecf9049.jpg",
        categorie: "personnes",
        title: "Portrait femme",
      },
      {
        id: 8,
        url: "https://i.pinimg.com/736x/83/7c/2c/837c2c9b69860e8c98fb99b5fefa7da6.jpg",
        categorie: "personnes",
        title: "Photographe",
      },
      {
        id: 9,
        url: "https://i.pinimg.com/736x/de/f1/f3/def1f3321c7340363d5e60657d4aef59.jpg",
        categorie: "animaux",
        title: "Oiseau",
      },
      {
        id: 10,
        url: "https://i.pinimg.com/1200x/d1/94/56/d194568ef4a4a5b7540ffbc9a69ecaef.jpg",
        categorie: "animaux",
        title: "Chien blanc",
      },
    ];

    setImages(initialImages);
  }, []);

  const [selectCategory, setSelectCategory] = useState<
    "all" | "animaux" | "nature" | "personnes"
  >("all");

  // Filtrage d'image en fonction de la catégorie sélectionnée
  const filteredImages =
    selectCategory === "all"
      ? images
      : images.filter((img) => img.categorie === selectCategory);

  return (
    <div className="flex flex-col items-center justify-center m-5 p-10">
      {/* Menu de filtre des catégories */}
      <FiltreMenu onCategoryChange={setSelectCategory} />
      {/* Galerie d'images filtrée */}
      <Gallery images={filteredImages} />
    </div>
  );
};

export default App;
