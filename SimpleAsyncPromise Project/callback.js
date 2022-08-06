function makeSplit(_value) {
  console.log(_value.split(" "));
}
//---------
function theName(name, callback) {
  let fullname = `${name} Khalifa`;
  callback(fullname);
}

theName("Wiz", makeSplit);
//-------------------------------------------------
//@dev so we can use a anonymous function instead of makeSplit function to get the same result as below

theName("Mia", function (value) {
  console.log(value.split(" "));
});
//also we can use anonymous arrow function as callback to make it fancy :)
theName("Burj", (a) => console.log(a.split(" ")));
