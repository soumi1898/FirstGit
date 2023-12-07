// console.log(document.URL);
// document.title=123;
// console.log(document.title);

// var items=document.getElementsByClassName('list-group-item');
// console.log(items[3]);
// //items[2].textContent="Hi";
// items[2].style.backgroundColor='red';

// //but we can't assign backgroundColor to the entire items class at once, we'll have to iterate through it

// for(var i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight='bold';
// }

// //GET ELEMENTS BY TAG NAME

// var list=document.getElementsByTagName('li');
// list[1].style.fontWeight='bold';
// list[1].style.backgroundColor='yellow';
// list[2].style.visibility='hidden';

// //QUERYSELECTOR

// var titles=document.querySelectorAll('.list-group-item');

// titles[1].style.color='green';

// var odd=document.querySelectorAll('li:nth-child(odd)');

// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor='green';
// }


//TRAVERSING THE DOM:
// ------------------------

var itemsList=document.querySelector('#items');

//parentNode:
// console.log(itemsList.parentNode);
// console.log(itemsList.parentNode.parentNode);
// console.log(itemsList.parentNode.parentNode.parentNode);
// itemsList.parentNode.style.backgroundColor='lavender';


//parentElement (same as parentNode):
// console.log(itemsList.parentElement);
// console.log(itemsList.parentElement.parentElement);
// console.log(itemsList.parentElement.parentElement.parentElement);
// itemsList.parentElement.style.backgroundColor='blue';


//childNodes.

//console.log(itemsList.childNodes);// wiill take the line breaks & white spaces too, so we shouldn't use this

// console.log(itemsList.children); //only gives the elements
// console.log(itemsList.children[1]);

//FirstChild
// console.log(itemsList.firstChild);// will give everything
// console.log(itemsList.firstElementChild);// will give the element only
// itemsList.firstElementChild.textContent='Changed!';

//LastChild
// console.log(itemsList.lastChild);// will give everything
//  console.log(itemsList.lastElementChild);// will give the element only
// itemsList.lastElementChild.textContent='Changed!';

//siblings
//nextsibling
// console.log(itemsList.nextSibling);// will give everything
// console.log(itemsList.nextElementSibling);// will give the element only
// itemsList.nextElementSibling.textContent='Changed!';

//previousSibling
// console.log(itemsList.previousSibling);// will give everything
// console.log(itemsList.previousElementSibling);// will give the element only
// itemsList.previousElementSibling.style.color='Blue';

//create an Element

//create a div
var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
//add an attr
newDiv.setAttribute('title','Hello div');
//create text node
var newDivText=document.createTextNode("Hello World!");
//add text to div
newDiv.appendChild(newDivText);

//add a container
var container=document.querySelector('header .container');
var h1=document.querySelector('header.h1');

container.insertBefore(newDiv,h1);

console.log(newDiv);