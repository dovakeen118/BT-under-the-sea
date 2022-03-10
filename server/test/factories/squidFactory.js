import { Factory } from "rosie";

import { Squid } from "../../src/models/index.js";
import { randomDate } from "../../src/services/randomDate.js";

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
  .attr("victories", () => Math.floor(Math.random() * 100))
  .attr("birthday", () => randomDate());

export { Factory };
