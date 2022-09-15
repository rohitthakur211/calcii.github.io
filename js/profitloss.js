function Calculate() {
    const CP = document.querySelector(".cp").value;
    const SP = document.querySelector(".sp").value;
    const profitLoss = document.querySelector(".loss");
    const percentage = document.querySelector(".lossPercentage");
    const nothing = document.querySelector(".nothing");
    profitLoss.innerHTML = "";
    percentage.innerHTML = "";
    nothing.innerHTML = "";
    const diff = SP - CP;
    if (diff > 0) {
       const profit_percent = ((diff / CP) * 100).toFixed(2);
       profitLoss.innerHTML = "It is a Profit of: INR " + diff;
       percentage.innerHTML = "Total Profit Percentage : " +
          profit_percent;
    } else if (diff < 0) {
       const loss_percent = ((Math.abs(diff) / CP) * 100).toFixed(2);
       profitLoss.innerHTML = "It is a Loss of: INR " + Math.abs(diff);
       percentage.innerHTML = "Total Loss Percentage : " + loss_percent;
    } else if (diff == 0) {
       nothing.innerHTML = "No Profit No Loss";
    }
 }