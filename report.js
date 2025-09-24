function generateReport() {
  let name = document.getElementById("studentName").value;
  let roll = document.getElementById("rollNumber").value;
  let maths = Number(document.getElementById("maths").value);
  let science = Number(document.getElementById("science").value);
  let english = Number(document.getElementById("english").value);
  let history = Number(document.getElementById("history").value);
  let geography = Number(document.getElementById("geography").value);
  let programming = Number(document.getElementById("programming").value);
  let english2 = Number(document.getElementById("english2").value);

  if (!name || !roll || isNaN(maths) || isNaN(science) || isNaN(english) || isNaN(history) || isNaN(geography) || isNaN(programming) || isNaN(english2)) {
    alert("Please fill all fields correctly");
    return;
  }

  let total = maths + science + english + history + geography + programming + english2;
  let percentage = (total / 7).toFixed(2);
  let result = (maths >= 35 && science >= 35 && english >= 35 && history >= 35 && geography >= 35 && programming >= 35 && english2 >= 35) ? "PASS" : "FAIL";

  document.getElementById("rName").innerText = name;
  document.getElementById("rRoll").innerText = roll;
  document.getElementById("rMaths").innerText = maths;
  document.getElementById("rScience").innerText = science;
  document.getElementById("rEnglish").innerText = english;
  document.getElementById("rHistory").innerText = history;
  document.getElementById("rGeography").innerText = geography;
  document.getElementById("rProgramming").innerText = programming;
  document.getElementById("rEnglish2").innerText = english2;
  document.getElementById("rTotal").innerText = total;
  document.getElementById("rAverage").innerText = percentage + "%";
  document.getElementById("rResult").innerText = result;

  document.getElementById("reportCard").style.display = "block";
}
