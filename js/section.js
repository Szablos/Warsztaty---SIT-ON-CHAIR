document.addEventListener("DOMContentLoaded", function(event) {

  let imFirst = document.querySelector(".image__1");
  let imSecond = document.querySelector(".image__2");
  let descBack = document.querySelector(".description_background");
  let descBackSecond = document.getElementById("second_im");


  imFirst.addEventListener("mouseover" ,function(){
    descBack.style.display = "none";
    this.style.transform = "scale(1.1)";
    this.style.transition= "transform .5s";
  });
  imFirst.addEventListener("mouseleave" ,function(){
    descBack.style.display = "block";
    this.style.transform = "none";
  });

  imSecond.addEventListener("mouseover" ,function(){
    descBackSecond.style.display = "none";
    this.style.transform = "scale(1.1)";
    this.style.transition= "transform .5s";
  });
  imSecond.addEventListener("mouseleave" ,function(){
    descBackSecond.style.display = "block";
    this.style.transform = "none";
  });

});
