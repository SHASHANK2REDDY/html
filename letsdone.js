/*alert("it is an error website");
console.log('i am a good boy');
//single quotes is used when there is no apostrophe
console.log("i have master's degree");
//double quotes will overcome the apostrophe
console.log(`i am  the "best"`);
console.log(`i am
learning
javascript
from
suresh techs youtube channel`);
let prompt_check=prompt("enter your age");
if(prompt_check>=18)
{
	console.log("you are eligible");
}
else{
	console.log("you are not eligible");
}
const confirm_prac=confirm("are you eligible free statements");
console.log(confirm_prac);
let a=10;
console.log(a);
a=23;
console.log(a);
//console.log(b);
let b;
console.log(b);
d=14;
console.log(d);
d=10;
console.log(d);
console.log(c);
d=24;
var c=34;
console.log(e)
b=34;
console.log(b);
console.log(this===window);
console.log(this);
console.log("animal");console.log("movie")
console.log("chudala")
let e=14;
function ram(title,price,noofpages,author){
	console.log("title:",title);
	console.log("price:",price);
	console.log("noofpages:",noofpages);
	console.log("author:",author);
}
ram("clanguage",240,349,"dennis richi")
laxman=ram("python",32,435,"guidovan rosum")
class library{
	constructor(title,price,noofpages,author)
	{
		this.title=title;
		this.coast=price;
		this.pages=noofpages;
		this.author=author;
	}
	adding(gst){
		this.gst=gst;
		this.totalprice=this.coast+gst;
	}
}
const check=new library("javascript",150,247,"brendlich");
check.adding(18)
console.log(check.gst);
 a=10.999
 console.log(a.toFixed(2));
 console.log(String(100));
 console.log(String("suresh"));
 console.log(String("100"));
 console.log(String(""));
 console.log(String(true));
 console.log(String());
 console.log(String(null));
 console.log(String(500n));
 console.log(String(Symbol("id")));
 console.log(Boolean(100));
 a=10;
 console.log(a++);
 let num1=num2=num3=num4=num5=10;
 //num1=num2=num3=num4=num5=10;
 console.log(num3);
 console.log(num1,num2,num3,num4,num5);
 console.log(num1+num2+num3+num4+num5);
 let b=40;
 b+=1;
 console.log(b);
a=(10,20,30);
console.log(a);
let b=25;
let c=16;
let res=(b,c);
console.log(b,c,res);
let resu=(++b,--c);
console.log(a,b,resu);
l="10";
m="20";
n="30";
console.log(+l+ +m+ +n);
const heights=prompt("enter height in meters");
let height=heights/100
const weight=prompt("enter weight");
let bml=weight/(height**2);
console.log(bml);
/*if(bml>=18.5 && bml<=25)
{
	console.log("normal");
}
else if(bml<18.5)
{
	console.log("thin");
}
else{
	console.log("fat");
	alert("you are fat so do some work at free time");
}
console.log("you bml is checked");
const interest=prompt("are you interested");
if(interest.toLowerCase()=="yes")
{
	console.log("bad");
}
else{
	console.log("good");
}
console.log(bml<18.5?("thin"):(bml>=18.5 && bml<=25)?("normal"):("fat"));
console.log(null==undefined);
console.log(null!=undefined);
console.log(null<undefined);
console.log(NaN===NaN);
console.log(NaN==0);
console.log(NaN>=0);
console.log(null>=0);
console.log(null==0);
console.log(null==null);
console.log(null>=null);
console.log(null<null);
message("suresh",21)
message("ramesh",22)
function message(name,age){
	console.log(`${name} age is: ${age}`);
	console.log(`Thankyou for andwering`);
	console.log("please subscribe to our channel");
}
message("rajesh",23)
const outside="i am the outside of functions";
function outerloop(){
	let out="i am the outerloop";
	console.log("i have lot of doubts");
	 return function innerloop(){
		let inner="i am the innerloop";
		console.log(inner);
		console.log(out);
		console.log(outside);
	 }
}
outerloop()
const objcreating={
	name:"shashank reddy",
	age:24,
	property:{
		first:"5cr",
		current:"17cr",
		future:"47cr",
	},
	family(){
		console.log(`my name is ${this.name}`);
		console.log("future my family members will increase");
	},
	enemies:"yes",
}
console.log(objcreating);
objcreating.family();
const objcreatings=new Object();
objcreatings.name="ramu";
objcreatings.age=22;
objcreatings.gender="m";
console.log(objcreatings);
delete objcreatings.names;
const obj3=Object.assign({},objcreating,objcreatings);
console.log(obj3);
console.log(Object.assign(obj3,{rank:23},{1:"you"},objcreating));
obj3.property.first="4cr";
Struturedclone(objcreating);
console.log(objcreating.property.first);
const dhoni={
	Name:"Mahendra Sing Dhoni",
	Age:42,
	ishecaptaincool:"yes",
	teamsheplayed:["india","csk"],
	statistics:{
		matches:538,
		runs:17266,
		centuries:16,
	},
	retire(){
		console.log(`${this.Name} is reteire in internation cricket ${dhoni.teamsheplayed[1]}`);
	},
};
dhoni.retire()
const library={
	name:"Suresh Library",
	books:[],
	totalbooks:0,
	addbook(title){
		library.books.push(title);
		this.totalbooks=this.totalbooks+1;
	},
}
library.addbook("python 11 hours")
library.addbook("c programming 18 hours")
library.addbook("havascript 25 hours")
console.log(library.books);
console.log(library.totalbooks);
const sitaram=new Object();
sitaram.name="shashank reddy",
sitaram.age=22,
sitaram.gender="m",
sitaram.year=2003,
console.log(sitaram);
console.log(Object.keys(sitaram));
console.log(Object.values(sitaram));
console.log(Object.entries(sitaram));
console.log(Object.getOwnPropertyDescriptors(sitaram));
console.log(Object.getOwnPropertyDescriptor(sitaram,"year"));
Object.defineProperty(sitaram,"year",{value:2003,enumerable:false});
console.log(Object.keys(sitaram));
//Object.defineProperties(sitaram,year:{value:2003,enumerable:false},gender:{value:"m",writable:false},age:{value:22,configurable:false}});
//console.log(Object.keys(sitaram)); 
const arr=["Animal","golimar","sye"];
arr.push("yatra");
console.log(arr[3]);
console.log(arr.shift());//"animal"
console.log(arr);//golimar,sye,yatra
console.log(arr.unshift(23));
console.log(arr);//23,
console.log(arr.pop());//sye*/
/*let id1=Symbol("1");
let id2=Symbol("2");
const obj1={
	[id1]:"21bf1a33c8",
	[id2]:"21bf1a33c4",
}
console.log(obj1);
const obj2=Object.create(obj1);
console.log(obj2);
obj2[id1]="21bf1a33b5";
console.log(obj1[id1]);
const obj1={
	name:"shashank reddy",
	age:24,
	property:{
		first:"5cr",
		current:"17cr",
		future:"47cr",
	},
};
const obj2={
	fname:"nagaraja reddy",
}
Object.setPrototypeOf(obj2,obj1);
//console.log(Object.getPrototypeOf(obj2));
//console.log(obj2);
for(let key in obj2)
{
	if(obj2.hasOwnProperty(key))
	{
	    console.log(key,":",obj2[key]);
	}
}
console.log("property" in obj2);*/
function property(num1,num2,num3,...remaining)
{
	let sum=0;
	let reply=remaining.length;
	for(let i=0;i<reply;i++)
	{
		sum=sum+remaining[i];
	}
	console.log(remaining);
	console.log( num1+num2+num3+sum);
}
property(10,20,30,40,50,60,70,80,90)






