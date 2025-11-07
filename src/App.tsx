import React from "react";
import FilmesList from "./components/FilmesList";
import SeriesList from "./components/SeriesList";
import CanaisList from "./components/CanaisList";

function App() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 32, marginBottom: 24, textAlign: "center" }}>
        Filmes, Séries e Canais Reais
      </h1>
      <FilmesList />
      <SeriesList />
      <CanaisList />
    </div>
  );
}

export default App;