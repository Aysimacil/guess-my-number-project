

let randomNumber = Math.round(Math.random()*100)
console.log(randomNumber);

let score =10;
 

let topScore = localStorage.getItem("topScore") || 0;

document.querySelector(".top-score").textContent=topScore

document.querySelector(".check-btn").addEventListener("click", () => {
    // *Gerekli değişkenler
    const guessInput= Number(document.querySelector(".guess-input").value);
    const message = document.querySelector(".message");
    const body = document.querySelector("body");
    const checkBtn = document.querySelector(".check-btn")

    // * inputa değer girilmediyse uyarı
    if(!guessInput){
        message.innerText ="Please enter a number"
    }
    // *eğer rastgele sayı === input.value
    else if(randomNumber=== guessInput){
        message.innerHTML= `Congrats You Win <i class="fa-solid fa-medal"></i>`;
        body.className="bg-success";
        checkBtn.disabled =true;
        if(score> topScore){
            // * LocalStorage'daki topScore değişkenini güncelle
            localStorage.setItem("topScore" , score)
            // * Dom daki topScore değerini güncelle
            document.querySelector(".top-score").textContent= score;
        }
        document.querySelector(".secret-number").textContent=randomNumber
    }
    else if(guessInput > 100){
        message.innerHTML= `Please select a number between 1-100  <i class="fa-solid fa-hand-point-up"></i>`
    }
    // * eğer rastgele sayı eşit değil ise input.value
    else{
        score--;

        if(score > 0){
            guessInput > randomNumber ?
            (message.innerText="DECREASE") : (message.innerText="INCREASE")

        }else{
        message.innerHTML=`You Lost <i class="fa-regular fa-face-frown"></i>`
        body.className="bg-danger"
        checkBtn.disabled=true;
        document.querySelector(".secret-number").textContent=randomNumber;
        }
        document.querySelector(".score").textContent= score;

    }

})

// * aaain butonu
document.querySelector(".again-btn").addEventListener("click", () => {
score =10 ;
document.querySelector(".score").textContent= score;
document.querySelector(".check-btn").disabled=false;
randomNumber=Math.round(Math.random()*100)
console.log(randomNumber);
document.querySelector(".secret-number").textContent="?"
document.querySelector(".message").innerText="Starting..."
document.querySelector(".guess-input").value= ""
document.querySelector("body").classList.remove("bg-success","bg-danger")
})

document.querySelector(".guess-input").addEventListener("keydown", (i) => {
    if(i.code === "Enter"){
        document.querySelector(".check-btn").click()
    }
})

