const buttons = {
  "midnight": "src/image/macbook-air-midnight.jfif",
  "starlight": "src/image/macbook-air-starlight.jfif",
  "spacegray": "src/image/macbook-air-spacegray.jfif",
  "silver": "src/image/macbook-air-silver.jfif"
};

let apple = document.querySelector(".background-image img");

for (let button in buttons) {
  document.getElementById(button).addEventListener('click', function() {
    apple.src = buttons[button];
  });
}
