import React from "react";

type Image = {
  id: number;
  url: string;
  categorie: string;
  title: string;
};

type Props = {
  images: Image[];
};
const Gallery = ({ images }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-6">
      {images.map((img) => (
        <div key={img.id} className="rounded-md shadow-md overflow-hidden">
          <img src={img.url} alt={img.title} className="w-full h-auto" />
          <p className="text-center font-semibold">{img.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
