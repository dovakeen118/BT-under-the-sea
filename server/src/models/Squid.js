const Model = require("./Model");

class Squid extends Model {
  static get tableName() {
    return "squids";
  }

  static get specialPowerOptions() {
    return ["ink", "camouflage", "bioluminescence"];
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "species", "victories"],

      properties: {
        name: { type: "string", minLength: 1 },
        species: { type: "string", minLength: 1 },
        victories: { type: ["string", "integer"], default: 0 },

        specialPower: {
          type: "string",
          enum: this.specialPowerOptions,
        },
      },
    };
  }
}

module.exports = Squid;
