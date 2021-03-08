const Math = {};

function add(x1, x2){
    return x1+x2
}


function substract(x1, x2){
    return x1-x2
}

function multiply(x1, x2){
    return x1*x2
}

function divide(x1, x2){
    if(x2 === 0){
        return ('No se puede dividir por 0')
    }
    else{
        return x1/x2
    }
}

Math.add = add;
Math.substract = substract;
Math.divide = divide;
Math.multiply = multiply;

module.exports = Math; //(Exporta todo de un objeto)
//exports.nombre = assdasdas (EXPORTA UNA PROPIEDAD DEL OBJECTO)