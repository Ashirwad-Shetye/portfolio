let links = document.querySelectorAll(".project-item");
let linkImages = document.querySelector(".hover-reveal__img");

links.forEach((link, idx) => {
  link.addEventListener("mousemove", (e) => {
    link.children[1].getElementsByClassName.opacity = 1;
    link.children[0].style.zIndex = 3;
    link.children[1].style.transform = `translate(${e.clientX - 300})px, - ${
      e.clientY / 3
    }px rotate(${e.clientX / 20}deg)`;
  });
});
