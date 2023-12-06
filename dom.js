console.log(document.URL);
document.title=123;
console.log(document.title);

var items=document.getElementsByClassName('list-group-item');
console.log(items[3]);
//items[2].textContent="Hi";
items[2].style.backgroundColor='red';

//but we can't assign backgroundColor to the entire items class at once, we'll have to iterate through it

for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight='bold';
}

//GET ELEMENTS BY TAG NAME

var list=document.getElementsByTagName('li');
list[1].style.fontWeight='bold';
list[1].style.backgroundColor='yellow';
list[2].style.visibility='hidden';

//QUERYSELECTOR

var titles=document.querySelectorAll('.list-group-item');

titles[1].style.color='green';

var odd=document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}


