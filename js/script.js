//Activate links from Header.html

const links = document.querySelectorAll(".header-navbar-item");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("active");
  }
}

links.forEach(ativarLink);

//Activate items from Budget.html

const parameters = new URLSearchParams(location.search);

function activateProduct(parameter) {
  const element = document.getElementById(parameter);
  if (element) {
    element.checked = true;
  }
}

parameters.forEach(activateProduct);

//F.A.Q

const questions = document.querySelectorAll(".faq button");

function activateQuestion(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("active");
  const active = answer.classList.contains("active");
  question.setAttribute("aria-expanded", active);
}

function quentionsEvents(quention) {
  quention.addEventListener("click", activateQuestion);
}

questions.forEach(quentionsEvents);

//Bikes Gallery

const gallery = document.querySelectorAll(".main-nimbus-container-images img");
const galleryContainer = document.querySelector(
  ".main-nimbus-container-images"
);

function changeImage(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galleryContainer.prepend(img);
  }
}

function galleryEvent(img) {
  img.addEventListener("click", changeImage);
}

gallery.forEach(galleryEvent);

//Plugin Animation Origamid

if (window.SimpleAnime) {
  new SimpleAnime();
}
