import React, { useState, useEffect } from "react";
const API_KEY = "ddb1bdf6aa91bdf335797853884b0c1d";
const IMG_BASE = "https://image.tmdb.org/t/p/w300";
export default function FilmesList() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`)
      .then((res) => res.json())
      .then((data) => setItems(data.results || []));
  }, []);
  return (
    <div>
      <h2>Filmes Populares</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {items.map((f) => (
          <div key={f.id} style={{ width: 200 }}>
            <img src={IMG_BASE + f.poster_path} alt={f.title} loading="lazy" style={{ width: "100%", borderRadius: 8 }} />
            <div style={{ fontWeight: "bold" }}>{f.title}</div>
            <div style={{ fontSize: 12 }}>{f.release_date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}