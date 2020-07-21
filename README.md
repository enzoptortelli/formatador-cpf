# formatador-cpf
Esse código formata os números do CPF conforme o usuário os insere. Escrito em puro JavaScript.

<bold>Requisitos:</bold>
a \<input\> tag do CPF deve conter os atributos type="text" e maxlength="14".


É aconselhavel, mas não necessário, que se use o atributo pattern para validar a formatção do cpf.</br>
\<input type="text" required maxlength="14" pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"/\>



Como usar:
apenas modifique o argumento da função querySelector() para que ela selecione a \<input\> do CPF.

ATENÇÃO: esse código não valida o CPF, apenas o formata enquanto o usuário digita.
