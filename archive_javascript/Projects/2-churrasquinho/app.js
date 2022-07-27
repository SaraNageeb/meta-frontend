// Carne - 400gr por pessoa + de 6horas - 650
// Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

// Capturar o Id de cada input
const inputAdultos = document.getElementById("adultos");
const inputCriancas = document.getElementById("criancas");
const inputDuracao = document.getElementById("duracao");

// Aqui vai receber o valor final apos os calculos
const resultado = document.getElementById("resultado");

// Calcular quantidade de carne por pessoa
// Se a duracao for maior ou igual a 6 retorna 650, senao 400
function carnePP(duracao) {

    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

// Calcular quantidade de cerveja por pessoa
function cervejaPP(duracao) {

    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

// Calcular quantidade de bebidas por pessoa
function bebidasPP(duracao) {

    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}

// Quando clicar em calcular, todos calculos vao ser efetuados.
function calcular() {
    const adultos = inputAdultos.value;
    const criancas = inputCriancas.value;
    const duracao = inputDuracao.value;

    const qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    const qdtTotalCerveja = cervejaPP(duracao) * adultos;
    const qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    //coloca-se o "+" após o sinal de "=" para deixar entendido que preciso imprimir mais de um innerHTML
    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} lata de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} garrafa de bebidas</p>`
}