document.querySelector('.card').addEventListener('click', () => {
  const box = document.getElementById('frase');

  // riavvia animazione
  box.classList.remove('animazione');
  void box.offsetWidth;
  box.classList.add('animazione');

  // flip carta
  document.querySelector('.card').classList.toggle('flipped');
});
// ✅ SALVA
const frase = document.getElementById("frase").innerText;
const consiglio = document.getElementById("consiglio").innerText;

localStorage.setItem("cartaSalvata", frase + "||" + consiglio);

  document.getElementById("salvata").innerText = "Salvata: " + testo;
}

// ✅ CONDIVIDI
function condividi() {
  const testo = document.getElementById("frase").innerText;

  if (navigator.share) {
    navigator.share({
      title: "Carta del Giorno",
      text: testo
    });
  } else {
    alert("Condivisione non supportata");
  }
}

// ✅ MOSTRA QUANDO RIAPRI

window.onload = function() {
    const salvata = localStorage.getItem("cartaSalvata");

    if (salvata) {
const parti = salvata.split("||");

document.getElementById("salvata").innerHTML =
"<b>Salvata:</b><br>" +
parti[0] +
"<br><i>" +
parti[1] +
"</i>";
        
    }
};
function salva() {
  const frase = document.getElementById("frase").innerText;
  const consiglio = document.getElementById("consiglio").innerText;

  const salvata = document.getElementById("salvata");

salvata.innerHTML =
  "<div style='margin-top:15px; padding:10px; background:#ffffff22; border-radius:10px;'>" +
  "<b>Salvata:</b><br>" +
  frase + "<br>" +
  "<i>" + consiglio + "</i>" +
  "</div>";

alert(
  "Salvata\n\nFrase: " + frase +
  "\nConsiglio: " + consiglio
);
alert(
  "Salvata\n\nFrase: " + frase +
  "\nConsiglio: " + consiglio
);
}
window.onload = function() {
  const salvata = localStorage.getItem("cartaSalvata");

  if (salvata) {
    const parti = salvata.split("||");

    document.getElementById("salvata").innerHTML =
      "<b>Salvata:</b><br>" +
      parti[0] +
      "<br><i>" +
      parti[1] +
      "</i>";
  }
};