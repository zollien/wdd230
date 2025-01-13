
// Display the last modified date
const lastModified = document.lastModified;
document.getElementById("LastModified").textContent = lastModified;

// Display the current year
const currentYear = new Date().getFullYear();
document.getElementById("Year").textContent = currentYear;
