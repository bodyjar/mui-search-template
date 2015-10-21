document.getElementById("search").addEventListener("keyup", function(e){
    if(e.keyCode === 13){
        document.getElementById("container").setAttribute("class", "container focused");
        document.getElementById("results").setAttribute("class", "show");
    }
        }
);

window.addEventListener("scroll", function(){
    if (this.scrollY > 100) {
        document.getElementById("header").setAttribute("class", "widget-desc scrolled");
    }
    else {
        document.getElementById("header").setAttribute("class", "widget-desc");
    }
});