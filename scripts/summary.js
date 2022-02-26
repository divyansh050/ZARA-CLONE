let userData = JSON.parse(localStorage.getItem("userDataBase"));
let cartItem = JSON.parse(localStorage.getItem("cart"));
appendUserDetails(userData, cartItem);

function appendUserDetails(userData, cartItem) {
  let data = userData[userData.length - 1];
  let leftContainer = document.getElementById("left");
  leftContainer.innerHTML = "";

  leftContainer.innerHTML = `<h4>DELIVERY</h4>
            <div class="space">
                <h5>STANDARD HOME SHIPPING · THURSDAY 27, JANUARY - TUESDAY 01, FEBRUARY</h5>
                <p>TRANSPORT RESTRICTIONS MAY APPLY TO SOME AREAS</p>
                <p><u>EDIT</u></p>
            </div>
            <div class="name">
                <p>${data.name}</p>
                <p>${data.address}</p>
                <p>${data.pin}</p>
                <p>${data.state}</p>
                <p>${data.stateR}</p>
                <p>${data.tel}</p>
            </div>
            <h4 style="margin-top: 60px;">PAYMENT</h4>
            <p><u>EDIT</u></p>`;

  let rightContainer = document.getElementById("right");
  rightContainer.innerHTML = "";
  rightContainer.innerHTML = `<h4>DELIVERY THURSDAY 27, JANUARY - TUESDAY 01, FEBRUARY</h4>`;
  cartItem.forEach(function (elem) {
    let div = document.createElement("div");
    div.innerHTML = `<div>
                <p>${elem.qty} ITEM</p>
                <img src=${elem.imgUrl}>
            </div>`;
    rightContainer.append(div);
  });
}

document.getElementById("done").addEventListener("click", function () {
  alert("THANK YOU FOR CHOOSING US");
  window.location.href = "index.html";
});
