  document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
  
    // Check local storage for dark mode preference
    function updateDarkMode() {
      if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon
        darkModeToggle.style.color = "#fff"; // Ensure visibility
      } else {
        body.classList.remove("dark-mode");
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon
        darkModeToggle.style.color = "#333"; // Darker icon for light mode
      }
    }
  
    // Apply dark mode on load if enabled
    updateDarkMode();
  
    // Toggle Dark Mode
    darkModeToggle.addEventListener("click", () => {
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "disabled");
      } else {
        localStorage.setItem("dark-mode", "enabled");
      }
      updateDarkMode(); // Update UI instantly
    });
  });
