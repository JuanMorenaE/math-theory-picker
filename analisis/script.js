const theoryList = [
  "Enunciar y demostrar la Regla de la Cadena",
  "Enunciar y demostrar el criterio de Hess",
  "Enunciar y demostrar una condición suficiente de diferenciabilidad",
  "Si f es diferenciable en el punto a, probar que f es continua en a",
  "Se considera una función diferenciable => Probar que existen todas las derivadas parciales f en el punto a",
  "Enuncie y demuestre la condición necesaria de existencia de extremos relativos para el caso de una función de n variables",
  "Demuestre que si una función f: R² -> R es diferenciable entonces existen las derivadas parciales en cualquier punto (a; b)",
  "Se considera una función diferenciable => Si f tiene un extremo relativo en a probar que a es un punto estacionario de f",
]

let learnedList = []

window.addEventListener('load', (() => {
  learnedList = JSON.parse(localStorage.getItem('learned'))
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
      if (!learnedList.includes(theory))
        listItem.style.color = '#333'
      else {
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

  localStorage.setItem('learned', JSON.stringify(learnedList))
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
