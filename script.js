async function generateIMG(){
const response = await fetch("https://dog.ceo/api/breeds/image/random");
const json = await response.json();

console.log(json);
const image = document.getElementById("picture");
image.src = json.message;
const button = document.getElementById("newPic");
button.addEventListener("click", async function () {
  const updated = await fetch("https://dog.ceo/api/breeds/image/random");
  const updatedjson = await updated.json();
  image.src = updatedjson.message;
});
}

generateIMG();