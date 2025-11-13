function findMaxMin() {
  const nums = [
    document.getElementById("num1").value,
    document.getElementById("num2").value,
    document.getElementById("num3").value,
    document.getElementById("num4").value,
    document.getElementById("num5").value
  ].map(Number);

  if (nums.some(isNaN)) {
    document.getElementById("maxResult").textContent = "❌ Please enter all 5 numbers!";
    document.getElementById("minResult").textContent = "";
    return;
  }

  const maxNum = Math.max(...nums);
  const minNum = Math.min(...nums);

  document.getElementById("maxResult").textContent = `Maximum Number: ${maxNum}`;
  document.getElementById("minResult").textContent = `Minimum Number: ${minNum}`;
}
