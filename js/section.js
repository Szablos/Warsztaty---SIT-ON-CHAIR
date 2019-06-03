document.addEventListener("DOMContentLoaded", function(event) {

  let imFirst = document.querySelector(".image__1");
  let imSecond = document.querySelector(".image__2");
  let descBack = document.querySelector(".description_background");
  let desc = document.querySelector(".description");
  let descBackSecond = document.getElementById("second_im");
  let descSecond = document.getElementById("desc_anim");


  imFirst.addEventListener("mouseover" ,function(){
    descBack.style.width = "0%";
    descBack.style.transition = ".1s";

    desc.style.display = "none";

    this.style.transform = "scale(1.1)";
    this.style.transition= "transform .5s";
  });
  imFirst.addEventListener("mouseleave" ,function(){
    descBack.style.width = "100%";

    desc.style.display = "block";

    this.style.transform = "none";
  });

  imSecond.addEventListener("mouseover" ,function(){
    descBackSecond.style.width = "0%";
    descBackSecond.style.transition = ".1s";

    descSecond.style.display = "none";

    this.style.transform = "scale(1.1)";
    this.style.transition= "transform .5s";
  });
  imSecond.addEventListener("mouseleave" ,function(){
    descBackSecond.style.width = "100%";

    descSecond.style.display = "block";

    this.style.transform = "none";
  });

});
