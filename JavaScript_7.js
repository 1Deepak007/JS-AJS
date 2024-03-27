//--> onclick event
function abs() {
    document.getElementById('header').style.background = 'purple';
}
document.getElementById('header').onclick=abs;


//--> addEventListener
function func(){
    alert('event addEventListener')
}
document.getElementById('header').addEventListener("click",func)


// function musentr(){
//     alert('mouse enter event')
// }
// x = document.querySelectorAll('h1')[1].addEventListener('mouseenter',musentr)

document.querySelectorAll('h1')[1].addEventListener('mouseenter',function(){
    alert('mouse enter event')
})


//--> removeEventListener
document.querySelectorAll('h1')[2].addEventListener('mouseleave',function(){
    alert('Mouse leave event')
})

document.getElementById('header').querySelectorAll('h1')[0];

//--> adding / removing class 
function abc(){
    // document.getElementById('header').classList.add('xyz','efg');  
    document.getElementById('header').classList.remove('xyz')
    var a = document.getElementById('header').classList;
    console.log(a)
}
abc();


//--> length    (rtrn no. of classes there in html element)
let x = document.getElementById('header').classList.length;
console.log(x)


let c = document.getElementsByClassName('tgl');
console.log(c)


//--> toggle    (add on 1st nd rmv on 2nd clg)
function togle(){
    // document.getElementByClassName("tglCls").toggle("nwcls");

    document.getElementById("tglId").classList.toggle("nwcls");
    
    let a1 = document.getElementById("tglId").classList.item;
    console.log(a1)
}
