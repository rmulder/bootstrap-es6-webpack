import '../sass/style.sass';
import 'bootstrap';

$('body').prepend('<h2>Prepend using jQuery</h2>');

$(function () {
    $('[data-toggle="popover"]').popover()
})