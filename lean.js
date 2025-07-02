let check=prompt("are you ready");
if(check.toLowerCase()=="yes")
{
	console.log("carryon");
}
else{
	console.log("lets stop");
}
let dhoni={
	name:"mahi",
	age:42,
	ishecool:"yes",
	teamsheplayed:"Chennai",
	statistic:{
		matches:250,
		runs:23453,
		centuries:200,
	},
	retire(){
		console.log(`${this.name} who played matches at age ${this.age} is ${this.statistic.matches}`);
	},
};
dhoni.livein="hyderabad";
const play=dhoni;
console.log(play);
dhoni.retire()
console.log(dhoni.statistic.runs);
delete dhoni.statistic;
console.log(Object.getOwnPropertyDescriptor(dhoni,"name"))