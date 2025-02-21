const facts = [
    "Porsche was founded in 1931 in Stuttgart, Germany.",
    "The Porsche 911 has been in production since 1964.",
    "Porsche\'s first electric car, the Taycan, was released in 2019.",
    "The Porsche logo was inspired by the Stuttgart coat of arms.",
    "Every Porsche engine is still hand-assembled in Stuttgart.",
    "Porsche holds the record for the most overall wins at the 24 Hours of Le Mans.",
    "The Porsche Cayenne helped save the company from financial troubles in the early 2000s.",
    "Porsche originally designed tanks for the German military before making sports cars.",
    "The first Porsche ever made, the Porsche 356, was built in a small garage in Austria.",
    "Porsche has its own private test track at the Weissach Development Center in Germany.",
    "The Porsche Taycan was the first production car with an 800V system, allowing ultra-fast charging."
];
let factIndex = 0;

document.getElementById("infoButton").addEventListener("click", function() {
    const factText = document.getElementById("factText");
    factText.innerText = facts[factIndex];
    factText.style.display = "block";
    // increment and wrap to length
    factIndex = (factIndex + 1) % facts.length;
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }
    const name = document.getElementById("name").value.trim(), 
        message = document.getElementById("message").value.trim();
    // do stuff with data
    console.log("form data: ", { name, email, message });
    // clear form
    document.getElementById("contactForm").reset();
    // message was sent
    alert("Thank you for contacting Porsche! We will get back to you soon.");
});
