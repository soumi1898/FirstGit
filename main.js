var form=document.getElementById('addForm');
// var itemsList=document.getElementById('items');
// var filter=document.getElementById('filter');
//Form submit event
form.addEventListener('submit',addItem);
//delete event
// itemsList.addEventListener('click',removeItem);
// //Filter event
// filter.addEventListener('keyup',filterItems);

//add item
function addItem(e)
{
    e.preventDefault();

//get input
localStorage.setItem(document.getElementById('username').value);
localStorage.setItem(document.getElementById('email').value);

//console.log(localStorage.setItem(document.getElementById('username').value));
//console.log(localStorage.setItem(document.getElementById('email').value));

}
//create new li element
// var li=document.createElement('li');

// //add class
// li.className='list-group-item';

// //add text node
// li.appendChild(document.createTextNode(newItem));

// //create delete button
// var deleteBtn=document.createElement('button');

// //add class name for button
// deleteBtn.className="btn btn-danger btn-sm float-right delete";

// //append text node to button
// deleteBtn.appendChild(document.createTextNode('X'));

// //append button to li
// li.appendChild(deleteBtn);

// //append li to list
// itemsList.appendChild(li);


// //console.log(li);
// }