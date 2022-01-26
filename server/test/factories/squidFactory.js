import { Factory } from "rosie";

import { Squid } from "../../src/models/index.js";

const chooseRandomSpecies = () => {
  const species = [
    "Giant Squid",
    "Colossal Squid",
    "Humboldt Squid",
    "Japanese Flying Squid",
    "Vampire Squid",
  ];
  return species[Math.floor(Math.random() * 5)];
};

Factory.define("Squid", Squid)
  .sequence("name", (i) => `Squid ${i}`)
  .attr("species", chooseRandomSpecies)
  .attr("victories", () => Math.floor(Math.random() * 100).toString());

export { Factory };
