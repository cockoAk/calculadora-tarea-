function calcular(operador) 
{
    var x = parseFloat(document.getElementById('x').value) || 0;
    var y = parseFloat(document.getElementById('y').value) || 0;
    var resultado;
    
    switch (operador) 
    {
        case '+': resultado = x + y; break;
        case '-': resultado = x - y; break;
        case '*': resultado = x * y; break;
        case '/': resultado = y !== 0 ? x / y : 'Error'; break;
    }
    
    document.getElementById('resultado').textContent = resultado;
    guardarHistorial(x, operador, y, resultado);
}

function guardarHistorial(num1, operador, num2, resultado) 
{
    var historial = JSON.parse(localStorage.getItem('historial')) || [];
    var operacion = `${num1} ${operador} ${num2} = ${resultado}`;
    historial.push(operacion);
    localStorage.setItem('historial', JSON.stringify(historial));
    mostrarHistorial();
}

function mostrarHistorial() 
{
    var historial = JSON.parse(localStorage.getItem('historial')) || [];
    var listaHistorial = document.getElementById('listaHistorial');
    listaHistorial.innerHTML = '';
    historial.forEach(function(operacion) {
        var li = document.createElement('li');
        li.textContent = operacion;
        listaHistorial.appendChild(li);
    });
}

function limpiarHistorial() 
{
    localStorage.removeItem('historial');
    mostrarHistorial();
}

document.addEventListener('DOMContentLoaded', mostrarHistorial);