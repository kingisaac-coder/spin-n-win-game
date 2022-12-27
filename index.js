const startV = document.querySelector("button:first-of-type");
const h1 = document.querySelector("h1:first-of-type");
console.log(startV);
startV.onclick = countDown;

function countDown(e) {
  setInterval(function () {
    const oldValue = Number(h1.textContent);
    h1.textContent = oldValue + 2;
  }, 1000);
}
