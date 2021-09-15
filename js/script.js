const regex = /^[A-Za-z 0-9.\-'"_%€&@éèàîïûüç]*$/;

$(document).ready(clearInput);

$('form').click((e)=>
{
    e.preventDefault();
})