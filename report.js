function generateReport() {
  let name = document.getElementById("studentName").value;
  let roll = document.getElementById("rollNumber").value;
  let engMath = Number(document.getElementById("Engineering Mathematics").value);
  let engChem = Number(document.getElementById(" Engineering Chemistry").value);
  let engMathLab = Number(document.getElementById("Engineering Mathematics Lab").value);
  let engChemLab = Number(document.getElementById("Engineering Chemistry Lab").value);
  let engGraphics = Number(document.getElementById("Engineering Graphics and Design").value);
  let programming = Number(document.getElementById("Programming for Problem Solving").value);
  let commEnglish = Number(document.getElementById("Communicative English").value);

  if (!name || !roll || isNaN(engMath) || isNaN(engChem) || isNaN(engMathLab) || isNaN(engChemLab) || isNaN(engGraphics) || isNaN(programming) || isNaN(commEnglish)) {
    alert("Please fill all fields correctly");
    return;
  }

  let total = engMath + engChem + engMathLab + engChemLab + engGraphics + programming + commEnglish;
  let percentage = (total / 7).toFixed(2);
  let result = (engMath >= 35 && engChem >= 35 && engMathLab >= 35 && engChemLab >= 35 && engGraphics >= 35 && programming >= 35 && commEnglish >= 35) ? "PASS" : "FAIL";

  document.getElementById("rName").innerText = name;
  document.getElementById("rRoll").innerText = roll;
  document.getElementById("rEngineering Mathematics").innerText = engMath;
  document.getElementById("rEngineering Chemistry").innerText = engChem;
  document.getElementById("rEngineering Mathematics Lab").innerText = engMathLab;
  document.getElementById("rEngineering Chemistry Lab").innerText = engChemLab;
  document.getElementById("rEngineering Graphics and Design").innerText = engGraphics;
  document.getElementById("rProgramming for Problem Solving").innerText = programming;
  document.getElementById("rCommunicative English").innerText = commEnglish;
  document.getElementById("rTotal").innerText = total;
  document.getElementById("rAverage").innerText = percentage + "%";
  document.getElementById("rResult").innerText = result;

  document.getElementById("reportCard").style.display = "block";
}
