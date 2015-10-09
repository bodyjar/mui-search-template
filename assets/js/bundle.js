document.getElementById("search").addEventListener("keyup", function(e){
    if(e.keyCode === 13){
        document.getElementById("container").setAttribute("class", "container focused");
        document.getElementById("results").style.opacity="1";
    }
        }
);