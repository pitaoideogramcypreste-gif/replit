import React from "react";
const canais = [
  { nome: "Globo", logo: "/src/assets/globo.png" },
  { nome: "Record", logo: "/src/assets/record.png" },
  { nome: "SBT", logo: "/src/assets/sbt.png" }
];
export default function CanaisList() {
  return (
    <div>
      <h2>Canais de TV</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {canais.map((c, idx) => (
          <div key={c.nome + idx} style={{ width: 180 }}>
            <img src={c.logo} alt={c.nome} style={{ width: "100%", borderRadius: 8, background: "#eee" }} loading="lazy"/>
            <div style={{ fontWeight: "bold", marginTop: 8 }}>{c.nome}</div>
          </div>
        ))}
      </div>
    </div>
  );
}