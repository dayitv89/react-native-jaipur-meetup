const arr = [5, 10, 15];
console.log(arr);
const arrMoney = arr.map(a => '$'+a);
console.log(arrMoney);
const strMoneyCSV = arrMoney.join(', ');
console.log(strMoneyCSV);
