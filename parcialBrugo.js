// ejercicio UNO

let variable1 = 100;
let variable2 = 20;
let variable3 = 30;

function comparacionDeNumeros(primerParametro, segundoParametro, tercerParametro){
    if(primerParametro>segundoParametro){
        console.log (segundoParametro*tercerParametro)
    } 
    if(segundoParametro % 2 == 0){
        console.log(`${segundoParametro} es par`)
    }
    if((primerParametro + segundoParametro + tercerParametro) % 3 == 0){
        console.log (`La suma de estos tres números es múltiplo de 3`)
    }
}
comparacionDeNumeros(variable1, variable2, variable3);

// ejercicio DOS

let personal = {
    nombre: "sofia",
    apellido: "brugo",
    edad:23,
    estaEmpleado:false, 
}
function empleados(){
    if(personal.edad > 18 && personal.estaEmpleado === true){
        console.log(`${personal.nombre} ${personal.apellido} está empleado y es mayor de edad`)
    } else if (personal.edad > 18 && personal.estaEmpleado === false){
        console.log(`${personal.nombre} ${personal.apellido} NO está empleado y es mayor de edad.`)
    } else if(personal.edad < 18 && personal.estaEmpleado === false){
        console.log(`${personal.nombre} ${personal.apellido} NO está empleado y NO es mayor de edad.`)
    }
}
empleados();

// ejercicio TRES

let autos = [{
    marca: 'Toyota',
    anio: 2022,
    color: 'rojo'
},
{
    marca: 'Renault',
    anio: 2020,
    color: 'gris'
},
{
    marca: 'Peugeot',
    anio: 2021,
    color: 'rojo'
},
{
    marca: 'Fiat',
    
    anio: 2019,
    color: 'negro'
}]

autos.pop();
console.log(autos);

function recorrerArray(arr){
    let autosNuevos=[]
    for(i=0; i<arr.length; i++){
        if(arr[i].anio > 2019){
            autosNuevos.push(arr[i]);
        }
    } 
    return autosNuevos;
}
console.log(recorrerArray(autos));