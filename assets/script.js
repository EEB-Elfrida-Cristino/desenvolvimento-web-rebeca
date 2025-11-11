const resposta = document.getElementById("feedback")
const btn = document.getElementById("btn")

btn.addEventListener("click", function() {

  window.alert("Você foi ouvido, muito obrigada pelo comentário!")
})

const fundo = [
  "lightblue",
  "red",
  "plum",
  "lightyellow",
  "lightgray"
]

const cor =  document.getElementById("cor")

cor.addEventListener("click", function() {

  const corAleatoria = fundo[Math.floor(Math.random() * fundo.length)]
  console.log(corAleatoria)

  document.body.style.backgroundColor = corAleatoria
})