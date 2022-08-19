// você deve mudar #NOME para que a função querySelector selecione a <input> do cpf em seu site.

document.querySelector('#NOME').addEventListener('input', event => {
  if(event.inputType !== 'deleteContentBackward') { //caso esse if não estivesse aqui, o usuário não iria conseguir apagar os pontos e o traço.
    if(cpfInput.value.length == 3) cpfInput.value += '.';
    if(cpfInput.value.length == 7) cpfInput.value += '.';
    if(cpfInput.value.length == 11) cpfInput.value += '-';
  }
});
