let numero = parseInt(prompt("Digite um número inteiro para iniciar a contagem regressiva:"));

while (numero >= 0) {
        console.log(`Contagem atual: ${numero}`);
        numero--;
        if (numero === 0) {
            alert('Contagem finalizada!');
            console.log('Contagem finalizada!');
        }
}

console.log("FIM da contagem!");
