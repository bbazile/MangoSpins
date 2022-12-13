const calculator = document.getElementById("Calculator");

const principal = document.getElementById("Principal");
const interest = document.getElementById("InterestRate");
const compounded = document.getElementById("Compounded");
const years = document.getElementById("Years");
const profit = document.getElementById("Profit");
const total = document.getElementById("Total");

console.log(principal, interest, compounded, years, profit, total);

calculator.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(e);
  if (
    principal.value === "" ||
    interest.value === "" ||
    compounded.value === "" ||
    years.value === ""
  ) {
    alert("Complete all fields");
  } else {
    calculateCompoundInterest(
      principal.value,
      interest.value,
      compounded.value,
      years.value
    );
    calculateProfit(
      principal.value,
      interest.value,
      compounded.value,
      years.value
    );
  }
});

function calculateCompoundInterest(principal, interest, compounded, years) {
  return (total.innerHTML =
    "$" +
    principal * Math.pow(1 + interest / 100 / compounded, compounded * years));
}

function calculateProfit(principal, interest, compounded, years) {
  return (profit.innerHTML =
    "$" +
    (principal * Math.pow(1 + interest / 100 / compounded, compounded * years) -
      principal));
}
