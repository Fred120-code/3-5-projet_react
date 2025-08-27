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
    <div className="grid lg:grid-cols-3 gap-6 mt-6">
      {images.map((img) => (
        <div key={img.id} className="rounded-md shadow-md overflow-hidden lg:h-full sm:h-[70rem] sm:w-full">
          <img src={img.url} alt={img.title} className="w-full lg:h-auto sm:h-1/2" />
          <p className="text-center font-semibold">{img.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
