function updateEmi() {
  let amount = document.getElementById("amount").value;
  let interest = document.getElementById("interest").value;
  let month = document.getElementById("month").value;

  let interestValue = (amount * (interest * 0.01)) / month;
  let emi = (amount / month + interestValue).toFixed(2);
  document.getElementById("emi").innerHTML = `Amount Per Month : ${emi}`;
}
