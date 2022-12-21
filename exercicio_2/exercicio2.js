var resposta = parseInt(Math.random()*101)
function chute(){
    var chute_numero = prompt('Insira o seu número:')
    if (chute_numero == resposta) {
        alert('Parabéns, você acertou!')
    }
    
    else {
        alert('Poxa, não foi dessa vez.')
    }
    if (chute_numero > resposta) {
        var aguardando = window.document.getElementBytagName('p')
        aguardando[0].innerText = `Você chutou` 
        
    } else {
        
    }
}
function tecla1(event) {
    if (event.key == 13)
        chute()    
}

