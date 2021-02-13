window.onload = function(){
    document.getElementById("btn").addEventListener("click", calcular);
}
        
        function calcular(){
        var actual = document.getElementById("actual").value;
        var anterior = document.getElementById("anterior").value;
        var pagar =Number(((parseInt(actual) - parseInt(anterior)) * 0.65).toFixed(2));
        document.getElementById("respuesta").innerHTML = "Total a pagar S/ "+pagar;
        
    } 