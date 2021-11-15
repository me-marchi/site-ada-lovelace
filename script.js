document.getElementById("botao-enviar").addEventListener("click", validaFormulario);

nome = document.getElementById("nome").value
email = document.getElementById("email").value
telefone = document.getElementById("telefone").value

function validaFormulario(){
  if (nome != "" && email != "" && telefone != ""){
    alert("Prontinho! Você receberá as novidades por e-mail.")
  }else{
    alert("Por favor preencha os campos de nome, e-mail e telefone.")
  }
}