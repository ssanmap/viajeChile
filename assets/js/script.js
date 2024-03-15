$(document).ready(function () {
    $("#Enviar").click(function () {
        alert("Su mensaje fue enviado correctamente. ¡Vamonos!");
    });

    $(".col-4").dblclick(function () {
        $(this).css({
            "color": "green",
        });
    });


    $(".titulo").dblclick(function () {
        $(".fotos").toggle();
    });

});