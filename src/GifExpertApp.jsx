import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  //   const categories = ["One Punch", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState([
    "Snoopy",
    // "Samurai X",
    // "Dragon Ball",
  ]);

  //   const handleAdd = (valor) => {
  //     setCategories([...categories, valor]);
  //   };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Add</button> */}
      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;

          // return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
