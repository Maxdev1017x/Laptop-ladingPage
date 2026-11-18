const colors = {
  midnight: { image: "src/image/macbook-air-midnight.jfif", alt: "MacBook Air na cor meia-noite" },
  starlight: { image: "src/image/macbook-air-starlight.jfif", alt: "MacBook Air na cor estelar" },
  spacegray: { image: "src/image/macbook-air-spacegray.jfif", alt: "MacBook Air na cor cinza-espacial" },
  silver: { image: "src/image/macbook-air-silver.jfif", alt: "MacBook Air na cor prateada" }
};

const productImage = document.querySelector(".background-image img");
const colorButtons = document.querySelectorAll(".color-select button");

for (const [color, details] of Object.entries(colors)) {
  document.getElementById(color).addEventListener("click", function() {
    productImage.src = details.image;
    productImage.alt = details.alt;
    colorButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.id === color));
    });
  });
}
