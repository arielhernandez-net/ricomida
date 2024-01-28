// Se agregan las funciones correspondientes para usar Javascript vanilla

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(function() {

    $('#enviarCorreo').click(function() {
        alert('El correo fue enviado correctamente...');
    });

   /* document.getElementById('enviarCorreo').addEventListener('click', function() {
        alert('El correo fue enviado correctamente...');
    }); */

    $('h2.cambio-color').on('dblclick', function() {
        $(this).css("color", "red");
    });

   /*  document.body.addEventListener('dblclick', function(event) {
        if (event.target.classList.contains('cambio-color')) {
            event.target.style.color = 'red';
        }
    }); */

    $(".card-title").click(function() {
        $(".card-text").toggle("slow", function() {

        });
    });

    /* document.querySelectorAll('.card-title').forEach(function(title) {
        title.addEventListener('click', function() {
            document.querySelectorAll('.card-text').forEach(function(text) {
                text.style.display = (text.style.display === 'none' || text.style.display === '') ? 'block' : 'none';
            });
        });
    }); */

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

    /* document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('[data-toggle="tooltip"]').forEach(function(element) {
            new bootstrap.Tooltip(element);
        });
    }); */

});