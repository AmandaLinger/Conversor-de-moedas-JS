const amount = document.getElementById("amount");

//manipulando o input amount para receber apenas numeros
amount.addEventListener("input", () => {

    const hasCharactersRegex = /\D+/g

    amount.value = amount.value.replace(hasCharactersRegex, "")
})