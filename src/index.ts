import * as dotenv from "dotenv";

dotenv.config();

(async () => {
  const func = require("./" + process.argv[process.argv.length - 1]).default;

  if (typeof func === "function") {
    await func();
  } else {
    throw new Error("No example found.");
  }
})().catch((error) => console.error(`Error: ${error.message}`));
