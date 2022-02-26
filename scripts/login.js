let cart = JSON.parse(localStorage.getItem("cart")) || [];



function clickForPass() {
  var height = (document.querySelector("#inputEmail").style.height = "block");
  var passwd = (document.querySelector("#inputPasswd").style.display = "block");
}


function login(event) {
  event.preventDefault();

  let form = event.target;

   let data = {
     email: form.inputEmail.value,
     password: form.inputPasswd.value,
   };

   console.log(data)

   // sending data to server in json format
   loginUser(JSON.stringify(data));

 
}

async function loginUser(data) {
  let res = await fetch("https://zara-server.herokuapp.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

  let response = await res.json();

  if(response.message){
    alert(response.message);
    return
  }

  alert("Login Successful 😊✌");

  let name = response.user.name;

  localStorage.setItem("userName", JSON.stringify(name));
  localStorage.setItem("token", JSON.stringify(response.token));
  // localStorage.setItem("userDataBase", JSON.stringify(response.user));

  if(cart.length){
    window.location.href = "shipping.html";
    return
  }

  window.location.href = "index.html";

  console.log(name);

}

