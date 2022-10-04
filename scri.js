function sumar() {
    let n1 = parseFloat(document.getElementById('valor1').value);
    let n2 = parseFloat(document.getElementById('valor2').value);
    let guardar = document.getElementById('Result').innerHTML = ('La suma es:'+ (n1+n2));
    localStorage.setItem('Suma',guardar); 
    document.getElementById('formi').reset();
    alert('Se guardo en el localStorage');

    return guardar;
}

function dividir() {
    let n1 = parseFloat(document.getElementById('valor1').value);
    let n2 = parseFloat(document.getElementById('valor2').value);
    let guardar = document.getElementById('Result').innerHTML = ('La divicion es:'+ (n1+n2));
    localStorage.setItem('Divicion',guardar); 
    alert('Se guardo en el localStorage');
    document.getElementById('formi').reset();
    return guardar;
}
function restar() {
    let n1 = parseFloat(document.getElementById('valor1').value);
    let n2 = parseFloat(document.getElementById('valor2').value);
    let guardar = document.getElementById('Result').innerHTML = ('La resta es:'+ (n1+n2));
    localStorage.setItem('Resta',guardar); 
    alert('Se guardo en el localStorage');
    document.getElementById('formi').reset();
    return guardar;
}
function multiplicacion() {
    let n1 = parseFloat(document.getElementById('valor1').value);
    let n2 = parseFloat(document.getElementById('valor2').value);
    let guardar = document.getElementById('Result').innerHTML = ('La multiplicacion es:'+ (n1+n2));
    localStorage.setItem('Multiplicacion',guardar); 
    alert('Se guardo en el localStorage');
    document.getElementById('formi').reset();
    return guardar;
}

