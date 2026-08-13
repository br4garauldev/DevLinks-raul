function toggleTheme() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./rb-light.jpg")
  } else {
    // se tiver sem light mode, mantenet a imagem normal
    img.setAttribute("src", "./rb.jpg")
  }
}
