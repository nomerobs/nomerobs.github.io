/* ====== TRIVIAL ====== */

const respostes = document.querySelectorAll(".resposta");

respostes.forEach(r => {
    r.addEventListener("click", () => {

        // Si és correcta → verd
        if (r.dataset.valor === "correcte") {
            r.classList.add("resposta-correcta");
        } 
        
        // Si és incorrecta → vermell
        else {
            r.classList.add("resposta-incorrecta");
        }
    });
});


/* ====== CONTACTE ====== */

document.getElementById("formulari")?.addEventListener("submit", e => {
    const nom = document.getElementById("nom");
    const email = document.getElementById("email");

    // Validació del nom
    if (nom.value.length < 3) {
        nom.style.border = "2px solid red";
        e.preventDefault();
    }

    // Validació del correu
    if (!email.value.includes("@")) {
        email.style.border = "2px solid red";
        e.preventDefault();
    }
});
