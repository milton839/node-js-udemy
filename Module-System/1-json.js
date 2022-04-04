const fs = require('fs');

// read the json data
const data = fs.readFileSync("1-json.json");

const stringData = data.toString();
const parseData = JSON.parse(stringData);

parseData.name="Azizul";
parseData.age=30;

const changeData = JSON.stringify(parseData);
fs.writeFileSync("1-json.json", changeData)
console.log(changeData);