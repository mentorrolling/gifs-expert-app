import React from "react";

const GifGridItem = ({ img }) => {
  const { url, title } = img;
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
