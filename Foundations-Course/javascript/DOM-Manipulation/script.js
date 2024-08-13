const container = document.querySelector("#container");

const content = document.createElement("div");  // create div
content.classList.add("content");  // add class "content" to the div
content.textContent = "This is the glorious text content!";  // add text to the div

container.appendChild(content);  // add content as a child to the container node

// add red paragraph
const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

container.appendChild(paragraph);

// add blue h3
const blueH3 = document.createElement("h3");
container.appendChild(blueH3);

blueH3.textContent = "I'm a blue h3";
blueH3.style.color = "blue";

// add div with a black border and pink background color. 
const pinkDiv = document.createElement("div");
container.appendChild(pinkDiv);
pinkDiv.style.backgroundColor = "pink";
pinkDiv.style.border = "2px solid black";

// add content to the pinkDiv
// h1
const pinkDivH1 = document.createElement("h1");
pinkDiv.appendChild(pinkDivH1);
pinkDivH1.textContent = "I'm in a div";
// p
const pinkDivP = document.createElement("p");
pinkDiv.appendChild(pinkDivP);
pinkDivP.textContent = "ME TOO!";

// hello world button
// // method 2
// const btn = document.querySelector("#btn");
// // btn.onclick = () => alert("Hello World");  // arrow function that shows alert
// // method 3
// // btn.addEventListener("click", () => {
// //     alert("Hello00 World!");
// // });

// btn.addEventListener("click", function (e) {
//     e.target.style.backgroundColor = "blue";
//     // alert("Hello, World");
//     console.log(e);
// });

// buttons
const buttons = document.querySelectorAll("button");
let i = 0;
let colors = ["red", "yellow", "blue"];

// iterate through the buttons and add functionality
buttons.forEach((button) => {

    // add event listenter
    button.addEventListener("click", () => {
        if (button.id == "btn-1") {
            button.style.backgroundColor = "red";
        } else if (button.id == "btn-2") {
            button.style.backgroundColor = "yellow";
        } else if (button.id == "btn-3") {
            button.style.backgroundColor = "blue";
        }
    });
});

// 
