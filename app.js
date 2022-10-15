
// let image = document.getElementById("imgs");

// let displayImg = document.getElementById("displayimg");


// let allImage = displayImg.getElementsByTagName("img");


// indexNumber = 0;

// function display() {
//     image.src = allImage[indexNumber].src

// }

// display()

// function next() {
//     if (indexNumber == allImage.length - 1) {
//         indexNumber = 0;
//     } else {
//         indexNumber++
//     }
//     display()
// }

// function prev() {
//     if (indexNumber == 0) {
//         indexNumber = allImage.length - 1;
//     } else {
//         indexNumber--
//     }
//     display()
// }


let div = document.getElementById("parent");

function edit(x){

    let display = prompt("Enter New Todo")
    updatedPara = x.parentNode.parentNode;
    
    updatedPara.childNodes[0].nodeValue = display;
    }

function del(e) {
 e.parentNode.parentNode.remove()
}

function deleteAll() {
 div.innerHTML = "";

}

let inp = document.getElementById("inp")


function displayOne(){
let p = document.createElement("P");
let text = inp.value;
let txtNode = document.createTextNode(text);
p.appendChild(txtNode);
let parent = document.getElementById("parent");  
parent.appendChild(p);
p.setAttribute('Class', 'Parm')

let Span = document.createElement("SPAN");
Span.setAttribute('Class', 'Marg')
p.appendChild(Span)
console.log(Span);

let button = document.createElement("BUTTON")
let buttonTxt = "Delete";
let TxtNode = document.createTextNode(buttonTxt);
button.appendChild(TxtNode)
Span.appendChild(button);
button.setAttribute('onclick', 'del(this)')
button.setAttribute('Class', 'del')


let Editbutton = document.createElement("BUTTON")
let buttonEdit = "Edit";
let EditTxtNode = document.createTextNode(buttonEdit);
Editbutton.appendChild(EditTxtNode)
Span.appendChild(Editbutton);
Editbutton.setAttribute('onclick', 'edit(this)')

inp.value = "";
}
