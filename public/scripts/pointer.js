let pointer = document.querySelector(".pointer");
let outline = document.querySelector(".pointer-outline");
let customHovers = document.querySelectorAll(".custom-hover");
function followMouse(e) {
  const posX = e.clientX;
  const posY = e.clientY;

  pointer.style.left = `${posX}px`;
  pointer.style.top = `${posY}px`;
}

function followMouseOutline(e) {
  const posX = e.clientX;
  const posY = e.clientY;

  pointer.style.left = `${posX}px`;
  pointer.style.top = `${posY}px`;

  outline.style.left = `${posX}px`;
  outline.style.top = `${posY}px`;

  outline.style.height = `24px`;
  outline.style.width = `24px`;

  outline.style.transform = `translate(-50%, -50%)`;

  outline.style.padding = `0`;
  outline.style["border-radius"] = `50%`;
  outline.style["border-width"] = `1px`;

  outline.animate(
    {
      top: `${posY}px`,
      left: `${posX}px`,
    },
    { duration: 500, fill: "forwards" }
  );
}

window.addEventListener("mousemove", followMouseOutline);
window.addEventListener("mousemove", followMouse);

customHovers.forEach((el) => {
  el.addEventListener("mouseenter", function (e) {
    window.removeEventListener("mousemove", followMouseOutline);

    const { left, top, width, height } = el.getBoundingClientRect();

    outline.style.height = `${height}px`;
    outline.style.width = `${width}px`;

    outline.style.transform = `unset`;

    outline.style.padding = `20px`;
    outline.style["border-radius"] = `10px`;
    outline.style["border-width"] = `2px`;

    outline.animate(
      {
        top: `${top}px`,
        left: `${left}px`,
      },
      { duration: 250, fill: "forwards" }
    );
  });

  el.addEventListener("mouseleave", function (e) {
    window.addEventListener("mousemove", followMouseOutline);
  });
});
