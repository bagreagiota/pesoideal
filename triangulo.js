const form = document.querySelector("form")
const resp = document.querySelector ("#outResp")
const resp1 = document.querySelector ("#outResp1")

//ouvinte

form = addEventListener("submit", (e) =>{
    e.preventDefault()

    const lado1 = Number(form.inlado1.value)
    const lado2 = Number(form.inlado2.value)
    const lado3 = Number(form.inlado3.value)
    
    if ((lado1 > lado2 + lado3) || (lado2 > lado1 + lado3) || (lado3 > lado1 + lado2)){
        alert ("Essas medidas não podem formar um triângulo. Um dos lados não pode ser maior que a soma dos outros dois") 
        form.inLado1. focus ()
        form. inLado2. focus ()
        form.inLado3. focus ()
        return
        }
    
        resp.innerText = 'Lados podem formar um triângulo'
    
    
        if(lado1 == lado2 && lado1 == lado3){
            resp1.innerText = 'Tipo: Equiátero'
        } else if((lado1 == lado2) || (lado1 == lado3) || (lado2 == lado3)){
            resp1.innerText = 'Tipo: Isóceles'
        }else{
            resp1.innerText = 'Tipo: Escaleno'
        }
    })