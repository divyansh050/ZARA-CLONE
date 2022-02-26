

let data = JSON.parse(localStorage.getItem("cart")) || [];

let cart_total = 0;
display_product(data);

function display_product(data) {
  document.querySelector("#cartLen").innerText = data.reduce((sum, item) =>{
      return sum + item.qty
  },0);

  cart_total =
    "₹ " +
    data.reduce(function (ac, cv) {
      return ac + cv.price * cv.qty;
    }, 0);

    localStorage.setItem("total",JSON.stringify(cart_total))

  document.querySelector("#total").innerHTML = cart_total;

  document.querySelector("#items").innerHTML = "";

  data.map(function (elem, index) {
    // creating elements and setting attributes

    // main container
    let mainDiv = document.createElement("div");

    // for product image
    let img = document.createElement("img");

    // for product description and name
    let details = document.createElement("div");
    details.setAttribute("class", "desc");
    let name = document.createElement("h5");
    let price = document.createElement("p");
    price.style.textDecoration = "line-through";
    let price2 = document.createElement("p");
    price2.setAttribute("class", "yellow");
    let del = document.createElement("div");
    del.addEventListener("click", function () {
      removeElem(index);
    });

    img.src = elem.imgUrl;
    name.innerHTML = elem.prod_name;
    price.innerHTML = "₹" + elem.strikedOffPrice;
    price2.innerHTML = "₹" + elem.price;
    del.innerHTML = `<i class="far fa-trash-alt"></i>`;
    del.style.marginTop = "20px";
    del.style.cursor = "pointer";

    // quantity div
    let quantityMain = document.createElement("div");
    let dec = document.createElement("button");
    if (elem.qty > 1) {
      dec.style.cursor = "pointer";
    }
    dec.addEventListener("click", function () {
      decCount(index);
    });
    let quantity = document.createElement("span");
    let inc = document.createElement("button");
    inc.style.cursor = "pointer";

    inc.addEventListener("click", function () {
      incCount(index);
    });

    dec.innerText = "-";
    inc.innerText = " + ";
    quantity.innerHTML = elem.qty;
    quantity.style.margin = "0px 10px 0px 10px";

    // appending the child elements with the parent elements
    quantityMain.append(dec, quantity, inc);
    details.append(name, price, price2, quantityMain, del);
    mainDiv.append(img, details);
    document.querySelector("#items").append(mainDiv);
  });
}

function removeElem(index) {
  data.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(data));
  display_product(data);
}

function incCount(index) {
  data[index].qty++;
  display_product(data);
}

function decCount(index) {
  if (data[index].qty > 1) {
    data[index].qty--;
    display_product(data);
  }
}


function proceed(){

  console.log("here")

  let token = JSON.parse(localStorage.getItem("token"));

  if(token && data.length){
    window.location.href = "./shipping.html";
    return
  }

  if(token){
    alert("Your cart is empty Please add some items")
    window.location.href = "./index.html";
    return
  }

  window.location.href = "./login.html";

}
