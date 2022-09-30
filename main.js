var toggle = document.querySelector(".toggle-menu");
var list = document.querySelector(".container ul") ;
var text = document.querySelector(".text")

toggle.onclick = function() {
    list.style.display = "flex";
    list.style.flexDirection= "column";
    list.style.position = " absolute";
    list.style.backgroundColor = ": rgb(0 0 0 /50%);";
    list.style.top = "100%";
    list.style.width = " 100%";
    list.style.left = "0";
    text.style.display = "none";
    

} 

