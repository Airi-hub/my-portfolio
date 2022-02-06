


const fortune2 =document.getElementById("fortune");

// 占い//
document.getElementById("omikuji-button").onclick　=function(){
    const random= Math.floor(Math.random()*6)
    if(random ===0) omikuji= "わーい！大吉だよ！おめでとう♫"; 
    if(random ===1) omikuji= "吉だよ！やった〜！";
    if(random ===2) omikuji= "中吉だ！いいかんじ〜♪";
    if(random ===3) omikuji= "惜しい！小吉だ！！";
    if(random ===4) omikuji= "末吉だよ！悪くない！！";
    if(random ===5) omikuji= "残念！凶だ！また明日！";

    fortune2.textContent=omikuji
   
}
