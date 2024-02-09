import React, { useState } from "react";

export default function GifSearch({ onSubmit }) {
  const [query, setQuery] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <p>Enter a Search Term</p>
      <input
        type="text"
        placeholder="Search for gifs"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        style={{ backgroundColor: "lightgreen" }}
        onClick={() => onSubmit(query)}
      >
        Find Gifs
      </button>
    </div>
  );
}
