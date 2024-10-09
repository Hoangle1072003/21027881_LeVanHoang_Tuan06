const calcTip06 = (bills06) => bills06 >= 50 && bills06 <= 300 ? bills06 * 0.15 : bills06 * 0.2;
const bills06 = [300, 100, 400];
const tips06 = bills.map(calcTip06);
const totals06 = bills.map((bills06, index) => bills06 + tips06[index]);
console.log("--------------------------------Bài 6--------------------------------");
console.log(bills06, tips06, totals06);
