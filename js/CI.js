//element variables
var investmentValue = document.getElementById("investmentValue");
var interestValue = document.getElementById("interestValue");
var yearValue = document.getElementById("yearValue");

var investmentSlider = document.getElementById("investmentSlider");
var interestSlider = document.getElementById("interestSlider");
var yearSlider = document.getElementById("yearSlider");

var final_table = document.getElementById("final_table");
//https://www.chartjs.org
//variables for chart js
const labels = [
  "Yearly Total",
  "Quaterly Total",
  "Monthly Total",
  "Daily Total",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: ["Yearly Total"],
      backgroundColor: [
        "rgba(75, 192, 192, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(201, 203, 207, 0.5)",
      ],
      borderColor: "rgb(255, 99, 132)",
      data: [12, 22, 17, 45],
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {},
};

//chart with config
const myChart = new Chart(document.getElementById("myChart"), config);
myChart.canvas.parentNode.style.height = "400px";
myChart.canvas.parentNode.style.width = "600px";

//set default value
window.onload = () => {
  (function SetDefaultValues() {
    investmentValue.value = 10000;
    interestValue.value = 0.25;
    yearValue.value = 10;

    investmentSlider.value = 10000;
    interestSlider.value = 0.25;
    yearSlider.value = 10;
  })();
};

//add event listeners
var invest_amount, interest_rate, total_year, cmn_interest;

investmentSlider.addEventListener("input", ($event) => {
  document.getElementById("investmentValue").value = $event.target.value;
  invest_amount = parseFloat($event.target.value);
  updateAlldata();
});

interestSlider.addEventListener("input", ($event) => {
  document.getElementById("interestValue").value = $event.target.value;
  interest_rate = parseFloat($event.target.value);
  updateAlldata();
});

yearSlider.addEventListener("input", ($event) => {
  yearValue.value = $event.target.value;
  total_year = parseInt($event.target.value);
  updateAlldata();
});

//update slider from input
investmentValue.addEventListener("change", ($event) => {
  amountSlider.value = $event.target.value;
});
interestValue.addEventListener("change", ($event) => {
  interestSlider.value = $event.target.value;
});
yearValue.addEventListener("change", ($event) => {
  yearSlider.value = $event.target.value;
});
//logic for compound interest
const n = 12;
const compoundInterest = (p, t, r, n) => {
  r = r / 100;
  const amount = p * Math.pow(1 + r / n, n * t);
  const interest = amount - p;
  return parseFloat(interest.toFixed(2));
};

var calculate_button = document.getElementById("btnCalculate");
calculate_button.addEventListener("click", () => {
  updateAlldata();
});

function updateAlldata() {
  invest_amount = parseFloat(investmentValue.value);
  interest_rate = parseFloat(interestValue.value);
  total_year = parseInt(yearValue.value);
  final_table.getElementsByTagName("tbody")[0].innerHTML = "";
  for (var i = 1; i <= total_year; i++) {
    var yearly_interest = compoundInterest(invest_amount, i, interest_rate, 1);
    var yearly_rate = invest_amount + yearly_interest;

    var quaterly_interest = compoundInterest(
      invest_amount,
      i,
      interest_rate,
      3
    );
    var quaterly_rate = invest_amount + quaterly_interest;

    var monthly_interest = compoundInterest(
      invest_amount,
      i,
      interest_rate,
      12
    );
    var monthly_rate = invest_amount + monthly_interest;

    var daily_interest = compoundInterest(invest_amount, i, interest_rate, 365);
    var daily_rate = invest_amount + daily_interest;

    myChart.data.datasets[0].data[0] = yearly_rate;
    myChart.data.datasets[0].data[1] = quaterly_rate;
    myChart.data.datasets[0].data[2] = monthly_rate;
    myChart.data.datasets[0].data[3] = daily_rate;
    myChart.update();

    var formatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    });

    var myHtmlContent = `<tr>
                                <td>${i}</td>
                                <td>${formatter.format(yearly_rate)}</td>
                                <td>${formatter.format(
                                  quaterly_rate.toFixed(2)
                                )}</td>
                                <td>${formatter.format(
                                  monthly_rate.toFixed(2)
                                )}</td>
                                <td>${formatter.format(
                                  daily_rate.toFixed(2)
                                )}</td>
                            </tr>`;

    var tableRef = final_table.getElementsByTagName("tbody")[0];
    var newRow = tableRef.insertRow(tableRef.rows.length);
    newRow.innerHTML = myHtmlContent;
  }
}

function printPage() {
  window.print();
}

document.getElementById("btnprint").addEventListener("click", printPage);

investmentValue.addEventListener("change", updateAlldata);
interestValue.addEventListener("change", updateAlldata);
yearValue.addEventListener("change", updateAlldata);