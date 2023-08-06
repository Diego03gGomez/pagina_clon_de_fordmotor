$(document).ready(function () {
   


let card1 = $(".card1");
let card2 = $(".card2");
let card3 = $(".card3");
let card4 = $(".card4");
let card5 = $(".card5");
let card6 = $(".card6");



card2.hide();
card3.hide();
card4.hide();
card5.hide();
card6.hide();



let link1 = $(".titulo_fondo2").find("h4").eq(0);
let link2 = $(".titulo_fondo2").find("h4").eq(1);
let link3 = $(".titulo_fondo2").find("h4").eq(2);
let link4 = $(".titulo_fondo2").find("h4").eq(3);
let link5 = $(".titulo_fondo2").find("h4").eq(4);
let link6 = $(".titulo_fondo2").find("h4").eq(5);



$(link1).click(function (e) { 
    e.preventDefault();
$(".normal").removeClass("celeste");

$(this).addClass("celeste");

card1.fadeIn(200);
card2.hide() ;
card3.hide()  ;
card4.hide();
card5.hide();
card6.hide();  
});

$(link2).click(function (e) { 
    e.preventDefault();
    $(".normal").removeClass("celeste");

    $(this).addClass("celeste");

card1.hide();
card2.fadeIn(200) ;
card3.hide()  ;
card4.hide();
card5.hide();
card6.hide();  
});
$(link3).click(function (e) { 
    e.preventDefault();
    $(".normal").removeClass("celeste");

    $(this).addClass("celeste");

card1.hide();
card2.hide() ;
card3.fadeIn(200)  ;
card4.hide();
card5.hide();
card6.hide();  
});

$(link4).click(function (e) { 
    e.preventDefault();
    $(".normal").removeClass("celeste");

    $(this).addClass("celeste");

card1.hide();
card2.hide() ;
card3.hide()  ;
card4.fadeIn(200);
card5.hide();
card6.hide();  
});
$(link5).click(function (e) { 
    e.preventDefault();
    $(".normal").removeClass("celeste");

    $(this).addClass("celeste");

card1.hide();
card2.hide() ;
card3.hide()  ;
card4.hide();
card5.fadeIn(200);
card6.hide();  
});
$(link6).click(function (e) { 
    e.preventDefault();
    $(".normal").removeClass("celeste");

    $(this).addClass("celeste");

card1.hide();
card2.hide() ;
card3.hide()  ;
card4.hide();
card5.hide();
card6.fadeIn(200);  
});



$(".icono_menu").click(function (e) { 
    e.preventDefault();

$(".menu_oculto").toggle();
    
    
});


$(".menu_oculto").hide();



$(".usuario").hide();

$(".icono_usuario").click(function (e) { 
    e.preventDefault();
$(".usuario").slideToggle();   
});


$(".fondo_oculto").hide();


$(".buscar").click(function (e) { 
    e.preventDefault();
$(".fondo_oculto").fadeIn() 
});

$(".cerrar_buscador").click(function (e) { 
    e.preventDefault();
    $(".fondo_oculto").fadeOut();
});


});