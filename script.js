// Typing Effect
const text =
  "Frontend Developer crafting modern and responsive web experiences.";

const typingText =
  document.getElementById("typing-text");

let index = 0;

function typeEffect(){

  if(index < text.length){

    typingText.textContent += text.charAt(index);

    index++;

    setTimeout(typeEffect,50);
  }
}

window.onload = typeEffect;


// Dark Mode Toggle
const themeToggle =
  document.getElementById("theme-toggle");

themeToggle.addEventListener("click",()=>{

  document.body.classList.toggle("light");

  if(document.body.classList.contains("light")){
    themeToggle.textContent = "☀️";
  }
  else{
    themeToggle.textContent = "🌙";
  }
});


// Scroll Reveal Animation
const hiddenElements =
  document.querySelectorAll(".hidden");

window.addEventListener("scroll",()=>{

  hiddenElements.forEach((el)=>{

    const top =
      el.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      el.classList.add("show");
    }
  });
});


// Particles JS
particlesJS("particles-js", {
  particles: {
    number: {
      value: 60
    },

    color: {
      value: "#38bdf8"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.5
    },

    size: {
      value: 3
    },

    line_linked: {
      enable: true,
      distance: 150,
      color: "#38bdf8",
      opacity: 0.4,
      width: 1
    },

    move: {
      enable: true,
      speed: 2
    }
  },

  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
});