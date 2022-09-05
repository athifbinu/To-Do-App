
const form=document.getElementById("shop-form");
const ItemName=document.getElementById("item-name");
const ItemQty=document.getElementById("item-qty");
const list=document.getElementById("list");
const alert=document.getElementById("alert")

form.addEventListener('submit',function(event){
  event.preventDefault();
  if(ItemName.value !='' && ItemQty.value !=''){
    const tr=document.createElement('tr');
    const rand=Math.floor((Math.random()*1000)+1);
    tr.setAttribute('id',`${rand}`)
    
  
    tr.innerHTML=`
      <td>${rand}</td>
      <td>${ItemName.value}</td>
      <td>${ItemQty.value}</td>
      <td><button class="btn btn-danger">deleat</td>
    `
    list.appendChild(tr);
    ItemName.value = '';        //to remove the screen display on the working tyme
    ItemQty.value = '';
    alert.classList.add('alert-success');
    alert.innerHTML = 'Task add Successfuly !';
    setTimeout(function(){
      alert.classList.remove('alert-success');
      alert.innerHTML='';
    },3000)

  }else {
    alert.classList.add('alert-warning');
    alert.innerHTML="Pleas Add Task";
    setTimeout(() => {
       alert.classList.remove("alert-warning");
       alert.innerHTML='';
    }, timeout);
  }
})

// Deleat

list.addEventListener('click',function(event){
  if(event.target.classList.contains('btn')){
    event.target.parentElement.parentElement.remove();
  }
})
