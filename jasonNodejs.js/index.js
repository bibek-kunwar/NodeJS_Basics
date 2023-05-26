const fs=require('fs')


const bioData = {
  name: "bibek",
  age: 24,
  Hobbies: "playing cricket"
};
console.log(bioData);

const jsonData = JSON.stringify(bioData);
console.log(jsonData);

const objData = JSON.parse(jsonData);
console.log(objData);
//1 convert to jason ==>  done
// add another file
//read file
//convert back to js file
//console.log json
//2
const json = JSON.stringify(bioData)
fs.writeFile("json1.json",jsonData, (err) => {
  console.log("done")

})


//to read data as API from json1.json file
fs.readFile("json1.json", "utf-8", (err, data) => {
  console.log(data)

})