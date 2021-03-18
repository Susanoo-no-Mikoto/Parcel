import fs from 'fs';
let string = JSON.parse(fs.readFileSync(__dirname + '/pp.json', 'utf8'));
SearchForPlayersByLogin(string);

function SearchForPlayersByLogin() {
    let input = document.querySelector('text-to-find');
    
    
}

