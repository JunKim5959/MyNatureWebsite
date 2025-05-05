document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    let selectedRating = 0;

    stars.forEach((star, index) => {
        star.addEventListener("click", function () {
            selectedRating = index + 1;
            updateStars(selectedRating);
        });

        star.addEventListener("click", function () {
            highlightStars(index + 1);
        });

        star.addEventListener("click", function () {
            highlightStars(selectedRating);
        });
    });

    function updateStars(rating) {
        stars.forEach((s, i) => {
            s.style.color = i < rating ? "gold" : "black";
            s.classList.toggle("selected", i < rating);
        });
    }

    function highlightStars(rating) {
        stars.forEach((s, i) => {
            s.style.color = i < rating ? "gold" : "black";
        });
    }

    const darkModeButton = document.getElementById("darkModeToggle");
    if (darkModeButton) {
        darkModeButton.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }

    const images = ["forest.jpg", "ocean.jpg", "mountains.jpg"];
    let currentIndex = 0;
    const sliderImage = document.getElementById("sliderImage");

    if (sliderImage) {
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            sliderImage.src = images[currentIndex];
        }, 3000);
    }

    const dropBtn = document.querySelector(".dropbtn");
    const dropContent = document.getElementById("dropdownMenu");

    if (dropBtn && dropContent) {
        dropBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            dropContent.classList.toggle("show");
        });

        window.addEventListener("click", (e) => {
            if (!e.target.matches('.dropbtn')) {
                dropContent.classList.remove('show');
            }
        });

        const dropdownLinks = dropContent.querySelectorAll("a");
        dropdownLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const imageName = link.getAttribute("data-image") || link.textContent.toLowerCase() + ".jpg";
                if (sliderImage) {
                    sliderImage.src = imageName;
                }
            });
        });
    }

    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        const timeString = `${hours}:${minutes}:${seconds}`;
        const clock = document.getElementById("clock");
        if (clock) {
            clock.textContent = timeString;
        }
    }

    setInterval(updateClock, 1000);
    updateClock();
});

function submitFeedback() {
    let feedbackText = document.getElementById("feedback").value.trim();
    if (feedbackText === "") {
        alert("Please enter some feedback before submitting.");
        return;
    }
    let wordCount = feedbackText.split(/\s+/).length;
    alert(`Thank you for your ${wordCount} words of feedback!`);
}
