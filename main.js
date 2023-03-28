$(document).ready(function(){
    $('#telefone').mask('(00) 0000-0000');
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#cep').mask('00000-000');
});

$('form').validate ({
    rules: {
        nome: {
            required: true,
        },
        email: {
            required: true, 
            email: true
        },
        telefone: {
            required: true,
        },
        enderecoCompleto: {
            required: true,
        },
        cpf: {
            required: true,
        },
        cep: {
            required: true,
        },
        mensagem: {
            required: true,
        }
    },

    messages: {
        nome: 'Por favor, insira o seu nome'
    },

    invalidHandler: function(evento, validador) {
        let composIncorrentos = validador.numberOfInvalids();
        console.log(composIncorrentos)
        if (composIncorrentos) {
            alert(`Existem ${composIncorrentos} campos incorretos`)
        }
    }
})