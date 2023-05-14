var carouselSlide = document.querySelector(".carousel-slide");
var carouselImages = document.querySelectorAll(".carousel-slide img");
var prevBtn = document.querySelector(".carousel-prev");
var nextBtn = document.querySelector(".carousel-next");
var currentIndex = 0;

function moveToImage(index) {
  carouselSlide.style.transform = "translateX(" + (-index * 100 / 3) + "%)";
  currentIndex = index;
}

prevBtn.addEventListener("click", function() {
  if (currentIndex == 0) {
    moveToImage(carouselImages.length - 1);
  } else {
    moveToImage(currentIndex - 1);
  }
});

nextBtn.addEventListener("click", function() {
  if (currentIndex == carouselImages.length - 1) {
    moveToImage(0);
  } else {
    moveToImage(currentIndex + 1);
  }
});

moveToImage(0);
