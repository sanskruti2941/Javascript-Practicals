// ---------- LOGIN ----------
function loginUser() {
  const name = document.getElementById("name").value.trim();
  const prn = document.getElementById("prn").value.trim();
  const sem = document.getElementById("semester").value.trim();
  const section = document.getElementById("section").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !prn || !sem || !section || !email) {
    alert("Please fill all fields before continuing!");
    return;
  }

  alert(`Welcome ${name}! Proceed to voting.`);
  document.getElementById("loginSection").classList.add("hidden");
  document.getElementById("votingSection").classList.remove("hidden");
  loadVotingCategories();
}

// ---------- VOTING ----------
const categories = [
  {
    name: "President",
    candidates: ["Aarav Mehta", "Priya Sharma", "Karan Patel", "Sneha Singh", "Vivek Rao"]
  },
  {
    name: "Vice President",
    candidates: ["Ishita Nair", "Aditya Das", "Rohan Sethi", "Meera Kapoor", "Dev Mishra"]
  },
  {
    name: "Cultural Secretary",
    candidates: ["Tanvi Joshi", "Ankit Bansal", "Neha Yadav", "Kushal Jain", "Riya Gupta"]
  },
  {
    name: "Sports Secretary",
    candidates: ["Rahul Verma", "Sanya Menon", "Deepak Jha", "Arjun Malhotra", "Simran Gill"]
  },
  {
    name: "Treasurer",
    candidates: ["Tanya Ahuja", "Harsh Thakur", "Kavya Iyer", "Manish Khanna", "Pooja Nanda"]
  }
];

// Initialize votes
if (!localStorage.getItem("votes")) {
  const initVotes = {};
  categories.forEach(cat => {
    initVotes[cat.name] = cat.candidates.map(c => ({ name: c, votes: 0 }));
  });
  localStorage.setItem("votes", JSON.stringify(initVotes));
}

// Display categories simply (one below another)
function loadVotingCategories() {
  const container = document.getElementById("categories");
  container.innerHTML = "";

  categories.forEach(cat => {
    const div = document.createElement("div");
    div.className = "category";
    div.innerHTML = `<h3>${cat.name}</h3>`;

    cat.candidates.forEach(c => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="${cat.name}" value="${c}"> ${c}`;
      div.appendChild(label);
    });

    container.appendChild(div);
  });
}

function submitVote() {
  const votes = JSON.parse(localStorage.getItem("votes"));
  let allSelected = true;

  categories.forEach(cat => {
    const selected = document.querySelector(`input[name="${cat.name}"]:checked`);
    if (selected) {
      const candidate = votes[cat.name].find(c => c.name === selected.value);
      candidate.votes += 1;
    } else {
      allSelected = false;
    }
  });

  if (!allSelected) {
    alert("Please vote for every category before submitting!");
    return;
  }

  localStorage.setItem("votes", JSON.stringify(votes));
  alert("Your votes have been recorded successfully!");

  document.getElementById("votingSection").classList.add("hidden");
  document.getElementById("resultSection").classList.remove("hidden");
  showResults();
}

// ---------- RESULTS ----------
function showResults() {
  const resultDiv = document.getElementById("results");
  resultDiv.innerHTML = "";
  const votes = JSON.parse(localStorage.getItem("votes"));

  Object.keys(votes).forEach(cat => {
    const catDiv = document.createElement("div");
    catDiv.innerHTML = `<h3>${cat}</h3>`;
    votes[cat].forEach(c => {
      catDiv.innerHTML += `<p>${c.name}: <strong>${c.votes}</strong> votes</p>`;
    });
    resultDiv.appendChild(catDiv);
  });
}

// ---------- RESET ----------
function resetVotes() {
  if (confirm("Are you sure you want to reset all votes?")) {
    localStorage.removeItem("votes");
    location.reload();
  }
}
