//cotação da moeda do dia
const USD = 5.34;
const EUR = 6.18;
const CNY = 0.75;
const ARS = 0.0037;
const JPY = 0.034;




const form = document.querySelector("form");

const amount = document.getElementById("amount");
const coin = document.getElementById("coin");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

//manipulando o input amount para receber apenas numeros
amount.addEventListener("input", () => {

    const hasCharactersRegex = /\D+/g;

    amount.value = amount.value.replace(hasCharactersRegex, "")
})


//capturando o evento de submite do formulário
form.onsubmit = (event) => {
    event.preventDefault();
    switch (coin.value){
        case "USD": 
            convertCoin(amount.value, USD,"US$")
            break;

        case "EUR":
            convertCoin(amount.value,EUR,"€")
            break;

        case "CNY":
            convertCoin(amount.value, CNY,"¥")
            break;

        case "JPY":
            convertCoin(amount.value, JPY,"¥")
            break;
    }
}

//função para converter a moeda
function convertCoin (amount, price,symbol){
    try{
        //exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCoinBRL(price)}`

        let total = amount * price

        //verifica se o resultado não é um número
        if(isNaN(total)){
            return alert ("Por favor, digite o valor corretamente para converter")
        }

        //formatar o valor total
        total = formatCoinBRL(total).replace("R$", "")

        //substitui o valor no html pela variavel total
        result.textContent = `${total} Reais`;

        //aplica a classe que exibe o footer
        footer.classList.add("show-result")
    }catch (error){
        console.log(error)
        footer.classList.remove("show-result")
        alert("Não foi possível converter. Tente novamente mais tarde")
    }
}


//formata a moeda em real brasileiro
function formatCoinBRL(value){
    return Number(value).toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL"
    })
}