let contagem = 0;
let numero = parseInt(prompt('Digite um número inteiro para iniciar a contagem progressiva:'));
if (isNaN(numero) || numero < 1) {
    alert('Por favor, digite um número inteiro positivo maior que 0.');

} else {
        while (contagem != numero) {
        console.log(`Contagem atual: ${contagem}`);
        contagem++;
        }
        // Agora a contagem chegou ao número 
        console.log(`Contagem atual: ${numero}`);
        console.log('Contagem progressiva concluída!');
    }