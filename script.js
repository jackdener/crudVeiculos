let veiculos = [];
let encontrado;
function add() {
    let placa = document.getElementById("placa").value;
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let carro = { placa, marca, modelo };
    veiculos.push(carro);
    listar();
}
function listar() {
    let lista = document.getElementById("lista");
    let paragrafo = "";
    for (let carro of veiculos) {
        paragrafo +=
            "Placa:  " + carro.placa + "<br>" +
            "Marca:  " + carro.marca + "<br>" +
            "Modelo: " + carro.modelo + "<br>-------<br>";
    }
    lista.innerHTML = paragrafo;
}

function buscar() {
    encontrado = null;
    let placa = document.getElementById("editPlaca").value;
    for (let p = 0; p < veiculos.length; p++) {
        if (veiculos[p].placa == placa) {
            encontrado = veiculos[p];
            break;
        }
    }
    if (encontrado != null) {
        document.getElementById("editMarca").value = encontrado.marca;
        document.getElementById("editModelo").value = encontrado.modelo;
    }
    else{
        alert("Veículo não encontrado!");
    }
}
function edit(){
    if(encontrado != null){
        encontrado.marca = document.getElementById("editMarca").value;
        encontrado.modelo = document.getElementById("editModelo").value; 
    }
    else{
        alert("Veículo não encontrado!");
    }
    listar();
}
function del(){
    let placa = document.getElementById("delete").value;
    for (let p = 0; p < veiculos.length; p++) {
        if (veiculos[p].placa == placa) {
            veiculos.splice(p, 1);
            break;
        }
    }
    listar();
}