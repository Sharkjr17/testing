if (typeof(Storage) !== "undefined") {
    // Store
localStorage.setItem("lastname", "Smith");

// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  } else {
    document.getElementById("result").innerHTML = "no";
  }
document.getElementById("result").innerHTML = "woah";

