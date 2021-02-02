$(document).ready(function(){
    var textoAgregado = "Este texto fue agregado";
    /* --------------.data-------------------- */
    $("#boton-agregar").click(function(){
        
        $("#parrafo-data").append(textoAgregado);
    });
    $("#boton-data").click(function(){
        $("#boton-data").after("<p>" + textoAgregado + "</p>");
    });
    
    /* --------------.addClass---------------- */
    $("#boton-add-class").click(function(){
        $("#parrafo-add-class").addClass("text-danger");
    });

    /* --------------.slideToggle--------------*/
    $("#boton-toggle").click(function(){
        $("#gatito-toggle").slideToggle(800);
    });
    
    /* --------------.append----------------   */
    $("#boton-append").click(function(e){
        e.preventDefault();
        $("#parrafo-append").append("Lorem ipsum dolor sit amet consectetur adipisicing elit Praesentium sed quae ipsa illum eveniet recusandae saepe dolor autem Nam labore repellat, alias accusamus officia eos molestiae minima quod ex placeat");
    });

    /* --------------.val--------------------  */
    $("#boton-val").click(function(){
        var palabraIngresada = $("#input-val").val();
        $("#boton-val").before("<p>" + palabraIngresada + "</p>");
    });

    /* --------------.fadeIn & .fadeOut------  */
    $("#boton-fadein").click(function(){
        $("#gatito-fade").fadeIn(1000);
    });
    $("#boton-fadeout").click(function(){
        $("#gatito-fade").fadeOut(1000);
    });

    /* --------------.focus------------------- */
    $("#boton-focus").click(function(){
        $("#input-focus").focus();
    });

    /* --------------.hide & .show---------- - */
    $("#boton-hide").click(function(){
        $("#parrafo-hide").hide(800);
    });
    $("#boton-show").click(function(){
        $("#parrafo-hide").show(800);
    });

    /* --------------.slideUp & .slideDown---- */
    $("#boton-slideup").click(function(){
        $("#parrafo-slide").slideUp(1000);
    });
    $("#boton-slidedown").click(function(){
        $("#parrafo-slide").slideDown(1000);
    })
})