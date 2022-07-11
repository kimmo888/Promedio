const lista1 = new Array();// array donde se guardan los datos

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(//en ves de for se utiliza un método utilizando una function anónima
    function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//% esta function captura los datos en el array-----------------
function pushArray(){
    const datosArray = document.getElementById("InputArray").value;

    const convertirValor = parseInt(datosArray);
    lista1.push(convertirValor);
    console.log(lista1);
    document.getElementById("InputArray").value = ""; //para que los valores de los inputs se borren
    document.getElementById("table").innerHTML += '<tbody><td>'+ convertirValor ;
}
function submitForm(event){
    event.preventDefault();
}


function calcularPromedio(){
    const calcular = calcularMediaAritmetica(lista1);
    const resultadoPromedio = document.getElementById("promedioCalculado");
    resultadoPromedio.innerText = "EL Promedio de los valores es : " + calcular;
}