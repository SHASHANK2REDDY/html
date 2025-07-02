const seatAvailable = document.getElementById("seatAvailable");
const ageAbove50 = document.getElementById("ageAbove50");
const hasAadhar = document.getElementById("hasAadhar");
const checkButton = document.getElementById("checkStatus");
const passengerStatus = document.getElementById("status");
alert("run")
checkButton.addEventListener("click", function () {
  let isSeatAvailable = seatAvailable.checked;
  let isAgeAbove50 = ageAbove50.checked;
  let hasAadharCard = hasAadhar.checked;
  console.log(isSeatAvailable, isAgeAbove50, hasAadharCard);
let feedback;
if (isSeatAvailable){
	console.log("the seat is available sir/madam");
	feedback="the seat is available sir/madam";
	if (isAgeAbove50){
		console.log("your age is above 50 so you are eligible");
		feedback=feedback+"your age is above 50 so you are eligible";
		if (hasAadharCard){
			console.log("you're wellcome sir you have a sit you are eligible for travelling")
			feedback=feedback+"you're wellcome sir you have a sit you are eligible for travelling";
			let confirms=confirm("do you want to travell in this bus");
			if(confirms)
			{
				alert("welcome sir/madam");
			}
		}
		else{
			console.log("you have no aadhar so you are not allowed");
			feedback="you have no aadhar so you are not allowed";
		}
	}
	else{
		console.log("you'r age in not matched you are young so sorry");
		feedback=feedback+"you'r age in not matched you are young so sorry";
	}
}
else{
	console.log("the seat is not available so sorry");
	feedback=feedback+"the seat is not available so sorry";
}
passengerStatus.textContent=feedback;
console.log("++++++++++++++++++++++++++++++++++++++++++++____")
});
		