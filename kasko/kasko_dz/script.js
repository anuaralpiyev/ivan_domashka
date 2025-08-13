document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll(".toggle_btn");

    toggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const answer = button.parentElement.nextElementSibling;
            const isOpen = answer.style.display === "block";

            answer.style.display = isOpen ? "none" : "block";
            button.textContent = isOpen ? "+" : "-";
        });
    });
});
