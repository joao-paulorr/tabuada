function tabuar() {
    let numero = Number(document.querySelector("#numero").value)
    let adicao = document.querySelector("#ad")
    let subtracao = document.querySelector("#sub")
    let multiplicacao = document.querySelector("#mult")
    let divisao = document.querySelector("#div")

    for(i=0;i<=10;i++) {
        soma = numero + i
        sub = i + numero
        mult = numero * i
        div = i / numero
        adicao.innerHTML += numero + " + " + i + " = " + soma + "<br>"
        subtracao.innerHTML += sub + " - " + numero + " = " + i + "<br>"
        multiplicacao.innerHTML += numero + " &#215 " + i + " = " + mult + "<br>"
        divisao.innerHTML += div + " &#xf7 " + numero + " = " + i + "<br>"
    }
}