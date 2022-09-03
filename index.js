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
    alert.innerHTML = 'item Added successfully !';
  }
})