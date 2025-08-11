let button = document.querySelector('.dice-img')
let showAdvice = document.querySelector('.show-advice')
let adviceId = document.querySelector('.advice-id')

fetch('https://raw.githubusercontent.com/Sanjaynick/advice-generator/refs/heads/main/advice.json')
.then(res => res.json())
.then(data => {
   function generateRandom(){
    let randomIndex = Math.floor(Math.random() * data.advice.length)    
    return data.advice[randomIndex]
  
   }
   
   function showGenerateAdvice(){
    let showRandom = generateRandom()
    adviceId.textContent = `  # ${showRandom.id}`
    showAdvice.textContent = `"${showRandom.advice}"`
   }
   
   button.addEventListener('click', showGenerateAdvice)
})