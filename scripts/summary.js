
let token = JSON.parse(localStorage.getItem("token"));
let cartItem = JSON.parse(localStorage.getItem("cart"));
let user;

userToken(token);

async function userToken(token) {
  try{

    let res = await fetch("https://zara-server.herokuapp.com/verify/user", {
      method: "GET",
      headers: {
        
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

   let response = await res.json();
   user = response
    
    appendUserDetails(response, cartItem);
  }catch(e){
   
    console.log(e);
  }
}


function appendUserDetails(userData, cartItem) {
  let data = userData
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
                <p>${data.pincode}</p>
                <p>${data.state}</p>
                <p>${data.city}</p>
                <p>${data.phone}</p>
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

  async function otpVerify(token) {
    try{
      let res = await fetch("https://zara-server.herokuapp.com/verify/otp", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        
      });
      let response = await res.json();
      console.log(response);

     let otp = prompt(`Please verify 6 digit OTP sent to your registered email ${user.email}`);

     console.log(response.otp,otp)

     while(otp != response.otp) {
       alert("Please enter correct OTP");
       otp = prompt(
         `Please verify 6 digit OTP sent to your registered email ${user.email}`
       );

       console.log(otp,response.otp)

     }
     
      alert("OTP Verified Successfully 😊✌\nTHANK YOU FOR CHOOSING US");
    
       window.location.href = "index.html";
      // window.location.href = "shipping.html";
    }catch(e){
      console.log(e);
    }
  }

  otpVerify(token);

 
});
