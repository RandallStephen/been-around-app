// const { overwrite, getName } = require("country-list");
const countryList = require("country-list");
countryList.overwrite([
  { code: "XK", name: "Kosovo" },
  { code: "XS", name: "Somaliland" }
]);

// console.log(this.refs.map.$mapObject.mapData.paths);  // how can I access this?
