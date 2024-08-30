class Numeros {
    constructor() {
        this.numeros = [];
    }

    coletarNumeros() {
        this.numeros = [];
        for (let i = 1; i <= 8; i++) {
            let valor = document.getElementById(`num${i}`).value;
            if (valor !== "") {
                this.numeros.push(parseInt(valor));
            }
        }
        this.ordenarNumeros();
    }

    ordenarNumeros() {
        this.numeros.sort((a, b) => a - b);
    }

    buscarChave(chave) {
        let posicao = this.numeros.indexOf(chave);
        if (posicao !== -1) {
            return `A chave de busca foi encontrada na posição ${posicao + 1} na lista ordenada.`;
        } else {
            return "A chave de busca não foi encontrada nos números armazenados.";
        }
    }
}

const numerosObj = new Numeros();

function tela2() {
    let chave = parseInt(document.getElementById("chave").value);
    let resultadoTexto = numerosObj.buscarChave(chave);
    document.getElementById("resultadoTexto").innerText = resultadoTexto;
}

function exibirTela2() {
    document.getElementById("tela1").style.display = "none";
    document.getElementById("tela2").style.display = "block";
}

function exibirTela3() {
    document.getElementById("tela2").style.display = "none";
    document.getElementById("tela3").style.display = "block";
}

function reiniciar() {
    document.getElementById("tela3").style.display = "none";
    document.getElementById("tela1").style.display = "block";
    document.getElementById("form1").reset();
    document.getElementById("form2").reset();
    document.getElementById("resultadoTexto").innerText = "";
    numerosObj.numeros = [];
}