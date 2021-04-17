// import React, { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";
import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   getGifs(category).then((imagenes) => setImages(imagenes));
  // }, [category]);

  // const getGifs = async () => {
  //   const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
  //     category
  //   )}&limit=10&api_key=yGsEUd2oFkyppcVxZBZ5H2aB7uQLZRIf`;
  //   const resp = await fetch(url);
  //   const { data } = await resp.json();

  //   const gifs = data.map((img) => {
  //     return {
  //       id: img.id,
  //       title: img.title,
  //       url: img.images.downsized_medium.url,
  //     };
  //   });
  //   console.log(gifs);
  //   setImages(gifs);
  // };

  return (
    <div>
      <h3>{category}</h3>
      {/* <ol>
        {images.map((img) => (
          <li key={img.id}>{img.title}</li>
        ))}
      </ol> */}

      {/* <div className="container">
        {images.map((img) => (
          <GifGridItem img={img} key={img.id} />
        ))}
      </div> */}

      {loading && "Cargando..."}
      <div className="container">
        {data.map((img) => (
          <GifGridItem img={img} key={img.id} />
        ))}
      </div>
    </div>
  );
};

export default GifGrid;
