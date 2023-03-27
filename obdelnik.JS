function calculate() {
    // Načtení hodnot ze vstupních polí
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
  
    // Výpočet obsahu obdélníku
    const area = width * height;
  
    // Výstup výsledku
    alert("Obsah obdélníku je " + area + " cm².");
  }