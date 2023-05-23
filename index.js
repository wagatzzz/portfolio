function showProfileCard() {
    var overlay = document.getElementById("overlay");
    var profileCard = document.getElementById("profileCard");

    overlay.style.display = "block";
    profileCard.style.display = "block";
}

window.addEventListener("click", function (event) {
    var overlay = document.getElementById("overlay");
    var profileCard = document.getElementById("profileCard");

    if (event.target === overlay) {
        overlay.style.display = "none";
        profileCard.style.display = "none";
    }
});