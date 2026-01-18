//alert("Oops you hit   today")
// let bat=document.getElementById('choose3');
// console.log(bat);

//const { createElement } = require("react");

// bat.addEventListener("click",()=>{
//     document.getElementById("ques").style.backgroundImage="url(Gemini_Generated_Image_3i2oku3i2oku3i2o.png)";
//     const btn =document.createElement("button")
//     const ntext=document.createElement("p")
//     document.getElementById("ques").appendChild(btn);
//     document.getElementById("ques").appendChild(ntext);
//    btn.innerText="click for more";
//    ntext.innerText="AWWW.. YOU KNOW ME";
//    btn.style.backgroundColor="black";
//    btn.style.color="white";
//    btn.style.padding="10px";
//    btn.id = "nextBtn";
// });
// let next =document.querySelector("#nextBtn");
// next.addEventListener("click",()=>{
//     window.location.href="contact.html"
// })
// wrong 


//just selecting the objects and giving commands
let bat = document.getElementById('choose3');

bat.addEventListener("click", () => {
    const ques = document.getElementById("ques");

    ques.style.backgroundImage ="url(Gemini_Generated_Image_3i2oku3i2oku3i2o.png)";

    const btn = document.createElement("button");
    const ntext = document.createElement("p");

    btn.innerText = "click for your cake";
    ntext.innerText = "AWWW.. YOU KNOW ME";

    btn.style.backgroundColor = "black";
    btn.style.color = "white";
    btn.style.padding = "10px";
    document.body.style.backgroundColor="black"
    document.getElementById("indmain").style.backgroundImage="url(Gemini_Generated_Image_wwjzzpwwjzzpwwjz.png)"
    document.getElementById("indmain").id="imagemain"
    //  ADD EVENT HERE
    btn.addEventListener("click", () => {
        window.location.href = "about.html";
    });

    ques.appendChild(btn);
    ques.appendChild(ntext);
});

// let smoke=document.getElementById("button");
// smoke.addEventListener("click",()=>{
//     document.getElementsByClassName("flames").remove();
// }) //wrong

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");

  button.addEventListener("click", () => {
    document.querySelectorAll(".flames").forEach(flame => {
      flame.remove();
    });
  });
});
