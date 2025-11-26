const form = document.querySelector("form")

const amount = document.getElementById("amount");
const coin = document.getElementById("coin")

//manipulando o input amount para receber apenas numeros
amount.addEventListener("input", () => {

    const hasCharactersRegex = /\D+/g;

    amount.value = amount.value.replace(hasCharactersRegex, "")
})


//capturando o evento de submite do formulário
form.onsubmit = (event) => {
    event.preventDefault();
    console.log(coin.value)
}