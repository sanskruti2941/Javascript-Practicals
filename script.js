function reverseNumber(num) {
  return Number(num.toString().split("").reverse().join(""));
}

function checkPalindrome() {
  const input = document.getElementById("numberInput").value;
  const result = document.getElementById("result");
  const reversedText = document.getElementById("reversed");

  if (isNaN(input) || input.trim() === "") {
    result.textContent = "❌ Please enter a valid number!";
    reversedText.textContent = "";
    return;
  }

  const num = Number(input);
  const reversed = reverseNumber(num);

  if (num === reversed) {
    result.textContent = `✅ ${num} is a Palindrome`;
  } else {
    result.textContent = `❌ ${num} is NOT a Palindrome`;
  }

  reversedText.textContent = `Reversed Number: ${reversed}`;
}
