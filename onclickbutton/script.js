let isText1 = true; 

document.getElementById("textchanger").onclick = function() {
  const textDiv = document.getElementById("texrdiv");
  
  if (isText1) {
    textDiv.innerHTML = "Hello World, I am Kshitij";
  } else {
   
    textDiv.innerHTML = "Hello World!!!";
  }
  
  isText1 = !isText1;
}

