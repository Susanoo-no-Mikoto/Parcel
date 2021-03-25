import fs from 'fs';
PlayerSearch();
InputOfPlayerData();
FindingTheBestPlayers();

function PlayerSearch() {
    let string = JSON.parse(fs.readFileSync(__dirname + '/pp.json', 'utf8'));
    let input = document.getElementById('sub1');
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

function InputOfPlayerData(){
    let string = JSON.parse(fs.readFileSync(__dirname + '/pp.json', 'utf8'));
    let input = document.getElementById('sub2');
    //console.log(string);
    input.addEventListener("click", function(){
        let inplogin = document.forms['form2'].elements['Ввод-логина'].value,
            inpscore = document.forms['form2'].elements['Ввод-очков'].value,
            date = new Date(),
            dd = String(date.getDate()).padStart(2, '0'),
            mm = String(date.getMonth()).padStart(2, '0'),
            yyyy = date.getFullYear();
        date = dd + '.' + mm + '.' + yyyy; 
        let inpData = [{login: '', score: '', date: ''}];
        inpData.login = inplogin;
        inpData.score = inpscore;
        inpData.date = date;
        string.push(inpData);
        string.sort(scoreQQ);
        string = string.splice(0,10);
        console.log(string);

        let login = [],
            score = [],
            date1 = [],
            rank = [];

        for (let i = 0; i < string.length; i++) {
            login.push(string[i].login);
            score.push(string[i].score);
            date1.push(string[i].date);
            rank.push(i+1);
        }

        document.getElementById("login").innerHTML = login.join('<br />');
        document.getElementById("score").innerHTML = score.join('<br />');
        document.getElementById("date").innerHTML = date1.join('<br />');
        document.getElementById("rank").innerHTML = rank.join('<br />');

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
    if (a.score == b.score) {
        if (a.date < b.date) {
            return 1 
        }
        if (a.date == b.date) {
            return 0;
        }
        if (a.date > b.date) {
            return -1;
        }
        return 0;   
    }
    if (a.score < b.score) {
        return 1;
    }
}
