// Function to check the current time
function checkTime() {
  const now = new Date();
  const currentHour = now.getHours();

  // If the time is between 11 PM (23) and 7 AM (7), show a message or redirect
  if (currentHour >= 23 || currentHour < 7) {
    document.body.innerHTML =
      "<p>Our website is currently closed for the day. We will be back online at 7AM. Thank you and good evening.</p>";
  }
}

// Call checkTime when the page is loaded
window.onload = checkTime;
