/*  This file will use JSON Schema Faker and the Schema defined in mockDataSchema
    to generate mock data ser and write it to a file.
    This script generates mock data for local development.
    This way you don't have to point to an actual API,
    but you can enjoy realistic, but randomized data,
    and rapid page loads due to local, static data.
 */

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from "./mockDataSchema";
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));   //JSON.stringify converts JSF random dataset to a JSON file.

fs.writeFile("./src/api/db.json", json, function (err) { //Node's built in fs to be able to write our DB file.
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated."));
  }
});
