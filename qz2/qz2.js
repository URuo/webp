function change() { 
    var header = document.getElementById("test1").innerHTML = "CSIE@CGU"; 
     
    var para = document.getElementById("test2").innerHTML = "怎麼那麼棒！！."; 

    var btn = document.createElement("BUTTON"); 
    btn.innerHTML = "Try it";
    btn.setAttribute("id", "btn"); 
    document.body.appendChild(btn);
  } 