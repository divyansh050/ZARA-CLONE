let token = JSON.parse(localStorage.getItem("token"));

if (token) {
  alert("You are already logged in ✌");
  window.location.href = "./index.html";

}

function signUp(event) {
  event.preventDefault();
  var form = event.target;
  var data = {
    name: form.name.value,
    email: form.email.value,
    password: form.password.value,
    repeatPassword: form.reapeatpassword.value,
    address: form.address.value,
    city: form.city.value,
    state: form.state.value,
    pincode: form.pin.value,
    morenfo: form.optional.value,
    locality: form.locality.value,
    phone: form.tel.value,
  };

  console.log(data);

  register(JSON.stringify(data));
}

async function register(data) {
  let res = await fetch("https://zara-server.herokuapp.com/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

  let response = await res.json();

  if (response.message) {
    alert(response.message);
    return;
  }

  alert("Registered Successfully 👍");

  window.location.href = "login.html";
}
