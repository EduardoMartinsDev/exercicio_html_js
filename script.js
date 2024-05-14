document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
    
    // Obtém os valores dos campos A e B
    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);
    
    // Verifica se o número B é maior que o número A
    if (campoB > campoA) {
        var mensagem = "Formulário válido! B é maior que A.";
        document.getElementById("mensagem").innerText = mensagem;
        document.getElementById("mensagem").style.color = "green";
        alert(mensagem); // Exibe um alerta com a mensagem
    } else {
        var mensagem = "Formulário inválido! B deve ser maior que A.";
        document.getElementById("mensagem").innerText = mensagem;
        document.getElementById("mensagem").style.color = "red";
        alert(mensagem); // Exibe um alerta com a mensagem
    }
});
