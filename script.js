function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light_mode")
  /*buscando tag da imagem */
  const img = document.querySelector("#profile img")
  /*Substituição da Imagem*/
  if (html.classList.contains("light_mode")) {
    /*Se Tiver Light Mode,adicionar imagem light*/
    img.setAttribute("src", "./Assets/avatar-light.png")
  } else {
    /*Se tiver sem light mode, manter a imagem normal*/
    img.setAttribute("src", "./Assets/avatar.png")
  }
}
