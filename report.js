function generateReport() {
  let name = document.getElementById("studentName").value;
  let maths = Number(document.getElementById("maths").value);
  let science = Number(document.getElementById("science").value);
  let english = Number(document.getElementById("english").value);
  let history = Number(document.getElementById("history").value);
  let geography = Number(document.getElementById("geography").value);

  if (!name || isNaN(maths) || isNaN(science) || isNaN(english) || isNaN(history) || isNaN(geography)) {
    alert("Please fill all fields correctly");
    return;
  }

  let total = maths + science + english + history + geography;
  let percentage = (total / 5).toFixed(2);
  let result = (percentage >= 40) ? "Pass" : "Fail";

  document.getElementById("rName").innerText = name;
  document.getElementById("rMaths").innerText = maths;
  document.getElementById("rScience").innerText = science;
  document.getElementById("rEnglish").innerText = english;
  document.getElementById("rHistory").innerText = history;
  document.getElementById("rComputer").innerText = geography;
  document.getElementById("rTotal").innerText = total;
  document.getElementById("rAverage").innerText = percentage + "%";
  document.getElementById("rResult").innerText = result;

  document.getElementById("reportCard").style.display = "block";
}
