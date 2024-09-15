const theoryList = [
  "Sea V un espacio vectorial. Demuestre que un conjunto ortogonal k vectores no nulos de V, es un conjunto LI.",
  "Si B es ortogonal => Se cumple el teorema de pitagoras.",
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
