function goGallery() {
  window.location.href = "gallery.html";
}

function call() {
  window.location.href = "tel:9876543210";
}

function whatsapp() {
  window.location.href = "https://wa.me/919876543210";
}

function filter(category) {
  let images = document.querySelectorAll(".gallery img");

  images.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}

function loadMore() {
  let gallery = document.getElementById("gallery");

  let img = document.createElement("img");
  img.src = "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf";

  gallery.appendChild(img);
}
