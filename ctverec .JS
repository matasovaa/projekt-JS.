function calculate() {
    // Načtení hodnoty ze vstupního pole
    const side = document.getElementById("side").value;
  
    // Výpočet obsahu čtverce
    const area = side * side;
  
    // Výstup výsledku
    alert("Obsah čtverce je " + area + " cm².");
  }