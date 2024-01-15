// $(document).ready(function(){
//     $('form button').on('submit',(e)=>{
//         e.preventDafault()
//     const novaAtividade =  $('input').val();
//     const novoItem = $('<li></li>');
//     $('li').appendTo(novaAtividade)
//     $(novoItem).appendTo('ul')
//     })
// })
// $('form').on('submit' , (e)=>{
//         e.preventDefault();
//         const novaAtividade = $('#add_tarefa').val();
        

//         $(`
//             <ul id="listaTarefas">
//                 <li class="tarefas">${novaAtividade}</li>
//             </ul>
        
//         `).appendTo('ul');

        
    
//         $('#add_tarefa').val('');
//     });




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
    