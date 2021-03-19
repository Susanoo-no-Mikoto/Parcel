import fs from 'fs';
let string = JSON.parse(fs.readFileSync(__dirname + '/pp.json', 'utf8'));
FindingTheBestPlayers(string);


function FindingTheBestPlayers(){
    string = string.sort(scoreQQ);
    string = string.splice(0,10);
    //RiteRow(string);
    
    document.getElementById("login1").innerHTML = string[0].login;
    document.getElementById("score1").innerHTML = string[0].score;
    document.getElementById("date1").innerHTML = string[0].date;
    
    document.getElementById("login2").innerHTML = string[1].login;
    document.getElementById("score2").innerHTML = string[1].score;
    document.getElementById("date2").innerHTML = string[1].date;

    document.getElementById("login3").innerHTML = string[2].login;
    document.getElementById("score3").innerHTML = string[2].score;
    document.getElementById("date3").innerHTML = string[2].date;

    document.getElementById("login4").innerHTML = string[3].login;
    document.getElementById("score4").innerHTML = string[3].score;
    document.getElementById("date4").innerHTML = string[3].date;

    document.getElementById("login5").innerHTML = string[4].login;
    document.getElementById("score5").innerHTML = string[4].score;
    document.getElementById("date5").innerHTML = string[4].date;

    document.getElementById("login6").innerHTML = string[5].login;
    document.getElementById("score6").innerHTML = string[5].score;
    document.getElementById("date6").innerHTML = string[5].date;

    document.getElementById("login7").innerHTML = string[6].login;
    document.getElementById("score7").innerHTML = string[6].score;
    document.getElementById("date7").innerHTML = string[6].date;

    document.getElementById("login8").innerHTML = string[7].login;
    document.getElementById("score8").innerHTML = string[7].score;
    document.getElementById("date8").innerHTML = string[7].date;

    document.getElementById("login9").innerHTML = string[8].login;
    document.getElementById("score9").innerHTML = string[8].score;
    document.getElementById("date9").innerHTML = string[8].date;

    document.getElementById("login10").innerHTML = string[9].login;
    document.getElementById("score10").innerHTML = string[9].score;
    document.getElementById("date10").innerHTML = string[9].date;   
}  

function RiteRow(){

}
 

function scoreQQ(a,b){
    if(a.score > b.score){
        return -1;
    }
}
