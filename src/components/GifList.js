import React from "react";

export default function GifList({ gifs }) {
  console.log(gifs);
  return (
    <ul style={{ listStyle: "none" }}>
      {gifs.length > 0 ? (
        gifs.map((gif, index) => {
          return (
            <li key={index}>
              <img src={gif.images.original.url} alt="" />
            </li>
          );
        })
      ) : (
        <p>No Gifs Found</p>
      )}
    </ul>
  );
}
