// varibales
const mainTag = document.querySelector("main");
const header = document.querySelector(".header ");
const swiperPositions = document.querySelector(".swiper-positions");
const getHamburgerMenu = document.querySelector("#getHamburgerMenu");
const sidbar = document.querySelector(".sidebar ");
const body = document.querySelector("body");
const mainPart = document.querySelector(".main-part");
const myTab = document.querySelector("#myTab");
const checkedValue = document.querySelector("#dark-mode");

class main {
  constructor() {
    this.connectionSucces();
    this.setSwiper();
    // this.setUpProdductSwiper()
    this.checkScrollbar();
    this.handelSidbar();
  }

  // methods

  connectionSucces() {}
  // set uping the swiper PART
  setSwiper() {
    var swiper = new Swiper(".swiper", {
      threshold: 3,
      observer: true,
      observeParents: true,
      loop: true,
      watchSlidesProgress: true,
      autoplay: { disableOnInteraction: false, enabled: true },
      grabCursor: true,
      effect: "fade", // cup, slide, fade
      speed: 500,
      centeredSlides: true,
      keyboard: { enabled: true },
      // If we need pagination.
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      nextEl: ".swiper-button-next",
    });
  }
  setUpProdductSwiper(){
         var swiper = new Swiper(".swiper-categories", {
        slidesPerView: "auto",
        spaceBetween: 0,
        slideToClickedSlide: true,
        direction: "horizontal",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
  }
  checkScrollbar() {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 260) {
        header.style.opacity = "0.2";
        swiperPositions.style.opacity = "0.2";
      }
      if (window.scrollY >= 265) {
        header.style.opacity = "0";
        swiperPositions.style.opacity = "0";
      } else {
        swiperPositions.style.opacity = "1";
        header.style.opacity = "1";
      }
    });
  }
  handelSidbar() {
    getHamburgerMenu.addEventListener("click", (e) => {
      sidbar.classList.add("sidemenu-open");
      e.stopPropagation();
    });
  }
}

// evintListeaner

mainTag.addEventListener("click", (e) => {
  sidbar.classList.remove("sidemenu-open");
});

swiperPositions.addEventListener("click", (e) => {
  sidbar.classList.remove("sidemenu-open");
});

checkedValue.addEventListener("click", (e) => {
  body.classList.toggle("dark-modes");
  mainPart.classList.toggle("dark-modes");
  myTab.classList.toggle("dark-modes");
});

const Main = new main();
