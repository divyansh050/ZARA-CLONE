// // transfer to the product page



setTimeout(() => {
  document.getElementById("womenJacks").addEventListener("click", function () {
    transfer("womenJacket");
  });
  document.getElementById("womenAcc").addEventListener("click", function () {
    transfer("womenAccessories");
  });
  document.getElementById("menShirts").addEventListener("click", function () {
    transfer("mensShirt");
  });
  document.getElementById("athleticz").addEventListener("click", function () {
    window.location.href = "zaraAthleticz.html";
  });
  document.getElementById("menShoes").addEventListener("click", function () {
    transfer("mensShoes");
  });
}, 3000);

function transfer(string) {
  localStorage.setItem("search", JSON.stringify(string));
  window.location.href = "./products.html";
}
