// Tombol Dark / Light Mode

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeButton.textContent = "🌙";
    } else {
        themeButton.textContent = "☀";
    }

});


// Tombol Contact

const contactButton = document.getElementById("contactButton");

contactButton.addEventListener("click", function () {

    alert("Halo! Terima kasih sudah mengunjungi website saya 👋");

});