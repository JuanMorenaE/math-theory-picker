const theoryList = [
  "Criterio del Cociente de D'Alembert y Cauchy.",
  "Existencia y unicidad de soluciones en ecuaciones diferenciales.",
  "Condición necesaria de convergencia.",
  "Teorema fundamental del cálculo integral.",
  "Raíz n-ésima en números complejos.",
  "Integración por partes y por sustitución para primitivas.",
  "e^z = 1 => z = 2kπi y z = 2kπi => e^z = 1",
  "Primer Criterio de Comparación de impropias de primera especie.",
  "Demostrar que el conjunto solución de una ecuación diferencial lineal homogénea de segundo orden o orden n es subespacio y su dimensión.",
  "Convergencia Dominada y Convergencia Absoluta.",
  "Criterio de Leibnitz.",
  "Criterio de Comparación para Series.",
]

let learnedList = []

window.addEventListener('load',(() => {
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

  for (theory of theoryList){
    let listItem = document.createElement('li')
    listItem.innerHTML = `${theory}`
    listItem.classList.add('theory-item')
    listItem.setAttribute('data-theory', theory)

    if(learnedList){
      if(!learnedList.includes(theory)){
        listItem.style.color = '#333'
      }else{
        listItem.style.color = '#aaa'
        listItem.style.textDecoration = 'line-through'
      }
    }

    listItem.addEventListener('click', (() => {
      if(!learnedList || (learnedList && !learnedList.includes(listItem.getAttribute('data-theory')))){
        learnedList.push(listItem.getAttribute('data-theory'))
      }
      showTheoryData()
    }))
    
    theoryContainer.append(listItem)
  }

  leftTheory.innerText = theoryList.length - learnedList.length
  leftLearned.innerText = learnedList.length

  if(learnedList){
    for (theory of learnedList){
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

  randomNumber = Math.floor(Math.random() * (learnedList.length) + 1)
  random.innerText = learnedList[randomNumber - 1]
})
