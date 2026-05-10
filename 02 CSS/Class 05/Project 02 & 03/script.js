function displayProducts() {
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
            variant: "Sparkling Refreshment"
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
            variant: "Natural Splash"
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
        }
    ];

    const productsWrapper = document.querySelector('#products-wraper');

    productsContent.forEach(cardContent => {
        productsWrapper.innerHTML += `
    
    <a href="product.html?id=${cardContent.id}" class="product-link">
    
        <div class="product">
            <img src="${cardContent.image}" alt="product">
            <h3>${cardContent.title}</h3>
            <p>${cardContent.description}</p>
            <span class="p-divider"></span>
            <span class="price">${cardContent.price}</span>
            ${cardContent.tag ? `<span class="tag">${cardContent.tag}</span>` : ''}
        </div>
    
    </a>
    
    `;
    });
};

displayProducts();