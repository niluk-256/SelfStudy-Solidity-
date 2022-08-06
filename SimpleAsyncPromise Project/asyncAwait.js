// keep in mind async function always always always return a promise🙂
//await always stay until promise to setle then we can get result😵
// const sum = async (a, b) => {
//   return a + b;
// };
// console.log(sum(2, 4));
// sum(2, 4).then((zz) => console.log(zz));
//-------------------------------------
const btnz = document.getElementById("btn4");
btnz.addEventListener("click", () => {
  console.log("clicked");
  getData();
});

const getData = async () => {
  try {
    await addcolor(1000, "g", "green");
    await addcolor(1000, "r", "red");
    await addcolor(1000, "b", "blue");
    await addcolor(1000, "p", "pink");
  } catch (error) {
    console.log(error);
  }
};

function addcolor(time, id, colour) {
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
