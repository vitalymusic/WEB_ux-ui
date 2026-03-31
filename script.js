const modal = document.getElementById("regModal");
const btn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close-btn");

// Atvērt logu
btn.onclick = function() {
    modal.style.display = "flex";
}

// Aizvērt logu ar "X"
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Aizvērt logu, noklikšķinot ārpus tā
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Formas iesniegšanas apstrāde (piemērs)
document.getElementById("registrationForm").onsubmit = function(e) {
    e.preventDefault();
    alert("Paldies! Reģistrācija ir veiksmīga.");
    modal.style.display = "none";
};