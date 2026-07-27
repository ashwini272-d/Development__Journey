// Welcome message
console.log("Welcome to Zomato");

// Search box
const input = document.querySelector("input");

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const value = input.value.trim();

        if (value === "") {
            alert("Please enter a restaurant, cuisine or dish.");
        } else {
            alert(`Searching for "${value}"...`);
        }
    }
});

// Navbar active effect
const links = document.querySelectorAll("header a");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});