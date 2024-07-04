const theoryList = [
  "La descomposición A=LDU es única. Caso particular cuando A es simétrica.",
  "Definición de matriz invertible, unicidad de la inversa.",
  "Definición de matriz singular y no singular.",
  "Teorema: A cuadrada invertible si y solo si es no singular.",
  "Definición de base, conjunto LI, LD y generador de un espacio vectorial.",
  "Teorema: Si V es un espacio vectorial, B un generador de V con m vectores. Si A es un subconjunto de V con n>m entonces A es LD. Deducir que todas las bases de V tienen la misma cantidad de vectores.",
  "Definición de espacio vectorial y subespacio vectorial.",
  "Definición de los 4 subespacios fundamentales. Demostraciones de cómo hallar las bases de los 4 subespacios.",
  "Definición de transformación lineal.",
  "Definición de matriz asociada a una TL.",
  "Definición de núcleo e imagen de una TL.",
  "Teorema: Dada una transformación lineal F entre dos espacios vectoriales de dimensión finita, pruebe que la relación entre las coordenadas de un vector y las coordenadas de su transformado está dada por la multiplicación por una matriz (asociada de A)",
  "Teorema: una transformación lineal F es biyectiva si y solo si transforma bases en bases.",
  "Definición de determinante.",
  "Pruebe que una matriz triangular el determinante es el producto de las entradas diagonales.",
  "Pruebe que el determinante de un producto de matrices es el producto de los determinantes.",
  "Pruebe que el determinante de una matriz y su traspuesta son iguales.",
]

let learnedList = []

window.addEventListener('load',(() => {
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

  localStorage.setItem('learnedAlgebra', JSON.stringify(learnedList))
})


const randomPick = (() => {
  const random = document.getElementById('random')

  randomNumber = Math.floor(Math.random() * (learnedList.length) + 1)
  random.innerText = learnedList[randomNumber - 1]
})
