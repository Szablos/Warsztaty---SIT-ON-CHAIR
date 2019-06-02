document.addEventListener("DOMContentLoaded", function(event) {

    let list = document.getElementById("dropdown");
    let link = document.getElementById("drop");

    link.addEventListener("mouseover" ,function(){
      list.style.display = "flex";
    });
    list.addEventListener("mouseleave" ,function(){
      list.style.display = "none";
    });

});
