AOS.init();

function toggle_dark_mode() {
  let is_dark_mode = localStorage.getItem("dark_mode");
  if (is_dark_mode == "true") {
    is_dark_mode = false;
  } else {
    is_dark_mode = true;
  }
  localStorage.setItem("dark_mode", is_dark_mode);
  document.querySelector("header").classList.toggle("dark-mode", is_dark_mode);
  document
    .querySelector("main")
    .classList.toggle("main-dark-mode", is_dark_mode);
  document.querySelector("footer").classList.toggle("dark-mode", is_dark_mode);

  document.querySelectorAll(".color-background").forEach((element) => {
    element.classList.toggle("main-dark-mode", is_dark_mode);
  });
}

let button = document.querySelector(".knopka");
button.addEventListener("click", toggle_dark_mode);

function my_anime(){
  anime({
    targets: '#animetion',
    translateX: 50,
    direction: 'alternate',
    loop: true,
    delay: function(el, i, l) {
      return i * 100;
    },
    endDelay: function(el, i, l) {
      return (l - i) * 100;
    }
    }
  )
}

my_anime()

