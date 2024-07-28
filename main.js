$('form').on('submit', function(evento) {
    evento.preventDefault();

    const novaTarefa = $('#nome-tarefa').val();

    const novaLinhaLista = $(`<li class="novaTarefa"></li>`);

    const botaoTarefa = $(`<a>${novaTarefa}</a>`).appendTo($('<div></div>').appendTo(novaLinhaLista));

    novaLinhaLista.on('click', function() {
        $(this).find('a').toggleClass('tarefaRealizada');
    });

    $(novaLinhaLista).appendTo('ul');

    $('#main-titulo').fadeIn(200, function() {
        $(novaLinhaLista).fadeIn(500);
    });

    $('#nome-tarefa').val('');
});