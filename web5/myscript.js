let num1 = document.getElementById("n1");
let num2 = document.getElementById("n2");
let result;
let res = document.querySelector("#button");
function multiply(){
	 if((/^[1-9][0-9]*$/).test(num1.value) && (/^[1-9][0-9]*$/).test(num2.value))
	{
		result = num1.value*num2.value;
        document.getElementById("result").innerHTML = result;
	}
	else{
		alert("Введите корректные данные.");
	}
}
window.addEventListener("DOMContentLoaded", function(event)
{
	res.addEventListener("click", multiply);
});
