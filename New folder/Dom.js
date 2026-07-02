//access element
let heading = document.querySelector("h1");
console.log(heading);
//note-selecting the<h1>from DOM

//change content
heading.textContent = "Welcome Ayushi!";

//change style
heading.style.color = "blue";

//add new element
let newPara = document.createElement("p");
newPara.textContent = "New paragraph added";

document.body.appendChild(newPara);

//remove element
heading.remove();