const btn = document.getElementById("theme-toggle");
const body = document.body;

function atualizarIcone() {
  if (body.classList.contains("light-theme")) {
    btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

const temaSalvo = localStorage.getItem("tema");
if (temaSalvo === "light") {
  body.classList.add("light-theme");
}

atualizarIcone();
btn.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  const novoTema = body.classList.contains("light-theme") ? "light" : "dark";
  localStorage.setItem("tema", novoTema);
  atualizarIcone();
});
