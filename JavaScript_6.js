let element;
element = document;
console.log(element)

// get all elements of document
console.log(document.all)

// target an element
element6 = document.all[6]         // script
element9 = document.all[9]         // style


console.log(document.head)         // return head tag n its elements

console.log(document.title)

console.log(document.body)

console.log(document.links)         // show all anchor tags
console.log(document.links[1])      // return 1st anchor tag

console.log(document.images)        // target all images
console.log(document.images[0])     // target all images[index number here]

console.log(document.forms)         // target all forms
console.log(document.forms)         // target all forms[index of form here]

console.log(document.doctype)       //  document type

console.log(document.URL)           // return url of page

console.log(document.domain)        // return domain name 



//====================> main targetting methods <=====================

// Note : below code runs in chrome terminal type them there


//1) Targetting element by "id"
document.getElementById('header') 

//2) Targetting element by "className"
document.getElementsByClassName('list')  
    // there are 2 classes with classname   // targetting [0]th element of class list
document.getElementsByClassName('list')[0]

//3) Targetting element by "tagName"
document.getElementsByTagName('img')
document.getElementsByTagName('ul')
document.getElementsByTagName('ul')[2]


/* Getting elements from DOM (we can :
Get Attribute's  value using methods -> getAttribute, getAttributeNode, Attributes  
Get Html using methods -> innerHTML  
Get text using methods -> innerText  )    */


// innerText   /  innerHTML
document.getElementById('header').innerText      ///op => 'Javascript Is Awesome'

document.getElementById('content').innerText     // op => gives us all the content written inside that Id
document.getElementById('content').innerHTML     // op => gives is the tags along with contect are present in them

document.getElementById('head1').innerHTML       // op =>  'Document Object Model'


//==================> Get values from DOM
document.getElementById('content').getAttribute('style');           // op -> 'width:78% ; display:inline-block'
document.getElementById('content').getAttributeNode('style');       // op -> style = "width:78% ; display:inline-block"
document.getElementById('content').getAttributeNode('style').value; // op -> "width:78% ; display:inline-block"
document.getElementById('content').attributes;                      // op -> NamedNodeMap {0: id, 1: style, id: id, style: style, length: 2}
document.getElementById('content').attributes[1].value;             // op -> 'width:78% ; display:inline-block'

//==================> Set values of DOM
// document.getElementById('header').innerText = 'WoW';        // setting innertext
document.getElementById('header').innerHTML = '<h2>WoW</h2>';  // setting innerhtml


  // setting innertext
//-->setting attribute
document.getElementById('stxt').getAttribute("class");          // op -> abc
document.getElementById('stxt').setAttribute("class","xyz")     // op -> xyz   // setting attribute
                                        // attribute,value    
// we can change style or other attibutes also

//-->removing attribute
document.getElementById('stxt').removeAttribute('style')        // all style gets removed












//=======================> QUERY SELECTOR <===========================
// querySelector     --> document.querySelector(CSS Selector)              "Select first selector from DOM"
// querySelectorAll  --> document.querySelectorAll(CSS Selector)           "Select all selectors "

document.querySelector("#header").innerHTML = "<h2>WoW</h2>"

element = document.querySelector('#header').getAttribute('class')
console.log(element)

element = document.querySelector('.list');                 // return only first element with className 'list'
console.log(element)

element = document.getElementsByClassName('list')          // return all elements with className 'list'
console.log(element)

console.log(element[1])

console.log(element[1].innerHTML)

element = document.querySelectorAll('ul')[0].innerHTML
console.log(element)

element = document.querySelectorAll('#header h2')
console.log(element)

// Set style
element = document.querySelector('#content').style.backgroundColor='tan';
console.log(element)

// Set classname
ele = document.querySelector('#Ctxt').className="IhaveSetthisClass";
console.log(document.querySelector('#Ctxt').className);

// ClassList
elem = document.querySelector('#Ctxt').h3.innerHTML;
console.log(elem);


