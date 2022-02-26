let date = new Date();
// let day = date.getDate()
// let din = date.getDay()
// let month = date.getMonth()
// let year = date.getFullYear()

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// let year = date.getFullYear();
let montht = months[date.getMonth()];
let datet = date.getDate();
let dayt = days[date.getDay()];

datet += 4;
if (datet > 30) {
  montht = months[date.getMonth() + 1];
  if (montht > 12) {
    montht = months[0];
  }
}

let din = date.getDay() + 4;
console.log(din);

console.log(din);

if (din > 6) {
  din = din - 7;
}

din = days[din];

console.log(montht, datet, din);

document.getElementById(
  "store"
).innerHTML = `<p><input type="radio" name="delopt">${din} ${datet}, ${montht}</p>
            <p>FREE</p>`;

document.getElementById(
  "home"
).innerHTML = `<p>${din} ${datet}, ${montht} <span>290.00</span></p>
            <input type="radio"  name="delopt" >
            <div>
                <p style="color: rgb(170, 169, 169);">TRANSPORT RESTRICTIONS MAY APPLY TO SOME AREAS</p>
                <p style="color: rgb(170, 169, 169);">FREE SHIPPING FOR ORDERS OVER ₹ 2,990</p>
                <a href="" style="color: rgb(121, 120, 120);">DELIVERY TIME FRAMES</a>`;
