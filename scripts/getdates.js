// Display the last modified date
const Year = new Date().getFullYear();
document.getElementById("Year").textContent = Year;

const lastModified = document.lastModified;
document.getElementById("LastModified").textContent = lastModified;

// Display the current year