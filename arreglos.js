let edadesIzquierdo = []; // Así se crea un arreglo
let edadesDerecho = [];

function agregarEdad() {

    let edad = parseInt(document.getElementById("edad").value);
    if (!isNaN(edad) && edad > 0) {
        edadesIzquierdo.push(edad);
        pintarArregloIzquierda();
        document.getElementById("edad").value = "";
    } else {
        alert("POR FAVOR INGRESA UN NÚMERO VÁLIDO MAYOR A 0");
    }
    
    pintarArregloIzquierda();

}

function eliminarIzquierdo(indice){
    edadesIzquierdo.splice(indice, 1);
    pintarArregloIzquierda();
}

function pintarArregloIzquierda(){
    let tbody = document.getElementById("tablaIzquierda");
    let contenidoTabla = "";
    let edadRecuperada;

    for (let i=0; i<edadesIzquierdo.length; i++){
        edadRecuperada = edadesIzquierdo[i];
        contenidoTabla+="<tr>"; 
        contenidoTabla+="<td>"+edadRecuperada+"</td>";
        contenidoTabla+="<td><button class='btn-eliminar'onclick='eliminarIzquierdo("+ i +")'>Eliminar</button></td>";
        contenidoTabla+="<td><button class='btn-mover' onclick='moverHaciaDerecha("+ i +")'>➜</button></td>";
        contenidoTabla+="</tr>"; 
    }
    tbody.innerHTML = contenidoTabla;
}

function pintarArregloDerecha(){
    let tbody = document.getElementById("tablaDerecha");
    let contenidoTabla = "";
    let edadRecuperada;

    for (let i=0; i<edadesDerecho.length; i++){
        edadRecuperada = edadesDerecho[i];

        contenidoTabla += "<tr>";
        contenidoTabla += "<td><button class='btn-mover' onclick='moverHaciaIzquierda("+ i +")' >⬅</button></td>";
        contenidoTabla += "<td>" + edadRecuperada+ "</td>";
        contenidoTabla += "<td><button class='btn-eliminar' onclick='eliminarDerecho(" + i + ")' >Eliminar</button></td>";
        contenidoTabla += "</tr>";
    }
    tbody.innerHTML = contenidoTabla;

}

function eliminarDerecho(indice){
    edadesDerecho.splice(indice,1);
    pintarArregloDerecha();
}

function moverHaciaDerecha(indice){
    let edadRecuperada = edadesIzquierdo[indice];
    edadesDerecho.push(edadRecuperada);
    edadesIzquierdo.splice(indice, 1);
    pintarArregloIzquierda();
    pintarArregloDerecha();
}

function moverHaciaIzquierda(indice){
    let edadRecuperada = edadesDerecho[indice];
    edadesIzquierdo.push(edadRecuperada);
    edadesDerecho.splice(indice, 1);
    pintarArregloDerecha();
    pintarArregloIzquierda();
}


