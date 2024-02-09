import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

export default function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getGifs = (query) => {
    setGifs([]);
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=mGOoAyY0r4fDC1WcbKzHtJnbH2CP4ARn&rating=g`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGifs(data.data.slice(0, 3));
        setLoading(false);
      });
  };

  const handleSearch = (value) => {
    getGifs(value);
  };

  useEffect(() => {
    getGifs("cat");
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {!loading ? <GifList {...{ gifs }} /> : <p>Loading... </p>}
      <GifSearch {...{ onSubmit: handleSearch }} />
    </div>
  );
}
