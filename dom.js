console.log(document.URL);
document.title=123;
console.log(document.title);

var items=document.getElementsByClassName('list-group-item');
console.log(items[3]);
//items[3].textContent="Hi";
items[3].style.backgroundColor='red';

//but we can't assign backgroundColor to the entire items class at once, we'll have to iterate through it

for(var i=0;i<items.length;i++)
{
    items[i].style.backgroundColor='lavender';
}

//GET ELEMENTS BY TAG NAME

var list=document.getElementsByTagName('li');
list[1].style.fontWeight='bold';