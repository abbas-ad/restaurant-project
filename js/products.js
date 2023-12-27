class main {
  constructor() {
    this.connectionSucces();
    this.setSwiper();
    this.infoSwiper();
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
  infoSwiper() {
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
}

const Main = new main();

// event Listeaner
LoadEventListeaner();

function LoadEventListeaner() {
  document.addEventListener("DOMContentLoaded", () => {
    const storageACtiveData = returnTheLocalStorageValue();
    selecTheActiveTabs(storageACtiveData);
  });
}

// functions

// ?Local storage connections
// this part of code connecting to local storage and
// handeling the tab part -- saving the this.id to localStorage.
const localStorageNames = "tabsStatus";

function selectTabs(e) {
  saveTheDataToLocalStorage(e);
}

function saveTheDataToLocalStorage(e) {
  const currentId = document?.getElementById(e);
  const getAcriveClass = document?.querySelector(".actives-swiperss");
  getAcriveClass?.classList?.remove("actives-swiperss");

  if (currentId) {
    currentId?.children[0]?.classList?.add("actives-swiperss");
  }

  localStorage.setItem(localStorageNames, e);

  handelingTheviwe();
}

function returnTheLocalStorageValue() {
  let localValue = localStorage.getItem(localStorageNames);

  if (!localValue) {
    localValue = "1";
    localStorage.setItem(localStorageNames, localValue);
  }

  return localValue;
}

function selecTheActiveTabs(storageACtiveData) {
  const getAcriveClass = document?.querySelector(".actives-swiperss");
  getAcriveClass?.classList?.remove("actives-swiperss");
  const selectedData = document?.getElementById(storageACtiveData);
  selectedData?.children[0]?.classList?.add("actives-swiperss");
  handelingTheviwe();
}

function handelingTheviwe() {
  const detailsViwe = document.querySelector(".details-viwe");
  const servicePert = document.querySelector(".service-part");
  const galeryPart = document.querySelector(".galery-part");
  const commentsPart = document.querySelector(".comments-part");
  const addingUserComments = document.querySelector(".adding-user-comments");
  const descriptionPart = document.querySelector(".description-part");
  const activeResevtians = document.querySelector(".active-resevtians-part");

  const currentLocalValue = returnTheLocalStorageValue();
  currentLocalValue == 1
    ? (detailsViwe.style.display = "block")
    : (detailsViwe.style.display = "none");

  currentLocalValue == 2
    ? (servicePert.style.display = "block")
    : (servicePert.style.display = "none");
  currentLocalValue == 3
    ? (galeryPart.style.display = "block")
    : (galeryPart.style.display = "none");
  currentLocalValue == 4
    ? (commentsPart.style.display = "block")
    : (commentsPart.style.display = "none");
  currentLocalValue == 5
    ? (addingUserComments.style.display = "block")
    : (addingUserComments.style.display = "none");
  currentLocalValue == 6
    ? (descriptionPart.style.display = "block")
    : (descriptionPart.style.display = "none");
  currentLocalValue == 7
    ? (activeResevtians.style.display = "block")
    : (activeResevtians.style.display = "none");
}

// functions

const galeryImagesBackgrounds = document.querySelector(
  ".galery-images-backgrounds "
);

function showingGaleryImages(e) {
  const getTarget = e.parentNode;
  galeryImagesBackgrounds.children[0].children[0].src = e.src;
  galeryImagesBackgrounds.style.display = "block";
  galeryImagesBackgrounds.classList.add("animate-up");
  setTimeout(() => {
    getTarget.scrollIntoView({ behavior: "smooth" });
    galeryImagesBackgrounds.classList.remove("animate-up");
  }, 1);
}

function closingGalery(e) {
  e.style.display = "none";
}

// removing the salons resevtions

function removingTheResevtions(e) {
  e.parentNode.parentNode.parentNode.parentNode.parentNode.children[2].style.display =
    "block";
}

function removingTheREsevtionsBox(e) {
  e.parentNode.children[2].style.display = "none";
}
