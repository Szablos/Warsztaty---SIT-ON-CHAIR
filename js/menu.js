// document.addEventListener("DOMContentLoaded", function(event) {
//
//     let list = document.getElementById("dropdown");
//     let link = document.getElementById("drop");
//
//     link.addEventListener("mouseover" ,function(){
//       list.style.display = "flex";
//     });
//     list.addEventListener("mouseleave" ,function(){
//       list.style.display = "none";
//     });
//
// });

$("#drop")
  .on("mouseenter", function() {
  $("#dropdown").show(300);
});
$("#drop")
  .on("mouseleave", function() {
  $("#dropdown").hide(300);
});
