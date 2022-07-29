const btn=document.querySelector(".add-btn");
const datacolum=document.querySelector(".data-clm");
const result=document.getElementById("programes");

btn.addEventListener("click",function(){
  let data=datacolum.value;
  let li=document.createElement("li");
  li.innerText=data;
  result.appendChild(li);
  li.style.cssText="br";
  result.focus();  


  var button = document.createElement("button");
  button.innerHTML = "Delat";
  
  // 2. Append somewhere
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(button);
  
  // 3. Add event handler
  button.addEventListener ("click", function() {
    
  });


    datacolum.value='';     
});
