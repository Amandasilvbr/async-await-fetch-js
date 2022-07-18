/* ASYNC E AWAIT

-As funções assíncronas funcionam como promises, mas com sintaxe mais cimples

*/

function firstFunciton() {
    return new Promise((resolve, reset) => {
        setTimeout((time) => {
            console.log("Esperou 1 segundo")
            resolve()
        }, 100);
    })
}

async function secondFunction() {
    console.log(`Iniciou`)
    await firstFunciton()
    console.log(`Terminou`)
}

secondFunction()

// Nesse caso, a função secondFunction espera a primeira função ser executada para continuar e escrever "Terminou"



