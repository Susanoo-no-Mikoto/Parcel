let play = document.getElementById('sub3');
var arrscores = [];
play.addEventListener("click", function (){
    let inplogin = document.forms['form3'].elements['Логин'].value;
    let timerId = setInterval(() => game(), 3000);
    setTimeout(() => { clearInterval(timerId)}, 31000);
})



function game(){
    let cube1 = getRandomInRange(1,6),
        cube2 = getRandomInRange(1,6),
        summ = cube1 + cube2,
        rate = document.forms['form3'].elements['Ставка'].value,
        score = 0;
    if (rate == summ) {
        score = score + 20;
    }
    if (rate !== summ) {
        if (summ > rate){
            score = score - (summ - rate);
        }
        if (summ < rate) {
            score = score - (rate - summ);
        } 
    }
    arrscores.push(score);
    let arrsumm = arrscores.reduce(function(a,b){
        return (a+b);
    })
    document.getElementById("scoregame").innerHTML = arrsumm;
    document.getElementById("cube1").innerHTML = cube1;
    document.getElementById("cube2").innerHTML = cube2;
    document.getElementById("summ").innerHTML = summ;
}


function getRandomInRange(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}