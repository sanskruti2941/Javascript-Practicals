function calculateGrade() {
  const subjects = [
    parseInt(document.getElementById("math").value),
    parseInt(document.getElementById("science").value),
    parseInt(document.getElementById("english").value),
    parseInt(document.getElementById("computer").value),
    parseInt(document.getElementById("history").value)
  ];

  // Check if any subject is invalid
  if (subjects.some(m => isNaN(m) || m < 0 || m > 100)) {
    alert("❌ Please enter valid marks between 0 and 100 for all subjects!");
    return;
  }

  const total = subjects.reduce((a, b) => a + b, 0);
  const average = total / subjects.length;

  let grade = "";
  if (average >= 90) grade = "A+";
  else if (average >= 80) grade = "A";
  else if (average >= 70) grade = "B";
  else if (average >= 60) grade = "C";
  else if (average >= 50) grade = "D";
  else grade = "F (Fail)";

  document.getElementById("total").textContent = `Total Marks: ${total} / 500`;
  document.getElementById("average").textContent = `Average Marks: ${average.toFixed(2)}`;
  document.getElementById("grade").textContent = `Final Grade: ${grade}`;
  
  // Color coding
  if (grade === "A+" || grade === "A") {
    document.getElementById("grade").style.color = "green";
  } else if (grade === "B") {
    document.getElementById("grade").style.color = "blue";
  } else if (grade === "C" || grade === "D") {
    document.getElementById("grade").style.color = "orange";
  } else {
    document.getElementById("grade").style.color = "red";
  }
}
