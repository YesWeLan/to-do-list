// Add new list
function addNewList()
{
    if ($('input').val().length != 0 && $('input').val().match(regex) && 
        $('input').val().length >= 1 && $('input').val().length <= 999)
    {
        const input = `<span onclick="barList(this)">${$('input').val()}</span>`;
        const del = '<span class="material-icons" onclick="deleteList(this)">delete</span>';   
        const list =`<li>${input}  ${del}</li>`; 

        if ($('button > span').text() == 'warning')
        {
            $('button > span').text('add_circle_outline');
            $('button > span').removeAttr('style'); 
            $('.error').css('animation', 'fadeOut var(--lin-5)');
            setTimeout(()=>
            {
                document.querySelector('.error').className = 'error';
                document.querySelector('.error').removeAttribute('style');
            },490);
        }
        $('.list').append(list);
    }
    else
    {
        if ($('input').val().length != 0)
        {
            $('.error')[0].innerHTML = '<p>Caractères autorisés:</p><b>A-Z, a-z, 0-9, ., -, \', ",  _, %, €, &, @, ,é ,è, à, î, ï, û, ü, ç</b>';
        }
        else
        {
            $('.error')[0].innerHTML = '<p>Veuillez ajouter une tache</p>';
        }

        $('button > span').text('warning').css('color', 'orangered');
        $('.error').addClass('display_error');
    }
}

// Clear input
function clearInput(e)
{
    if ($('button > span').text() != 'warning')
    {
        $('input[type="text"]').val('');
    }
}

// Bar list
function barList(e)
{
    $(e).parent().toggleClass('bar_list');
}

// Delete List
function deleteList(e)
{
    $(e).parent().css('animation', 'centerLeft var(--lin-2');
    setTimeout(()=>
    {
        $(e).parent().remove();
    }, 190);
}