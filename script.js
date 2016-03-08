var helloWorld = function() {
	alert("Hello World!");
};
//helloWorld();

var greeting = function() {
	var firstName = prompt("please, first name?");
	var checkFirst = parseInt(firstName);
	var lastName = prompt("and your last name?");
	var checkLast = parseInt(lastName);
 	if(isNaN(checkFirst))
  		{
   			if(isNaN(checkLast)) {
    		 alert("Hello, nice to met you  " + firstName.toUpperCase() + " " +lastName.toUpperCase());
     		}
     		else
   				{alert("Nice effort but incorrect Last name!");}
   		}
   	else
   		{alert("your first name is wrong! I don't trust you");}
   }
//greeting();

var greetPeople = function () {
	var name = prompt('What is your name?');
	if(name=='Alice') //If the name is 'Joe'
		{ alert('Wow, cool - nice to met you Alice!');}
	else if(name=='Bob') //If the name is 'Fred'
		{ alert('Bob is a pretty generic name...');}
	else
		{ alert('I have no opinion on your name.');}
};
//greetPeople();

var sum = function() {
  var number = parseInt(prompt("Number to add up"));
  var count =0;
  for(var i = 1; i < number +1; i++) {
    count += i; 
  }
alert("It added up to  " + count);
document.getElementById("result").innerHTML= count;
};
//sum();

var specialSum = function() {
  var number = parseInt(prompt("Enter Number for special Sum"));
  var count =0;
  for(var i = 1; i < number +1; i++) {
    if((i % 3 !== 0 && i % 5 === 0) || (i % 3 === 0 && i % 5 !== 0))  {
      count += i;
    }
  }
console.log(count);
alert("It added up to  " + count);
document.getElementById("result").innerHTML= count;
};

//specialSum();

// var multiTable = function() {
//  	var n = parseInt(prompt("Multiplication Table of: "));
//   	var counter=1;
//   		for(var i=1; i < 13; i++) {
//     	var result = i * n;
//     console.log(n + " x " + i + " = " + result);
//   }
   
// };
// multiTable();
var multiTable = function() {
  var n = parseInt(prompt("Multiplication Table of: "));
  var result = "";
  for(var i=1; i < 13; i++) {
    result += n + " x " + i + " = " + i*n + "<br/>";
  }
   document.getElementById("result").innerHTML= result;
};
//multiTable();

function leapYear() {
  var year = parseInt(prompt("Next 100 leap Years from: "));
  var num = 100, lpYear = "";
  while(num > 0) {
    if(year % 4 === 0 && year % 100 != 0 || (year % 400 === 0)) {
        lpYear += year + ", ";
        year++;
    	num--; } 
      else 
       		{ year++;}

  }
  document.getElementById("result").innerHTML = lpYear;
  //console.log(lpYear);
}
//leapYear();