// const notesContainer= document.querySelector(".notes-container");
// const createBtn= document.querySelector(".btn");
// let notes= document.querySelectorAll(".input-box");

// function updateStorage() {
//     localStorage.setItems("notes", notesContainer.innerHTML);
// }

// function showNotes() {
//     notesContainer.innerHTML= localStorage.getItem("notes");
// }

// createBtn.addEventListener("click", ()=> {
//     let inputBox= document.createElement("p");
//     let img= document.createElement("img");
//     inputBox.className="input-box";
//     inputBox.setAttribute("contenteditable", "true");
//     img.src="images/delete.png";
//     notesContainer.appendChild(inputBox).appendChild(img);
// })

// notesContainer.addEventListener("click", function(e) {
//     if(e.target.tagName === "IMG") {
//         e.target.parentElement.remove();
//         updateStorage();
//     }
//     else if(e.target.tagName=== "P"){
//         notes=document.querySelectorAll("input-box");
//         notes.forEach(nt => {
//             nt.onkeyup = function() {
//                 updateStorage();
//             }
//         })
//     }
// })

// document.addEventListener("keydown", event =>{
//     if(event.key=== "Enter") {
//         document.execCommand("insertLineBreak");
//         event.preventDefault();
//     }
// })

const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML); // Fixed setItems -> setItem
}

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes"); // Load notes, prevent null issues
}
showNotes();

// Load saved notes on page load
document.addEventListener("DOMContentLoaded", showNotes);

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    img.className = "delete-btn"; // Added class for easier deletion handling

    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);

    updateStorage(); // Update localStorage after adding new note

    // Attach event listener to new notes
    inputBox.addEventListener("keyup", updateStorage);
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

// Save note changes when typing
notesContainer.addEventListener("keyup", (e) => {
    if (e,target.tagName==="IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==="P") {
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if(event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

