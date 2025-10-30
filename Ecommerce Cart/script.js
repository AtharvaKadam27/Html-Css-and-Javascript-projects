const products = [
  {
    id: 1,
    image:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    title: "Mascara Lash ",
    price: 9.99,
  },
  {
    id: 2,
    image:
      "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    title: "Powder Canister",
    price: 14.99,
  },
  {
    id: 3,
    image:
      "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
    title: "Eyeshadow Palette",
    price: 19.99,
  },
];

getAddToCart();
// showAddToCart();
// function showAddToCart() {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const buttons = document.querySelectorAll(".addToCart");

//   buttons.forEach((btn) => {
//     const productEl = btn.closest(".product");
//     const productId = Number(productEl.dataset.id);

//     const found = cart.some((item) => item.id === productId);

//     if (found) {
//       btn.style.display = "none";
//     } else {
//       btn.style.display = "block";
//     }
//   });
// }

let parentChild = document.querySelector(".items");

products.forEach((item) => {
  let product = `<div class="product" data-id=${item.id} data-title="${item.title}" data-price="${item.price}">
            <div class="top">
              <img
                src=${item.image}
                alt=""
              />
            </div>
            <div class="bottom">
              <h3>${item.title}</h3>
              <p>$ ${item.price}</p>
              <button class="addToCart">Add to cart</button>
            </div>
          </div>`;

  parentChild.innerHTML += product;
});

let addToCart = document.querySelectorAll(".addToCart");

addToCart.forEach((button) => {
  button.addEventListener("click", (e) => {
    let item = e.target.closest(".product");
    let title = item.dataset.title;
    let price = item.dataset.price;
    let id = item.dataset.id;
    let cartLs = { title, price, id, quantity: 1 };
    let getLs = JSON.parse(localStorage.getItem("cart"));
    if (getLs) {
      let already = getLs.find((i) => i.id == id);
      if (already) {
        let updateQuant = getLs.map((i) => {
          if (i.id == id) {
            return { ...i, quantity: (i.quantity += 1) };
          } else {
            return i;
          }
        });
        localStorage.setItem("cart", JSON.stringify(updateQuant));
      } else {
        localStorage.setItem("cart", JSON.stringify([...getLs, cartLs]));
      }
    } else {
      localStorage.setItem("cart", JSON.stringify([cartLs]));
    }
    getAddToCart();
  });
});

function getAddToCart() {
  let getCart = JSON.parse(localStorage.getItem("cart"));
  let cart = document.querySelector(".cart");
  cart.innerHTML = "";

  if (getCart) {
    getCart.forEach((item) => {
      let cartItem = `<div class="cartItem" data-id=${item.id}>
                <h3>${item.title}</h3>
                <p>$ ${item.price}</p>
                <div class="grp">
                  <button class="dec">-</button>
                  <p class="quant">${item.quantity}</p>
                  <button class="inc">+</button>
                </div>
              </div>`;
      cart.innerHTML += cartItem;
    });
    incDec();
  } else {
    cart.innerHTML = "<p style='color:black'>Cart is Empty</p>";
  }
}

function incDec() {
  let inc = document.querySelectorAll(".inc");
  let dec = document.querySelectorAll(".dec");

  inc.forEach((increase) => {
    increase.addEventListener("click", (e) => {
      let quantity = e.target.closest(".cartItem");
      let id = quantity.dataset.id;
      quantity.querySelector(".quant").innerHTML++;
      let getCart = JSON.parse(localStorage.getItem("cart"));
      let newCart = getCart.map((p) => {
        if (p.id == id) {
          return { ...p, quantity: (p.quantity += 1) };
        } else {
          return p;
        }
      });
      localStorage.setItem("cart", JSON.stringify(newCart));
    });
  });

  dec.forEach((decrease) => {
    decrease.addEventListener("click", (e) => {
      let quantity = e.target.closest(".cartItem");
      let id = quantity.dataset.id;
      let getCart = JSON.parse(localStorage.getItem("cart"));
      if (quantity.querySelector(".quant").innerHTML > 1) {
        quantity.querySelector(".quant").innerHTML--;
        let newCart = getCart.map((p) => {
          if (p.id == id) {
            return { ...p, quantity: (p.quantity -= 1) };
          } else {
            return p;
          }
        });
        localStorage.setItem("cart", JSON.stringify(newCart));
      } else {
        let filterCart = getCart.filter((i) => i.id != id);
        localStorage.setItem("cart", JSON.stringify(filterCart));
        getAddToCart();
      }
    });
  });
}
