window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const goalsModals = document.querySelectorAll(".goals-modal, .projects-modal");
const learnMoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function (modalClick) {
  goalsModals[modalClick].classList.add("active");
};

learnMoreBtns.forEach((learnMoreBtns, i) => {
  learnMoreBtns.addEventListener("click", () => {
    modal(i);
  });
});

modalCloseBtns.forEach((modalCloseBtns) => {
  modalCloseBtns.addEventListener("click", () => {
    goalsModals.forEach((modalView) => {
      modalView.classList.remove("active");
    });
  });
});

window.addEventListener("scroll", () => {
  const backToTop = document.querySelector(".back-to-top");
  if (window.scrollY > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});
