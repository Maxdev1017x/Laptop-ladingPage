const buttons = {
  "midnight": "url(src/image/macbook-air-midnight.jfif)",
  "starlight": "url(src/image/macbook-air-starlight.jfif)",
  "spacegray": "url(src/image/macbook-air-spacegray.jfif)",
  "silver": "url(src/image/macbook-air-silver.jfif)"
};

let apple = document.getElementById("apple");

for (let button in buttons) {
  document.getElementById(button).addEventListener('click', function() {
    apple.style.backgroundImage = buttons[button];
  });
}
