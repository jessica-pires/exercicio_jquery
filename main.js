


$('form').on('submit', (e) => {
    e.preventDefault();
    const novaAtividade = $('#add_tarefa').val();
    if (novaAtividade.trim() !== '') {

        $('#listaTarefas').append(`<li class="tarefas">${novaAtividade}</li>`);
        $('#add_tarefa').val(''); // Clear input field
    }
});

$('#listaTarefas').on('click', 'li',function(){
        $(this).toggleClass('efeitoLista');
    })
    