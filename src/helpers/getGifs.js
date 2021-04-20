import axios from "axios";

const apiKey = "yGsEUd2oFkyppcVxZBZ5H2aB7uQLZRIf";

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=${apiKey}`;

  const resp = await axios(url);
  const { data } = resp.data;

  // const resp = await fetch(url);
  // const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};
