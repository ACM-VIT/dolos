/* eslint-disable no-await-in-loop */
// string features
const { string$enum } = require("./workers/string.enum");
const { string$country } = require("./workers/string.country");
const { string$lastName } = require("./workers/string.lastName");
const { string$firstName } = require("./workers/string.firstName");

// number features
const { number$inRange } = require("./workers/number");

// grammar for schema
const grammar = {
  types: ["string", "number"],
  specs: {
    string: {
      validKeys: ["type", "category", "possible"],
      validCategory: ["first_name", "last_name", "enum"],
      validFilters: [],
    },
    number: {
      validKeys: ["type", "filter"],
      validCategory: [],
      validFilters: ["min", "max"],
    },
  },
};

// schema parser
class Parser {
  constructor(schema) {
    this.schema = schema;
    this.extendedSchema = undefined;
    this.grammar = grammar;
    this.generateExtendedSchemaStructure();
  }

  generateExtendedSchemaStructure() {
    const { schema } = this;
    const generatedSchema = [];
    for (let i = 0; i < Object.keys(schema).length; i += 1) {
      const entity = {};
      const key = Object.keys(schema)[i];
      const datatype = schema[key].type;

      // check if  a valid datatype shared
      if (!this.grammar.types.includes(datatype)) {
        entity.datatype = "constant";
      } else {
        entity.datatype = datatype;
      }

      // check that only valid keys are present in schema
      const allKeysValid = Object.keys(schema[key]).every((element) => {
        return this.grammar.specs[datatype].validKeys.indexOf(element) !== -1;
      });

      // check if valid category name present
      let categoryExist = false;
      if (schema[key].category) {
        categoryExist = this.grammar.specs[datatype].validCategory.includes(
          schema[key].category
        );
      }

      // check if valid filters are present
      let filtersExist = false;
      if (schema[key].filter) {
        filtersExist = Object.keys(schema[key].filter).every((element) => {
          return (
            this.grammar.specs[datatype].validFilters.indexOf(element) !== -1
          );
        });
      }

      // check if custom list is provided
      let customListExist = false;
      if (schema[key].possible) {
        customListExist = true;
      }

      if (allKeysValid) {
        generatedSchema.push({
          key,
          categoryExist,
          filtersExist,
          customListExist,
          ...schema[key],
        });
      }
    }

    this.generatedSchema = generatedSchema;
  }

  async generateData() {
    const { generatedSchema } = this;
    const resultantObject = {};

    for (let i = 0; i < generatedSchema.length; i += 1) {
      if (generatedSchema[i].type === "string") {
        if (generatedSchema[i].category === "first_name") {
          resultantObject[generatedSchema[i].key] = await string$firstName();
        } else if (generatedSchema[i].category === "last_name") {
          resultantObject[generatedSchema[i].key] = await string$lastName();
        } else if (generatedSchema[i].category === "country") {
          resultantObject[generatedSchema[i].key] = await string$country();
        } else if (generatedSchema[i].category === "enum") {
          resultantObject[generatedSchema[i].key] = await string$enum(
            generatedSchema[i].possible
          );
        }
      } else if (generatedSchema[i].type === "number") {
        // implement all filters here
        if (
          !Number.isNaN(generatedSchema[i].filter.min) &&
          !Number.isNaN(generatedSchema[i].filter.max)
        ) {
          resultantObject[generatedSchema[i].key] = await number$inRange(
            generatedSchema[i].filter.min,
            generatedSchema[i].filter.max
          );
        } else {
          resultantObject[generatedSchema[i].key] = await number$inRange();
        }
      } else {
        resultantObject[generatedSchema[i].key] = "constant";
      }
    }

    // use this to visualize parsed structure like https://i.imgur.com/gRDE0tY.png
    // console.table(generatedSchema);
    return resultantObject;
  }
}

module.exports = Parser;
