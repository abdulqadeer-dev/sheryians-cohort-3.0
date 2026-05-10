const productsContent = [
        {
            id: "product-1",
            image: "./assets/Product 01.png",
            title: "Tropical Passion",
            description: "Fruity & Exotic",
            price: "$12.94",
            alt: "The Ultimate Guide To SaaS Marketing",
            tag: "Signature",
            category: "Beverage",
            subCategory: "Soft Drink",
            type: "Carbonated",
            flavor: "Lemon & Orange",
            brand: "Pachyteria",
            variant: "Sparkling Refreshment",
            productBackground: "#D10603",
        },
        {
            id: "product-2",
            image: "./assets/Product 02.png",
            title: "Citrus Dawn",
            description: "Tropical & Refreshing",
            price: "$11.04",
            alt: "The Ultimate Guide To SaaS Marketing",
            category: "Beverage",
            subCategory: "Juice",
            type: "Non-Carbonated",
            flavor: "Mango & Pineapple",
            brand: "TropiWave",
            variant: "Natural Splash",
            productBackground: "#ff460e",
        },
        {
            id: "product-3",
            image: "./assets/Product 03.png",
            title: "Berry Breeze",
            description: "Citrusy & Energizing",
            price: "$13.78",
            alt: "The Ultimate Guide To SaaS Marketing",
            category: "Beverage",
            subCategory: "Energy Drink",
            type: "Carbonated",
            flavor: "Berry Blast",
            brand: "VoltRush",
            variant: "Power Surge",
            productBackground: "#D36F23",
        },
        {
            id: "product-4",
            image: "./assets/Product 04.png",
            title: "Sunset Flame",
            description: "Sweet & Cool",
            price: "$8.99",
            alt: "The Ultimate Guide To SaaS Marketing",
            tag: "Special",
            category: "Beverage",
            subCategory: "Flavored Water",
            type: "Lightly Carbonated",
            flavor: "Mint & Lime",
            brand: "AquaVibe",
            variant: "Cool Hydration",
            productBackground: "#6C0404",
        }
    ];

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const product = productsContent.find(p => p.id === id);
const container = document.getElementById("product-single-main");

if (product) {

  // 👇 GLOBAL CSS VARIABLE SET
  document.documentElement.style.setProperty(
    "--product-bg",
    product.productBackground
  );

  container.innerHTML = `
  
  <div class="left">
    <h1 id="product-title">${product.title}</h1>

    <div class="product-dets">
      <div class="content-box">
        <span class="bullet"></span>
        <div>
          <h5>Category</h5>
          <span>${product.category}</span>
        </div>
      </div>

      <div class="content-box">
        <span class="bullet"></span>
        <div>
          <h5>Sub-Category</h5>
          <span>${product.subCategory}</span>
        </div>
      </div>

      <div class="content-box">
        <span class="bullet"></span>
        <div>
          <h5>Type</h5>
          <span>${product.type}</span>
        </div>
      </div>

      <div class="content-box">
        <span class="bullet"></span>
        <div>
          <h5>Flavor</h5>
          <span>${product.flavor}</span>
        </div>
      </div>

      <div class="content-box">
        <span class="bullet"></span>
        <div>
          <h5>Brand</h5>
          <span>${product.brand}</span>
        </div>
      </div>

      <div class="content-box">
        <span class="bullet"></span>
        <div>
          <h5>Variant</h5>
          <span>${product.variant}</span>
        </div>
      </div>
    </div>
  </div>

  <img class="product-img" src="${product.image}" alt="${product.title}">

  <div class="right">
    <div class="wraper">
      <h2>${product.title}</h2>

      <div class="icon-boxes-wraper">
        <div class="icon-box">
          <i class="ri-drinks-2-line"></i>
          <div class="icon-content">
            <p>Product Type</p>
            <span>${product.type}</span>
          </div>
        </div>

        <div class="icon-box">
          <i class="ri-bubble-chart-line"></i>
          <div class="icon-content">
            <p>Net Volume</p>
            <span>500 ml</span>
          </div>
        </div>

        <div class="icon-box">
          <i class="ri-flashlight-line"></i>
          <div class="icon-content">
            <p>Energy</p>
            <span>140 kcal</span>
          </div>
        </div>
      </div>

      <h3 class="price">Price: ${product.price}</h3>
      <button>Add to Cart</button>

    </div>
  </div>
  
  `;
}