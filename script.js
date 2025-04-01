document.addEventListener("DOMContentLoaded", function() {
    // Countdown Timer
    const countdownElement = document.getElementById("countdown");
    const eventDate = new Date("2025-12-25").getTime();
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;
        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            countdownElement.innerText = `Days left: ${days}`;
        } else {
            countdownElement.innerText = "The event is happening today!";
        }
    }
    updateCountdown();
    setInterval(updateCountdown, 86400000);
});
 document.getElementById("RegistrationForm").addEventListener("submit", function (event) {
            let password = document.getElementById("password").value;
            let confirmPassword = document.getElementById("confirm_password").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                event.preventDefault();
            }
        });
   