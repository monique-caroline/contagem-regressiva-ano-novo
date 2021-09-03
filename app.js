//Obter e armazenar a referência do elemento que exibe os segundos
const secondsContainer = document.querySelector('#seconds')

//Obter e armazenar a referência do elemento que exibe os minutos
const minutesContainer = document.querySelector('#minutes')

//Obter e armazenar a referência do elemento que exibe a hora
const hoursContainer = document.querySelector('#hours')

//Obter e armazenar a referência do elemento que exibe o dia
const daysContainer = document.querySelector('#days')

const nextYearContainer = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')

//Ober o próximo ano para o qual a contagem será feita
const nextYear = new Date().getFullYear() + 1

//Interpolação para atualizar o ano de forma dinâmica
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

nextYearContainer.textContent = nextYear

//Criar e invocar uma função update para atualizar o contador
const updateCountdown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime

//Obter a quantidade de dias, horas, minutos e segundos que faltam para a chegada do próximo ano
    const days = Math.floor(difference / 1000 / 60 / 60 / 24) 
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60


    //Inserir os segundos dentro do h2 e inserir um ternário para os segundos abaixo de 10, para 2 dígitos
    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds

    minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
    hoursContainer.textContent = hours < 10 ? '0' + hours : hours
    daysContainer.textContent = days < 10 ? '0' + days : days

}


//Método setTimeout - que invoca uma função no tempo que eu especificar (depois de 1s o spinner será removido da tela)
//Essa função está removendo um elemento da tela e fazendo com que um contador seja exibido (exibição da contagem regressiva)
const handleCountdownDisplay = () => {
    spinnerLoading.remove()
    countdownContainer.style.display = 'flex'
}

setTimeout(handleCountdownDisplay, 1000)

//Método que invoca uma função repetidamente e a repetição da invocação dessa função acontece no intervalo que for especificado
setInterval(updateCountdown, 1000)