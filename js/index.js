$(function() {
    $('[data-toggle="popover"]').popover()
    $('[data-toggle="tooltip"]').tooltip()
    $('.carousel').carousel({
        interval: 3000
    })

    $('#contacto').on('show.bs.modal', function(e) {
        console.log('el mensaje se esta mostrando')

        $('#contactoBtn').removeClass('btn-outline-success')
        $('#contactoBtn').prop('disabled', true)
    })
    $('#contacto').on('shown.bs.modal', function(e) {
        console.log('el mensaje se mostro')
    })
    $('#contacto').on('hide.bs.modal', function(e) {
        console.log('el mensaje se oculta')
    })
    $('#contacto').on('hidden.bs.modal', function(e) {
        console.log('el mensaje se oculto')
        $('#contactoBtn').prop('disabled', false)
        $('#contactoBtn').addClass('btn-outline-success')
    })
})