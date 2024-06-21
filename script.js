let Hhand = document.querySelector(".Hhand");
let Mhand = document.querySelector(".Mhand");
let Shand = document.querySelector(".Shand");

setInterval(() => {
  let D = new Date();
  let H = D.getHours();
  let M = D.getMinutes();
  let S = D.getSeconds();

  let Hr = 30 * H + M / 2;
  let Mr = 6 * M;
  let Sr = 6 * S;

  Hhand.style.transform = `rotate(${Hr}deg)`;
  Mhand.style.transform = `rotate(${Mr}deg)`;
  Shand.style.transform = `rotate(${Sr}deg)`;
}, 1000);
