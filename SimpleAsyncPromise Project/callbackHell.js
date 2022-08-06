const gEl = document.getElementById("g");
const rEl = document.getElementById("r");
const bEl = document.getElementById("b");
const pEl = document.getElementById("p");
const btn = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

//So I use setTimeout to change the colour of each within a certain period of time
btn.addEventListener("click", () => {
  console.log("clicked");
  setTimeout(() => {
    gEl.style.color = "green";
  }, 1000);
  setTimeout(() => {
    rEl.style.color = "red";
  }, 2000);
  setTimeout(() => {
    bEl.style.color = "blue";
  }, 5000);
  setTimeout(() => {
    pEl.style.color = "pink";
  }, 3000);
});
// So you clearly see pink becomes pink 😁  before blue so you already know it becomes like that because callback blue executes after 5 seconds
//what if you want to run pink after blue(after 5 seconds)
btn2.addEventListener("click", () => {
  console.log("clicked");
  setTimeout(() => {
    gEl.style.color = "green"; // firstly this
    setTimeout(() => {
      rEl.style.color = "red"; // and then this
      setTimeout(() => {
        bEl.style.color = "blue"; // then this
        setTimeout(() => {
          pEl.style.color = "pink"; //then this
        }, 3000);
      }, 5000);
    }, 2000);
  }, 1000);
}); //this is called callback hell
//this looks so anoying and hard to manipulate so we use promises
