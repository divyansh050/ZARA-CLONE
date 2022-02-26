let token = JSON.parse(localStorage.getItem("token"));

if (token) {
  let res = prompt(
    "Do you want to logout?\nType 'yes' to logout else press cancel to continue"
  );

  if (!res) {
    window.location.href = "./index.html";
  }
  res = res.trim();
  if (res === "") {
    window.location.href = "./index.html";
    console.log("here");
  }
  if (res.toLowerCase() === "yes") {
    localStorage.removeItem("token");
    window.location.href = "./index.html";
  }
  window.location.href = "./index.html";
}
