import fs from 'fs';
let string = JSON.parse(fs.readFileSync(__dirname + '/pp.json', 'utf8'));
InputOfPlayerData(string);

function InputOfPlayerData() {
    let arr = {login: " ", score: " ", date: " "},
        input = document.getElementById('sub');
    input.addEventListener("click", function(){
        let login = document.forms['form1'].elements['Ввод-логина'].value,
            score = document.forms['form1'].elements['Ввод-очков'].value,
            date = document.forms['form1'].elements['Ввод-даты'].value;
        arr.login = login;
        arr.score = score;
        arr.date = date;
        string.push(arr);
        console.log(string);
        //JSON.parse(string);
        fs.writeFileSync('/pp.json', string, 'utf8');
    })
}
