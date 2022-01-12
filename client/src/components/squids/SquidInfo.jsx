import React from "react";

export function SquidInfo({ name, species, victories, specialPower }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Species: {species}</p>
      <p>Number of Victories: {victories}</p>
      <p>Special Power: {specialPower || "N/A"}</p>
    </div>
  );
}
