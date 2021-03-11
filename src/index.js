import fs from 'fs';
const string = fs.readFileSync(__dirname + '/pp.json', 'utf8');
console.log(string);
document.getElementById("d1").innerHTML = string;


