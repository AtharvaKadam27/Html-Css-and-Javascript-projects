const products = [
  {
    id: 1,
    image:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    title: "Mascara Lash ",
    price: 9.99,
  },
  {
    id: 3,
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
    button.style.display = "none";
    let cartLs = [{ title, price, id, quantity: 1 }];
    let getLs = JSON.parse(localStorage.getItem("cart"));
    console.log(getLs);
    if (getLs) {
      localStorage.setItem("cart", JSON.stringify([...getLs, ...cartLs]));
    } else {
      localStorage.setItem("cart", JSON.stringify([...cartLs]));
    }
  });
});
