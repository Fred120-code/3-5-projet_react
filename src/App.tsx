import { useEffect, useState } from "react";
import Gallery from "../components/Gallery"
import FilterMenu from "../components/FiltreMenu"

const App = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      url: "https://picsum.photos/id/237/300/200",
      categorie: "animaux",
      title: "Chien mignon",
    },
    {
      id: 2,
      url: "https://picsum.photos/id/1025/300/200",
      categorie: "animaux",
      title: "Panda curieux",
    },
    {
      id: 3,
      url: "https://picsum.photos/id/1018/300/200",
      categorie: "nature",
      title: "Montagne",
    },
    {
      id: 4,
      url: "https://picsum.photos/id/1015/300/200",
      categorie: "nature",
      title: "Forêt",
    },
    {
      id: 1,
      url: "https://picsum.photos/id/237/300/200",
      categorie: "animaux",
      title: "Chien mignon",
    },
    {
      id: 2,
      url: "https://picsum.photos/id/1025/300/200",
      categorie: "animaux",
      title: "Panda curieux",
    },
    {
      id: 3,
      url: "https://picsum.photos/id/1018/300/200",
      categorie: "nature",
      title: "Montagne",
    },
    {
      id: 4,
      url: "https://picsum.photos/id/1015/300/200",
      categorie: "nature",
      title: "Forêt",
    },
    {
      id: 5,
      url: "https://picsum.photos/id/1016/300/200",
      categorie: "nature",
      title: "Lac",
    },
    {
      id: 6,
      url: "https://picsum.photos/id/1005/300/200",
      categorie: "personnes",
      title: "Portrait homme",
    },
    {
      id: 7,
      url: "https://picsum.photos/id/1009/300/200",
      categorie: "personnes",
      title: "Portrait femme",
    },
    {
      id: 8,
      url: "https://picsum.photos/id/1011/300/200",
      categorie: "personnes",
      title: "Photographe",
    },
    {
      id: 9,
      url: "https://picsum.photos/id/1012/300/200",
      categorie: "animaux",
      title: "Oiseau",
    },
    {
      id: 10,
      url: "https://picsum.photos/id/1024/300/200",
      categorie: "animaux",
      title: "Chien blanc",
    },
    {
      id: 5,
      url: "https://picsum.photos/id/1016/300/200",
      categorie: "nature",
      title: "Lac",
    },
    {
      id: 6,
      url: "https://picsum.photos/id/1005/300/200",
      categorie: "personnes",
      title: "Portrait homme",
    },
    {
      id: 7,
      url: "https://picsum.photos/id/1009/300/200",
      categorie: "personnes",
      title: "Portrait femme",
    },
    {
      id: 8,
      url: "https://picsum.photos/id/1011/300/200",
      categorie: "personnes",
      title: "Photographe",
    },
    {
      id: 9,
      url: "https://picsum.photos/id/1012/300/200",
      categorie: "animaux",
      title: "Oiseau",
    },
    {
      id: 10,
      url: "https://picsum.photos/id/1024/300/200",
      categorie: "animaux",
      title: "Chien blanc",
    },
  ]);

  const [selectCategory, setSelectCategory] = useState<"all"|"animaux" | "nature" | "personnes">("all");

  //filtrage d'image en fonction de la cathegorie
  const filteredImages =  selectCategory === "all" ? images :
    images.filter((img) => img.categorie === selectCategory)
e
  useEffect(()=>{

  })

  return <div className="flex flex-col items-center justify-center m-5 p-10">
    <FilterMenu onCategoryChange={setSelectCategory}/>
    <Gallery images={filteredImages}/>
  </div>;
};

export default App;
