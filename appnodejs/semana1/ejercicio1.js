
const sumar=(n1,n2)=>{    
    
    let suma=n1+n2;
    console.log(`la suma entre ${n1} y ${n2} es ${suma}`);

}
const resta=(n1,n2)=>{    
    
    let restar=n1-n2;
    console.log(`la resta entre ${n1} y ${n2} es ${restar}`);

}
const multi=(n1,n2)=>{    
    
    let multi=n1*n2;
    console.log(`la multiplicacion entre ${n1} y ${n2} es ${multi}`);

}
const dividir=(n1,n2)=>{    
    
    let dividir=n1/n2;
    console.log(`la division entre ${n1} y ${n2} es ${dividir}`);

}

/*exports.sumar=sumar;
exports.restar=resta;
exports.multi=multi;
exports.dividir=dividir;*/


//sumar(4,4)

const operaciones={}

operaciones.sumar=sumar
operaciones.restar=resta
operaciones.multi=multi
operaciones.dividir=dividir

module.exports=operaciones
