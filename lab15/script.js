"use strict";
function createImage(imgPath) {
  const img = document.createElement("img");
  img.src = "https://picsum.photos/200/301";
  document.body.appendChild(img);
}
