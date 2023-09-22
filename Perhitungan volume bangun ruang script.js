// script.js

function hitungVolume() {
    const bangunRuang = document.getElementById("bangunRuang").value;
    const panjang = parseFloat(document.getElementById("panjang").value);
    const lebar = parseFloat(document.getElementById("lebar").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    const jariJari = parseFloat(document.getElementById("jariJari").value);
    const hasilDiv = document.getElementById("hasil");
    const volumeSpan = document.getElementById("volume");

    let volume = 0;

    if (bangunRuang === "kubus") {
        volume = Math.pow(panjang, 3);
    } else if (bangunRuang === "balok") {
        volume = panjang * lebar * tinggi;
    } else if (bangunRuang === "tabung") {
        volume = Math.PI * Math.pow(jariJari, 2) * tinggi;
    }

    volumeSpan.textContent = volume.toFixed(2);
    hasilDiv.style.display = "block";
}

document.getElementById("bangunRuang").addEventListener("change", function() {
    const bangunRuang = document.getElementById("bangunRuang").value;
    const inputFields = document.getElementById("inputFields");

    if (bangunRuang === "kubus") {
        inputFields.innerHTML = `<label for="panjang">Panjang:</label><input type="number" id="panjang">`;
    } else if (bangunRuang === "balok") {
        inputFields.innerHTML = `<label for="panjang">Panjang:</label><input type="number" id="panjang"><label for="lebar">Lebar:</label><input type="number" id="lebar"><label for="tinggi">Tinggi:</label><input type="number" id="tinggi">`;
    } else if (bangunRuang === "tabung") {
        inputFields.innerHTML = `<label for="jariJari">Jari-jari:</label><input type="number" id="jariJari"><label for="tinggi">Tinggi:</label><input type="number" id="tinggi">`;
    }
});
