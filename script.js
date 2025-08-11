let button = document.querySelector('.dice-img')
let showAdvice = document.querySelector('.show-advice')
let adviceId = document.querySelector('.advice-id')

fetch('http://localhost:3000/advice')
.then(res => res.json())
.then(data => {
   function generateRandom(){
    let randomIndex = Math.floor(Math.random() * data.length)
    return data[randomIndex]
  
   }
   function showGenerateAdvice(){
    let showRandom = generateRandom()
    adviceId.textContent = `  # ${showRandom.id}`
    showAdvice.textContent = `"${showRandom.advice}"`
   }
    
   button.addEventListener('click', showGenerateAdvice)
})