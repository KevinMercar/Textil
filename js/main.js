(function ($) {
    "use strict";
    
    // Desplegable al pasar el ratón
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                // Mostrar el menú desplegable al pasar el ratón
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    // Ocultar el menú desplegable al salir del área
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                // Desactivar la funcionalidad de desplegable al cambiar el tamaño de la ventana
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    // Botón de regreso arriba
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            // Mostrar el botón al hacer scroll hacia abajo
            $('.back-to-top').fadeIn('slow');
        } else {
            // Ocultar el botón al estar en la parte superior
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        // Animación de desplazamiento suave al hacer clic en el botón
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Carrusel de proveedores
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });

    // Carrusel relacionado
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });

    // Cantidad de producto
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            // Incrementar la cantidad al hacer clic en el botón de suma
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Decrementar la cantidad al hacer clic en el botón de resta
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        // Actualizar el valor de la cantidad
        button.parent().parent().find('input').val(newVal);
    });
    
})(jQuery);


