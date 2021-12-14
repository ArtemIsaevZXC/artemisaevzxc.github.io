console.log("Test");
let num1 = document.getElementById("n1");
let num2 = document.getElementById("n2");
let result0;
let res = document.querySelector("#button");
function multiply(){
	 if((/^[1-9][0-9]*$/).test(num1.value) && (/^[1-9][0-9]*$/).test(num2.value))
	{
		result0 = num1.value*num2.value;
        document.getElementById("result0").innerHTML = result0;
	}
	else{
		alert("Введите корректные данные.");
	}
}
window.addEventListener('DOMContentLoaded', function (event) {
  res.addEventListener("click", multiply);
  const PRICE_1 = 100;
  const PRICE_2 = 150;
  const PRICE_3 = 300;
  const ADDITION = 0; 
  const RADIO_1 = 50;
  const RADIO_2 = 70;
  const RADIO_3 = 90;
  const CHECKBOX = 150;
  let price = PRICE_1;
  let extraPrice = ADDITION;
  let radios = document.getElementById("myradios"); 
  let s = document.getElementsByName("myselect");
  let checks = document.getElementById("mycheck");
  let r = document.querySelectorAll(".pis input[type=radio]");
  let checkbox = document.getElementById("check");
  let result = document.getElementById("result");
  let count = document.getElementsByName("count");
  let calc = document.getElementById("calc");
  s[0].addEventListener("change", function(event) {
    let select = event.target;
    if (select.value === "1") {
      radios.classList.add("d-none");
      checks.classList.add("d-none");
      extraPrice = ADDITION; 
      price = PRICE_1;
    }
    if(select.value === "2") {
	  radios.classList.remove("d-none");
	  checks.classList.add("d-none");
      extraPrice = ADDITION; 
      price = PRICE_2;
    }
    if(select.value === "3"){
      radios.classList.add("d-none");
      checks.classList.remove("d-none");
      extraPrice = ADDITION; 
      price = PRICE_3;
      document.getElementById("check").checked = false;
    }
  });
r.forEach(function (currentRadio) {
    currentRadio.addEventListener("change", function (event) {      
        let r = event.target;
        if (r.value === "r1") {      
            extraPrice = RADIO_1;
            console.log(r.value);
        }
        if (r.value === "r2") {
            extraPrice = RADIO_2;
            console.log(r.value);
        }
        if (r.value === "r3") {
            extraPrice = RADIO_3;
            console.log(r.value);
        }
    });
});
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
      extraPrice = CHECKBOX;
  } else {
      extraPrice = ADDITION; 
  }
});
calc.addEventListener("change", function () {
  let summ = count[0].value;
  let f = summ.match(/^\d+$/);
  if(f !== null){
    result.innerHTML=(price + extraPrice)*parseInt(count[0].value);
  }
  else{
      result.innerHTML = "Введите корректные данные.";
  }
});
});

$(document).ready(function(){
  $('.slider').slick({
    arrows: true,
    dots:true,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll:4,
    speed:1000,
    easing:'ease',
    draggable:true,
    waitForAnimate:true,
    responsive:[
      {
        breakpoint:760,
        settings:{
          slidesToShow:2,
          slidesToScroll:2,
        }
      }
    ]
  });
});
