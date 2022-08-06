//I am not selecting the <h>elements here
const btnx = document.getElementById("btn3");
btnx.addEventListener("click", () => {
  console.log("clicked");
  addcolor(1000, "g", "green")
    .then(() => addcolor(2000, "r", "red"))
    .then(() => addcolor(2000, "b", "blue"))
    .then(() => addcolor(2000, "p", "pink"))
    .catch((err) => console.log(err));
});

function addcolor(time, id, colour) {
  console.log("add color");
  const element = document.getElementById(id);
  // In promise class ,  inside the callback we pass functions resolve and reject they are under the hood 🤔
  return new Promise((resolve, reject) => {
    //if element exists true?
    if (element) {
      setTimeout(() => {
        element.style.color = colour;
        resolve();
      }, time);
    } else {
      reject(`No such element ${id}`);
    }
  });
}
