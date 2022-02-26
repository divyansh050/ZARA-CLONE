let token = JSON.parse(localStorage.getItem("token"));
let name = JSON.parse(localStorage.getItem("userName"));

let change = "LOG IN";

if (token) {
  change = "Hi " + name;
}

function navbar() {
  return `<div id="logo">
    <a href="./index.html">
        <img src="https://logodownload.org/wp-content/uploads/2014/05/zara-logo-1.png" alt="zaralogo">
        </a>
    </div>
    
    <div id="ship">
        <div class="active">SHIPPING</div>
        <div> > </div>  
        <div>PAYMENT</div> 
        <div> > </div>
        <div>SUMMARY</div>
     </div>

    <div id="help">
    <a href="./login.html">
        <div >${change}</div>
        <a/>
        <a href="./zarahelp.html">
        <div>HELP</div>
        <a/>
    </div>`;
}

export default navbar;
