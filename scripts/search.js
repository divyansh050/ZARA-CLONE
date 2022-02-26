
load();



async function load() {

  let res = await fetch(`https://zara-server.herokuapp.com/products`);

  let products = await res.json();

  console.log("Products : ", products);

  let mensShirt = products.filter((data) => data.section === "mensShirt");
  let mensShoes = products.filter((data) => data.section === "mensShoes");
  let womenAccessories = products.filter(
    (data) => data.section === "womenAccessories"
  );
  let womenJacket = products.filter((data) => data.section === "womenJacket");

  showshirts(mensShirt);
  showshoes(mensShoes);
  showwomenAccessories(womenAccessories);
  showwomenjacket(womenJacket);

  
}

function show(elem) {
  
 let prod =  elem.map(function (data) {
    contdiv = document.createElement("div");
    let img = document.createElement("img");
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    img.src = data.imgUrl;
    p1.innerText = data.prod_name;
    p2.innerText = data.price;

    div.append(p1, p2);
    contdiv.addEventListener("click", function (e) {
      selectProd(data);
    });
    contdiv.append(img, div);
    return contdiv
  });

  return prod;
}

// show Women jacket function
function showwomenjacket(elem) {
  console.log("womenjacket:", elem);
  let proddiv = document.querySelector("#women-jacket");
  let prod = show(elem);
  prod.forEach((data) => proddiv.append(data));
}

//show Women Accessories function

function showwomenAccessories(elem) {
  console.log("womenAccessories:", elem);
  let proddiv = document.querySelector("#womenAccessories-products");
 let prod = show(elem);
 prod.forEach((data) => proddiv.append(data));
}

//show shoes function

function showshoes(elem) {
  console.log("shoes:", elem);
  let proddiv = document.querySelector("#shoes-products");
 let prod = show(elem);
 prod.forEach((data) => proddiv.append(data));
}

//show shirts function

function showshirts(elem) {
  // console.log(elem)
  let proddiv = document.querySelector("#shirt-products");
  let prod = show(elem);
  prod.forEach((data) => proddiv.append(data));
}

// all toggle functions
// shirt toggle
function shirts(event) {
  event.preventDefault();

  console.log(event.target);

  document.querySelector("#shirt-products").classList.toggle("none");
  document.querySelector("#shoes-products").classList.add("none");
  document.querySelector("#womenAccessories-products").classList.add("none");
  document.querySelector("#women-jacket").classList.add("none");
}

// women jacket toggle
function womenjacket(event) {
  event.preventDefault();

  document.querySelector("#women-jacket").classList.toggle("none");
  document.querySelector("#womenAccessories-products").classList.add("none");
  document.querySelector("#shoes-products").classList.add("none");
  document.querySelector("#shirt-products").classList.add("none");
}

// women Accessories toggle
function womenAcc(event) {
  event.preventDefault();

  document.querySelector("#womenAccessories-products").classList.toggle("none");
  document.querySelector("#shoes-products").classList.add("none");
  document.querySelector("#shirt-products").classList.add("none");
  document.querySelector("#women-jacket").classList.add("none");
}

//   shoes toggle
function shoes(event) {
  event.preventDefault();

  document.querySelector("#shoes-products").classList.toggle("none");
  document.querySelector("#shirt-products").classList.add("none");
  document.querySelector("#womenAccessories-products").classList.add("none");
  document.querySelector("#women-jacket").classList.add("none");
}

function selectProd(elem) {
  localStorage.setItem("product", JSON.stringify(elem));
  window.location.href = "./product.html";
  
}
