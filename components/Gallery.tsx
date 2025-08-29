import React from "react";

// Définition du type Image pour typer les données de la galerie
type Image = {
  id: number;
  url: string;
  categorie: string;
  title: string;
};

type Props = {
  images: Image[];
};

// Composant ImageCard pour afficher une image individuelle
const ImageCard = ({ img }: { img: Image }) => (
  <div className="rounded-md shadow-md overflow-hidden lg:h-full sm:h-auto sm:w-full">
    <img
      src={img.url}
      alt={img.title}
      className="w-full lg:h-auto sm:h-1/2"
      title={img.title}
    />
    <p className="text-center font-semibold">{img.title}</p>
  </div>
);

// Composant principal Gallery qui affiche la liste des images filtrées
const Gallery = ({ images }: Props) => {
  // Affichage d'un message si aucune image n'est disponible
  if (images.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-6">
        Aucune image à afficher pour cette catégorie.
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-6 mt-6">
      {images.map((img) => (
        <ImageCard key={img.id} img={img} />
      ))}
    </div>
  );
};

export default Gallery;
