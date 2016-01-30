var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var gradeList = document.getElementById("grades");
var gradeTotals = document.getElementById("totals");
var high = document.getElementById("high");
var low = document.getElementById("low");

var a = [];
var b = [];
var c = [];
var d = [];
var f = [];

var orderedScores;


for (var i = 0; i < scores.length; i++) {
    var grade = scores[i];
    switch (true) {
      case (grade>=50 && grade<=60):
        gradeList.innerHTML += "<li>" + "Student " + i + ": got an F. --" + scores[i] + "</li>";
        a.push("Student " + i);
        break;
      case (grade>=61 && grade<=70):
        gradeList.innerHTML += "<li>" + "Student " + i + ": got a D. --" + scores[i] + "</li>";
        b.push("Student " + i);
        break;
      case (grade>=71 && grade<=80):
        gradeList.innerHTML += "<li>" + "Student " + i + ": got a C. --" + scores[i] + "</li>";
        c.push("Student " + i);
        break;
      case (grade>=81 && grade<=90):
        gradeList.innerHTML += "<li>" + "Student " + i + ": got a B. --" + scores[i] + "</li>"
        d.push("Student " + i);
        break;
      case (grade>=91 && grade<=100):
        gradeList.innerHTML += "<li>" + "Student " + i + ": got an A. --" + scores[i] + "</li>"
        f.push("Student " + i);
        break;
      default:
        gradeList.innerHTML += "<li>" +  "Student " + i + ": did not get a qualifying grade. --" + scores[i] + " </li>";
    }
}


gradeTotals.innerHTML += ("<li>" + "A's: " + a.length + "</li>");
gradeTotals.innerHTML += ("<li>" + "B's: " + b.length + "</li>");
gradeTotals.innerHTML += ("<li>" + "C's: " + c.length + "</li>");
gradeTotals.innerHTML += ("<li>" + "D's: " + d.length + "</li>");
gradeTotals.innerHTML += ("<li>" + "F's: " + f.length + "</li>");

orderedScores = scores.sort();
console.log("orderedScores", orderedScores)

low.innerHTML += orderedScores[0];
high.innerHTML += orderedScores[orderedScores.length-1];



