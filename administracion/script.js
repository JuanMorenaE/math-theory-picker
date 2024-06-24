const theoryList = [
  "Productividad",
"Formas de aumentar la productividad",
"Tipos de productividad",
"Ventajas y limitaciones de la productividad parcial",
"Cultura organizacional",
"Medición de la productividad ventajas",
"Incremento de la productividad",
"Productividad de trabajo contenido de trabajo según la OIT importante",
"Amenazas a la productividad de trabajo importante",
"Prospectiva definición según los esquemas y la actitud",
"Planificación prospectiva",
"Metodología prospectiva",
"Peter Drucker planeamiento y su clasificación",
"Russell Ackof planeamiento tipología del planeamiento junto a los tipos de personas",
"McKinsey línea del tiempo",
"Matrices BCG, McKinsey, Yip y de Porter",
"Tipología de las variaciones junto a la opinión de Charles François",
"Barreras de salida de entrada fuerzas competitivas",
"Normas de calidad",
"Brecha de planeamiento",
"Estrategias según Quinn Andrews",
"Planeamiento según Bolan, Drucker, Weick, Ackoff y Normann",
"Estrategias emergentes deliberadas y reales junto a gráfico",
"Jerarquía de planeamiento",
"Objetivo según Friedrich, Friedman, Argenti, Ansoff, Galbraith",
"Estrategia y efectividad funciones de trabajo",
"Los valores en la estrategia de Reich",
"Tres habilidades del management",
"Network, tela de araña, organización invertida, Starbucks, cluster y conclusiones",
"El sistema de control",
"El diseño del sistema de control",
"Características y especificaciones del control según Peter Drucker",
"El proceso de control y los estándares",
"Diferencia entre empresas multinacionales y globales",
"Qué es la globalización sus aspectos positivos y negativos",
"Métodos para la evaluación. Diferencia entre el VAN y el TIR",
"La administración como ciencia técnica y arte",
"Gobierno corporativo",
"Mecanismo coordinadores",
"Partes de organización",
"Funcionamiento o sistema de la organización",
"Diseño de los puestos de trabajo",
"Diferencia entre capacitación y adoctrinamiento",
"Diseño de la superestructura",
"Dispositivos de enlace",
"Descentralización en cinco",
"Factores situacionales o de contingencia",
"Tendencias",
"Configuraciones estructurales",
]

let learnedList = []

window.addEventListener('load',(() => {
    learnedList = JSON.parse(localStorage.getItem('learnedAdmin'))
    if (!learnedList) learnedList = []
    showTheoryData()
}))

const showTheoryData = (() => {
  const theoryContainer = document.getElementById('theory')
  const learnedContainer = document.getElementById('learned')

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

  localStorage.setItem('learnedAdmin', JSON.stringify(learnedList))
})


const randomPick = (() => {
  const random = document.getElementById('random')

  randomNumber = Math.floor(Math.random() * (learnedList.length) + 1)
  random.innerText = learnedList[randomNumber - 1]
})
