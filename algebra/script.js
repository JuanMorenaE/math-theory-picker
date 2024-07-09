const theoryList = [
  "Definir la función determinante aplicada a matrices n x n.",
  "Probar que A es invertible si solo si det(A) != 0 y dar una formula para det(A^T).",
  "Probar que si A es una matriz n x n entonces det(A) = det(A^T).",
  "Probar que el determinante de una matriz diagonal es el producto de los elementos que integran su diagonal.",
  "Probar que el determinante de una matriz triangular es el producto de los elementos que integran su diagonal.",
  "Probar que si A, B son matrices n x n, entonces det(AB) = det(A) x det(B).",
  "Si A y B son matrices 3 x 3 tales que det(A) = 2 y det(B) = -3, hallar det(2A^-1B^T).",
  "Si {w1, w2, ..., wm} es generador de un cierto espacio vectorial V, probar que cualquier conjunto con más de m vectores es LD.",
  "Deducir que si V es un espacio vectorial de dimension finita, todas las bases tienen la misma cantidad de vectores.",
  "Si U es un conjunto LI ¿Qué le ocurre si le quitamos un elemento? Demostrar.",
  "Si U es un conjunto LI ¿Qué le ocurre si le agregamos un elemento? Demostrar.",
  "Dado un espaio vectorial de dimencion finita V. Definir Conjunto LD, Conjunto LI, Generador y Base de V.",
  "Probar que un conjunto es LD si solo si alguno de sus vectores es combinacion lineal de los restantes.",
  "Si U es un conjunto generador de un espacio vectorial, ¿Qué le ocurre si le agregamos un elemento? Demostrar.",
  "Si U es un conjunto generador de un espacio vectorial, y le quito un vector, enunciar y demostrar el comportamiento en cuanto a si sigue siendo generador o no.",
  "Si se sabe que dim(V) = n y U es un conjunto con n vectores LI, ¿es base de V?",
  "Deducir una formula que permita calcular la distancia de un punto P que pertenece a R3, a un plano pi.",
  "Defina matriz invertible y matriz inversa para una matriz A n x n",
  "Puebe que la inversa de A es única.",
  "Pruebe que A es no singular si y solo si A es invertible.",
  "Si A es una matriz 3 x 3 no singular, pruebe que existe matrices P de permutacion, L de triangular inferior con 1 en la diagonal, y U triangular superior, tales que PA = LU.",
  "Si A es una matriz m x n, defina el rango r y el espacio nulo N(A), y pruebe que la dimensión de N(A) es n - r.",
  "Definición de transformación lineal.",
  "Sea una F:V->W una transformacion lineal entre dos espacios vectoriales V y W de dimensión finita, con bases Bv = {v1, ..., vn} y Bw = {w1, ..., wm} dadas. Pruebe que la relación entre las coordenadas de un vector y las coordenadas de su transformado está dada por una matriz.",
  "Sea una F:V->W una transformacion lineal, y Bv = {v1, ..., vn} una base de V, pruebe que si F es biyectiva entonces el conjunto {F(v1), ..., F(vn)} es base de W",
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
  
  if(learnedList.length == 0){
    random.innerText = ""
    return
  }
  
  randomNumber = Math.floor(Math.random() * (learnedList.length) + 1)
  random.innerText = learnedList[randomNumber - 1]
  
})
