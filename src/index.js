import fs from 'fs';
InputOfPlayerData();
FindingTheBestPlayers();

function InputOfPlayerData() {
    let string = JSON.parse(fs.readFileSync(__dirname + '/pp.json', 'utf8'));
    let input = document.getElementById('sub');
    input.addEventListener("click", function(){
        let inplogin = document.forms['form1'].elements['Ввод-логина'].value;
        string.sort(scoreQQ);
        let result = [];
        for (let i = 0; i < string.length; i++) {
            if (inplogin == string[i].login) {
                let rank = i+1;
                result.push('Логин: ' + string[i].login + ' ' + 'Очки: ' + string[i].score + ' ' + 'Дата: ' + string[i].date + ' ' + 'Место: ' + rank);
            }   
        }
        //console.log(result);
        alert(result);
    }) 
}

function FindingTheBestPlayers(){
    let string = JSON.parse(fs.readFileSync(__dirname + '/pp.json', 'utf8'));
    string.sort(scoreQQ);
    string = string.splice(0,10);
    let login = [],
        score = [],
        date = [],
        rank = [];

    for (let i = 0; i < string.length; i++) {
        login.push(string[i].login);
        score.push(string[i].score);
        date.push(string[i].date);
        rank.push(i+1);
    }

    document.getElementById("login").innerHTML = login.join('<br />');
    document.getElementById("score").innerHTML = score.join('<br />');
    document.getElementById("date").innerHTML = date.join('<br />');
    document.getElementById("rank").innerHTML = rank.join('<br />');   
} 


function scoreQQ(a,b) {
    a.score = Number(a.score);
    b.score = Number(b.score);
    if(a.score > b.score){
        return -1;
    }
}
