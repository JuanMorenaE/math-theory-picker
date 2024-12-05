const theoryList = [
  "Enunciar y demostrar el lema de Schur.",
  "Enunciar y demostrar el teorema espectral.",
  "Definir matriz definida positiva y semi-definida positiva.",
  "Enunciar y demostrar el teorema de la descomposición de una matriz en valores singulares.",
  "Definir matriz hermítica, unitaria y normal.",
  "Definir matriz diagonalizable.",
  "Si una matriz real A es diagonalizable entonces A^2 es diagonalizable?",
  "Enunciar y demostrar la desigualdad de Cauchy Shwartz.",
  "Enunciar y demostrar la desigualdad triangular para normas.",
  "Enunciar y demostrar uno de los teoremas de Gershgorin.",
  "Definir valor propio dominante de una matriz.",
  "Definir matrices semejantes.",
  "Definir norma de una matriz cuadrada y norma infinito de una matriz cuadrada.",
  "Demostrar que en una matriz unitaria los valores propios tienen modulo 1.",
  "Enunciar el teorema de la descomposición QR para una matriz A (cuadrada y no cuadrada).",
  "Probar que si son semejantes tienen mismo rango, determinante, traza y polinomio característico.",
  "Demostrar que una forma cuadrática es definida positiva si y solo si todos sus valores propios son positivos.",
]

let learnedList = []

window.addEventListener('load', (() => {
  learnedList = JSON.parse(localStorage.getItem('learnedAlgebra'))
  if (!learnedList) learnedList = []
  showTheoryData()
}))

const showTheoryData = (() => {
  const theoryContainer = document.getElementById('theory')
  const learnedContainer = document.getElementById('learned')
  const leftTheory = document.getElementById('leftTheory')
  const leftLearned = document.getElementById('leftLearned')

  theoryContainer.innerHTML = ''
  learnedContainer.innerHTML = ''

  for (theory of theoryList) {
    let listItem = document.createElement('li')
    listItem.innerHTML = `${theory}`
    listItem.classList.add('theory-item')
    listItem.setAttribute('data-theory', theory)

    if (learnedList) {
      if (!learnedList.includes(theory)) {
        listItem.style.color = '#333'
      } else {
        listItem.style.color = '#aaa'
        listItem.style.textDecoration = 'line-through'
      }
    }

    listItem.addEventListener('click', (() => {
      if (!learnedList || (learnedList && !learnedList.includes(listItem.getAttribute('data-theory')))) {
        learnedList.push(listItem.getAttribute('data-theory'))
      }
      showTheoryData()
    }))

    theoryContainer.append(listItem)
  }

  leftTheory.innerText = theoryList.length - learnedList.length
  leftLearned.innerText = learnedList.length

  if (learnedList) {
    for (theory of learnedList) {
      let listItem = document.createElement('li')
      listItem.innerHTML = `${theory}`
      listItem.classList.add('theory-item')
      listItem.setAttribute('data-theory', theory)

      listItem.addEventListener('click', (() => {
        learnedList.splice(learnedList.indexOf(listItem.getAttribute('data-theory')), 1)
        showTheoryData()
      }))

      learnedContainer.append(listItem)
    }
  }

  localStorage.setItem('learnedAlgebra', JSON.stringify(learnedList))
})


const randomPick = (() => {
  const random = document.getElementById('random')

  if (learnedList.length == 0) {
    random.innerText = ""
    return
  }

  randomNumber = Math.floor(Math.random() * (learnedList.length) + 1)
  random.innerText = learnedList[randomNumber - 1]

})
