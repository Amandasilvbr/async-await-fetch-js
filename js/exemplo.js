
// Exemplo prático: pegando dados de uma API

fetch('https://api.github.com/users/amandasilvbr')
    .then((data) => {
       return data.json()
    })
    .then(async(data) => {
        console.log(`Nome: ${data.name}`)
    })

// Com o fetch, deve-se passar para json e depois manipular os dados

   