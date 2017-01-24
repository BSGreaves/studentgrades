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


var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var fGrade = [];
var dGrade = [];
var cGrade = [];
var bGrade = [];
var aGrade = [];
var holder = [];

for (i = 0; i < scores.length; i++) {
	if (61 > scores[i] > 49) {
		fGrade.push(scores[i]);
	} else {
		holder.push(scores[i]);
	}
}

console.log(fGrade);
console.log(holder);