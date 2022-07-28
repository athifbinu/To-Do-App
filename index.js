const btn=document.querySelector(".add-btn");
const datacolum=document.querySelector(".data-clm");
const result=document.getElementById("programes");

btn.addEventListener("click",function(){
  let data=datacolum.value;
  let li=document.createElement("li");
  li.innerText=data;
  result.appendChild(li);
  result.focus();

    datacolum.value='';     
});
