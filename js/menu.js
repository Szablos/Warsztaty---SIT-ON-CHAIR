// document.addEventListener("DOMContentLoaded", function(event) {
//
//     let list = document.getElementById("dropdown2");
//     let link = document.getElementById("drop2");
//
//     link.addEventListener("click" ,function(){
//       list.style.display = "flex";
//     });
//     list.addEventListener("mouseleave" ,function(){
//       list.style.display = "none";
//     });
//
// });
$(() => {
  let btnTog = $('.header__navigation').children('button');
  let tog = $('.toggler');

  $("#drop")
    .on("mouseenter", function() {
    $("#dropdown").show(300);
  });
  $("#drop")
    .on("mouseleave", function() {
    $("#dropdown").hide(300);
  });

  $("#drop2")
    .on("mouseenter", function() {
    $("#dropdown2").show(300);
  });
  $("#drop2")
    .on("mouseleave", function() {
    $("#dropdown2").hide(300);
  });

  btnTog.on("click", function() {
    tog.toggle("slow");
  })


})
