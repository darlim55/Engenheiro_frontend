// instancia jquery e evita conflitos

// jQquery(function($){
$(document).ready(function () {

    $(".owl-carousel").owlCarousel();

    let titulos = $('h4') // tag

    let itens = $('.featured-item') // class

    let destaques = $('#featured') //id

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')

    $('.featured-item a').addClass('btn btn-danger')
})

