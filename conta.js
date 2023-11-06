const frm = document.querySelector("form")
const resp = document.querySelector("#outResp1")
const resp = document.querySelector("#outResp2")

let numContas = 0
let valTotal = 0
let resposta = ""

frm.addEventListener("submit",(e) =>{
    e.preventDefault()

    const descricao = frm.inDescricao.value
    const valor = Number (frm.inValor.value)

    numComtas++
    valTotal = valTotal + valor

    resposta = resposta + descricao + "-R$" + valor.toFixed(2) + "\n"

    resp1.innerText = `${resposta}-----------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$ ${valTotal.toFixed(2)}`
    
    frm.inDescricao.value = ""
    frm.inValor.value = ""
    frm.inDescricao.focus()
})