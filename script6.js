function analyzeText() {
  const text = document.getElementById("textInput").value.trim();
  const output = document.getElementById("output");

  if (text === "") {
    output.innerHTML = "<p style='color:red;'>Please enter a paragraph first.</p>";
    return;
  }

  // 1️⃣ Using match() with regex to extract words
  const words = text.match(/\b\w+\b/g);

  // 2️⃣ Using split() to split paragraph into words
  const splitWords = text.split(" ");

  // 3️⃣ Using replace() to replace 'is' with 'was'
  const replacedText = text.replace(/is/gi, "was");

  // 4️⃣ Using indexOf() to find the position of the word "the"
  const position = text.indexOf("the");

  // 5️⃣ Reversing the paragraph (by words)
  const reversedParagraph = splitWords.reverse().join(" ");

  // Displaying all results
  output.innerHTML = `
    <h3>Results:</h3>
    <p><b>Original Paragraph:</b><br>${text}</p>
    <p><b>Extracted Words (match + regex):</b><br>${words.join(", ")}</p>
    <p><b>After Replace ('is' → 'was'):</b><br>${replacedText}</p>
    <p><b>First Occurrence of 'the':</b> ${position >= 0 ? position : "Not found"}</p>
    <p><b>Reversed Paragraph:</b><br>${reversedParagraph}</p>
  `;
}
