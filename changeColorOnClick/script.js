const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const texrdiv = document.getElementById("texrdiv");

function onClick(event) {
  if (event.target === btn) {
    texrdiv.classList.remove('text-yellow-700');
    texrdiv.classList.add('text-red-400');

  } else if (event.target === btn1) {
    texrdiv.classList.remove('text-red-400');
    texrdiv.classList.add('text-yellow-400');
  }
}

btn.addEventListener("click", onClick);
btn1.addEventListener("click", onClick);
