const theoryList = [
  "Defina normas equivalentes.",                                                                                                                          // Normas
  "Defina norma en Rn.",                                                                                                                                  // Normas

  "Demostrar que si f es diferenciable en p entonces f es continua en p.",                                                                                // Diferenciabilidad
  "Demostrar que si f es diferenciable en p entonces existe df/dv(p) para todo v que pertenece a R^n no nulo y df/dv(p) = diferencial de f en p (v).",    // Diferenciabilidad
  "Enuncie y demuestre la condición suficiente de diferenciabilidad.",                                                                                    // Diferenciabilidad
  "Enuncie y demuestre la condición suficiente de diferenciabilidad para el caso de una función de dos variables.",                                       // Diferenciabilidad

  "Enuncie y demuestre la regla de la cadena.",                                                                                                           // Regla de la Cadena
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
