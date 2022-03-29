// // titleの回転

const homeDiscription = document.getElementById("home-discription-name");

const addFadein = function () {
  homeDiscription.classList.add("fadein");
};
window.onload = function () {
  // 一度だけ処理を実行
  setTimeout(addFadein, 2000);
};

// // aboutmeのフェードイン

const aboutMeQuestions = document.querySelectorAll(".aboutme__question");

// questionに接しているanswerを出現させる関数
const drawAnswer = function (order) {
  aboutMeQuestions[order].onmouseover = function () {
    const aboutMeAnswer = aboutMeQuestions[order].nextElementSibling; // HTMLで見て次の要素を取ってくる
    aboutMeAnswer.classList.add("seen"); // 見えるようにする
  };
};

// questionがある個数分だけイベントを作る
for (let i = 0; i < aboutMeQuestions.length; i++) {
  drawAnswer(i);
}

//占い//


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
