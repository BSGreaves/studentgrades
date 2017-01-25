// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A

// Use console.log to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?

//Declaring arrays
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var fail = []
var fGrade = [];
var dGrade = [];
var cGrade = [];
var bGrade = [];
var aGrade = [];
var holder = [];

//Run through the grades and push them into counter arrays
for (i = 0; i < scores.length; i++) {
	if (61 > scores[i] && scores[i] > 49) {
		fGrade.push(scores[i]);
	} else if (71 > scores[i] && scores[i] > 59) {
		dGrade.push(scores[i]);
	} else if (81 > scores[i] && scores[i] > 69) {
		cGrade.push(scores[i]);
	} else if (91 > scores[i] && scores[i] > 79) {
		bGrade.push(scores[i]);
	} else if (100 >= scores[i] && scores[i] > 89) {
		aGrade.push(scores[i]);
	} else {
		fail.push(scores[i]);
	}
}

//Print the number of grades in each category
console.log("Number of F's: ", fGrade.length);
console.log("Number of D's: ", dGrade.length);
console.log("Number of C's: ", cGrade.length);
console.log("Number of B's: ", bGrade.length);
console.log("Number of A's: ", aGrade.length);
console.log("Number of failing grades: ", fail.length);

//Find the lowest grade
var lowestGrade = scores;
for (i = 0; i < lowestGrade.length; i++) {
	lowestGrade.sort(function(a, b){return a-b});
}
console.log("The lowest grade is ", lowestGrade[0]);

//Find the highest grade
var highestGrade = scores;
for (i = 0; i < highestGrade.length; i++) {
	highestGrade.sort(function(a, b){return b-a});
}
console.log("The highest grade is ", highestGrade[0]);
