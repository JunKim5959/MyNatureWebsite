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