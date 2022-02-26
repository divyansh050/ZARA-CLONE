let query = JSON.parse(localStorage.getItem("search"));

initial();

async function initial() {
  let res = await fetch(
    `https://zara-server.herokuapp.com/products?section=${query}`
  );

  let products = await res.json();

  // console.log("Products : ", products);
  display(products);
}

document.querySelector("#sortPrice").addEventListener("change",sortByPrice)

async function sortByPrice()
{
  let selected = document.querySelector("#sortPrice").value;
  let res = await fetch(
    `https://zara-server.herokuapp.com/products?section=${query}`
  );
  let products = await res.json();
  if(selected == "low")
  {
    products.sort((a,b) => {
      return a.price - b.price
    })
  }
  if(selected == "high")
  {
    products.sort((a,b) => {
      return b.price - a.price
    }) 
  }
  if(selected == "less"){
    products = products.filter((product) => {
      console.log("here")
      return product.price <= 2000;
      
    });
  }
  if(selected == "greater"){
    products = products.filter((product) => {
      return product.price >= 500;
      
    });
  }
  console.log("Products : ", products);
  display(products);
}

// async function sortByPrice()
// {
//     var selected = document.querySelector("#sortPrice").value;
//     if(selected == "low")
//     {
//       let res = await fetch(
//         `https://zara-server.herokuapp.com/products/lowToHigh`
//       );
    
//       var products = await res.json();
//       console.log(products)
//     }
//     if(selected == "high")
//     {
//       let res = await fetch(
//         `https://zara-server.herokuapp.com/products/highToLow`
//       );
    
//       var products = await res.json(); 
//       console.log(products)
//     }
//     // display(products);
// }

function display(data) {
  let main = document.getElementById("main");
  main.innerHTML = "";
  data.forEach(function (elem) {
    let div = document.createElement("div");

    div.innerHTML = ` <img src=${elem.imgUrl} alt="">

           <div class="flex">
               <p class='underline'>${elem.prod_name}</p>
               <div>
                   <p style="text-decoration:line-through">₹ ${elem.strikedOffPrice}</p>
                   <p><span>${elem.prod_discount} </span> ₹ ${elem.price}</p>
               </div>
           </div>`;

    div.addEventListener("click", function (e) {
      selectProd(elem);
    });

    main.appendChild(div);
  });
}

// product add to the local storage for carry forward to prod-info page
function selectProd(elem) {
  localStorage.setItem("product", JSON.stringify(elem));
  window.location.href = "./product.html";
}
