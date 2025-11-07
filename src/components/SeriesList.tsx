import React, { useState, useEffect } from "react";
const API_KEY = "ddb1bdf6aa91bdf335797853884b0c1d";
const IMG_BASE = "https://image.tmdb.org/t/p/w300";
export default function SeriesList() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=pt-BR`)
      .then((res) => res.json())
      .then((data) => setItems(data.results || []));
  }, []);
  return (
    <div>
      <h2>Séries Populares</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {items.map((s) => (
          <div key={s.id} style={{ width: 200 }}>
            <img src={IMG_BASE + s.poster_path} alt={s.name} loading="lazy" style={{ width: "100%", borderRadius: 8 }} />
            <div style={{ fontWeight: "bold" }}>{s.name}</div>
            <div style={{ fontSize: 12 }}>{s.first_air_date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}