// Nosso cliente utiliza apenas o fetch padrão do Java Script, e nele capturamos o stream
// do corpo da resposta, através de getReader. Em seguida, os blocos são lidos, à medida
// em que são enviados pelo servidor, até que não haja mais dados e o atributo done de
// readResult se torne verdadeiro.

fetch('http://localhost:3000/measurements.json')
    .then(async (response) => {
        const reader = response.body.getReader();
        let readResult, i = 0;
        do {
            readResult = await reader.read();
            if (readResult.value)
                console.log(`Blocos lidos: ${++i}`);
        } while (!readResult.done)
    });