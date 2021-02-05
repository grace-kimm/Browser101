"use strict";

const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  tag.style.left = `${x + 10}px`;
  tag.style.top = `${y - 20}px`;
  tag.innerHTML = `${x}px, ${y}px`;
});
