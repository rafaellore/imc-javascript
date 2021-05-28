// Function escopo serve para rodar tudo, perceba que estou chamando ela no final do codigo
function Escopo(){
  // Declaração do form aqui, já que se declarasse dentro do calculo ela não
  // iria existir
  const form = document.querySelector('.form');

  function CalculoImc(event){
    event.preventDefault();
    
    const resultado = form.querySelector('.resultado');
    const peso = form.querySelector('#input-teste-1');
    const altura = form.querySelector('#input-teste-2');

    imc = peso.value /(altura.value * altura.value);
    imc = imc.toFixed(2);

    if(isNaN(imc) === true){
      resultado.innerHTML=`<p class="red">Número inválido.<p>`;
    }else if(imc >= 18.5 && imc <= 24.9){
      resultado.innerHTML=`<p class="green">Peso normal: ${imc}<p>`;
    }else if(imc >= 25 && imc <= 29.9){
      resultado.innerHTML=`<p class="yellow">Sobrepeso: ${imc}<p>`;
    }else if(imc >= 30 && imc <= 34.9){
      resultado.innerHTML=`<p class="red">Obesidade grau 1: ${imc}<p>`;
    }else if(imc >= 35 && imc <= 39.9){
      resultado.innerHTML=`<p class="red">Obesidade grau 2: ${imc}<p>`;
    }else if(imc > 40){
      resultado.innerHTML=`<p class="red">Obesidade grau 3: ${imc}<p>`;
    }
  }
  form.addEventListener('submit', CalculoImc);
}
Escopo();
