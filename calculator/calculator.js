window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  // UI Elements
  const amountText = document.getElementById("loan-amount");
  const yearsText = document.getElementById("loan-years");
  const rateText = document.getElementById("loan-rate");
  
  //Default values
  const initValues = {amount: 70000, years:20, rate: 5};
  
  //Update text fields
  amountText.value = initValues.amount;
  yearsText.value = initValues.years;
  rateText.value = initValues.rate;

  //update
  update();  
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const inputFieldsValue = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(inputFieldsValue));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  //formula is ((p * i) / (1 - (1+i) ^ -n)
  const varI = (values.rate /100) / 12;
  const varP = values.amount;
  const varN = Math.floor(values.years * 12);

  if(varN <= 0) throw new Error('Years must be greater than 0.');

  const output = (varP * varI) / (1 - Math.pow(1+varI, -varN));
  return output.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyText = document.getElementById("monthly-payment");
  monthlyText.innerText = `$${monthly}`;
}
