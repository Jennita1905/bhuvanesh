document.addEventListener("DOMContentLoaded", function () {
    let yesBtn = document.getElementById("yesBtn");
    let noBtn = document.getElementById("noBtn");
    let mainPage = document.getElementById("mainPage");
    let nextPage = document.getElementById("nextPage");
    let size = 20;

    function increaseYesSize() {
        size += 10;
        yesBtn.style.fontSize = size + "px";
        yesBtn.style.padding = (size / 2) + "px " + (size) + "px";
    }

    function showNextPage() {
        mainPage.style.display = "none"; // Hide first page
        nextPage.style.display = "flex"; // Show second page
    }

    noBtn.addEventListener("click", increaseYesSize);
    yesBtn.addEventListener("click", showNextPage);
});
