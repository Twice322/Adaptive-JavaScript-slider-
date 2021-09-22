const slides = document.querySelectorAll(".slide");

const clearAllClasses = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
};

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    clearAllClasses();
    slide.classList.add("active");
  });
});
