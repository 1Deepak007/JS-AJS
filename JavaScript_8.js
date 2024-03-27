// targetting parent element using child element    (parentNode , parentElement)
let a = document.getElementById('inner').parentElement;
console.log(a)

document.getElementById('inner').style.backgroundColor="red";

let a1 = document.body.parentElement;
console.log(a1)

console.log(document.getElementById("main").parentNode)
console.log(document.getElementById("main").parentElement)

// Children , childNodes
let b1 = document.getElementById("inner").children[1].children[1].style.backgroundColor="lime";
console.log(b1)

let b2 = document.getElementById("inner").children[1].children[3].style.backgroundColor="lime";
console.log(b2)


//====> NOTE : children taget tags only in child node
let b = document.getElementById("outer").children;
console.log(b)

let b3 = document.getElementById("outer").childNodes;
console.log(b3)

//====> NOTE : childNodes target spaces enter comment text ,nodes etc
let b4 = document.getElementById("outer").childNodes[2];
console.log(b4)

// children
let b5 = document.getElementById('inner').children[1];
console.log(b5)

let b6 = document.getElementById('inner').children[1].style.backgroundColor='black';
console.log(b6)

let b7 = document.getElementById('inner').childNodes[1];
console.log(b7)



