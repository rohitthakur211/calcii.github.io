// X is what % of Y?
document.getElementById("calc1-submit")
.addEventListener("click", function (e) {
  e.preventDefault();
  const numX = document.getElementById("calc1-num-x").value;
  const numY = document.getElementById("calc1-num-y").value;
  const percentage = (numX / numY) * 100;
  document.getElementById("calc1-solution").value = percentage;
});
// What is X% of Y?
document.getElementById("calc2-submit")
.addEventListener("click", function (e) {
  e.preventDefault();
  const numX = document.getElementById("calc2-num-x").value;
  const numY = document.getElementById("calc2-num-y").value;
  const percentage = (numX / 100) * numY;
  document.getElementById("calc2-solution").value = percentage;
});
// What is the percentage increase or decrease?
document.getElementById("calc3-submit")
.addEventListener("click", function (e) {
  e.preventDefault();
  const numX = document.getElementById("calc3-num-x").value;
  const numY = document.getElementById("calc3-num-y").value;
  const percentage = (numY - numX) / numX * 100;
  document.getElementById("calc3-solution").value = percentage;
});