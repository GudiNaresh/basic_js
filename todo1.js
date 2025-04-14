let newItem=document.getElementById("item");
let form=document.getElementById("addForm");
let items=document.getElementById("items");
let filter=document.getElementById("filter");

function newItems(event){
    event.preventDefault()
    // console.log("form submitted",newItem.value)
    
    //converting value into teextnode
    var newTextNode=document.createTextNode(newItem.value)
    //creating li element
    var li=document.createElement('li');
    //adding className
    li.className="list-group-item";
    //adding textnode to li
    li.appendChild(newTextNode)
    //adding li into ul
    items.appendChild(li)
    //create button
    var button=document.createElement("button")
    //adding class
    button.className="btn btn-danger float-end delete";
    //adding textnode to button
    button.appendChild(document.createTextNode('x'));
    //adding button to li
    li.appendChild(button)
    newItem.value=''
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('do u delete the item ?')){
            console.log(e.target.classList.contains('delete'))
            var li=e.target.parentElement;
            items.removeChild(li);
        }
    }
}

filterItem=(e)=>{
    let text=e.target.value.toLowerCase();
    //getting the listitems

    let itemList=items.getElementsByTagName('li')
    Array.from(itemList).forEach((list)=>{
        let itemName=list.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            list.style.display='block'
        }else{
            list.style.display='none'
        }
    })
}
items.addEventListener('click',removeItem)
form.addEventListener('submit',newItems)
filter.addEventListener('keyup',filterItem)