jQuery(document).ready(function() { 
    $("#revertible").hide();
    $( document ).tooltip();
    $( ".datepicker" ).datepicker();
    $( "#number" ).selectmenu().selectmenu( "menuWidget" );
    $( ".menu" ).menu();
    $( "#tabs" ).tabs();

    var ciudadAutocomplete;
    var ciudadesSpain = ["Madrid, España", "Barcelona, España", "Bilbao, España", "Sevilla, España", "Valencia, España", "Málaga, España"];
    var ciudadesFrancia = ["París, Francia", "Estrasburgo, Francia", "Burdeos, Francia", "Marsella, Francia", "Niza, Francia", "Nantes, Francia"];
    var ciudadesInglaterra = ["Londres, Inglaterra", "Cambridge, Inglaterra", "Nottingham, Inglaterra", "Liverpool, Inglaterra", "Manchester, Inglaterra", "Oxford, Inglaterra"];
    var ciudadesPortugal = ["Lisboa, Portugal", "Oporto, Portugal", "Braga, Portugal", "Setubal, Portugal", "Amadora, Portugal", "Coimbra, Portugal"];
    var ciudadesBrasil = ["Rio de Janeiro, Brasil", "Sao Paulo, Brasil", "Fortaleza, Brasil", "Belo Horizonte, Brasil", "Porto Alegre, Brasil", "Maceio, Brasil"];
    var ciudadesCanada = ["Toronto, Canada", "Montreal, Canada", "Calgary, Canada", "Ottawa, Canada", "Edmonton, Canada", "Mississauga, Canada"];
    var ciudadesEEUU = ["Nueva York, E.E.U.U.", "Los Ángeles, E.E.U.U.", "Chicago, E.E.U.U.", "Houston, E.E.U.U.", "Miami, E.E.U.U.", "Boston, E.E.U.U."];
    var ciudadesMexico = ["Ciudad de México, México", "Ecatepec, México", "Guadalajara, México", "Puebla, México", "Juárez, México", "Tijuana, México"];
    var ciudadesChina = ["Shanghai, China", "Pekín, China", "Cantón, China", "Shenzhen, China", "Tianjin, China", "Hong Kong, China"];
    var ciudadesIndia = ["Bombay, India", "Delhi, India", "Bangalore, India", "Calcuta, India"];
    var ciudadesRusia = ["Moscú, Rusia", "San Petersburgo, Rusia", "Saratov, Rusia", "Rostov del don, Rusia", "Samara, Rusia", "Volgogrado, Rusia"];
    $(".Spain").click({ciudades: ciudadesSpain},autocompletar);
    $(".Francia").click({ciudades: ciudadesFrancia},autocompletar);
    $(".Inglaterra").click({ciudades: ciudadesInglaterra},autocompletar);
    $(".Portugal").click({ciudades: ciudadesPortugal},autocompletar);
    $(".Brasil").click({ciudades: ciudadesBrasil},autocompletar);
    $(".Canada").click({ciudades: ciudadesCanada},autocompletar);
    $(".EEUU").click({ciudades: ciudadesEEUU},autocompletar);
    $(".Mexico").click({ciudades: ciudadesMexico},autocompletar);
    $(".China").click({ciudades: ciudadesChina},autocompletar);
    $(".India").click({ciudades: ciudadesIndia},autocompletar);
    $(".Rusia").click({ciudades: ciudadesRusia},autocompletar);

    $( "#BTNelegir").button().click(mostrarDrag);
    $( "#dialog" ).dialog();
    $( ".draggable" ).draggable();
    $("#revertible").draggable({
        revert: true
    });
    $( "#droppable" ).droppable({
        drop: function( event, ui ) {
            $( this )
                .addClass( "ui-state-highlight" )
                .find( "p" )
                .html( "Viaje escogido!" );
            $("#dialog").html($("#revertible").html());
            $( "#dialog" ).dialog();
        }
    });
    $( "#BTNelegido" ).click(function(){
        $( "#dialog" ).dialog();
    });
});
    
function autocompletar(event){
    $( ".tags" ).autocomplete({
        source: event.data.ciudades
    });
}
function mostrarDrag(){
    var options = { percent: 100 };
    $( "#revertible" ).show( "scale", options, 500, llenarDrag );
}

function llenarDrag(){
    var options = { to: "#revertible", className: "ui-effects-transfer" };
    $( "#numPasajeros" ).effect( "transfer", options, 500, callback0 );
}

function callback0(){
    $( "#revertible" ).html("<p><strong>Viaje escogido:</strong> para " + $("#number").val() + " personas");
    var options = { to: "#revertible", className: "ui-effects-transfer" };
    $( "#fechaSalida" ).effect( "transfer", options, 500, callback1 );
}

function callback1() {
    $( "#revertible" ).append("<p>Fecha de salida: " + $( "#fechaSalida" ).val() + "<p>");
    var options = { to: "#revertible", className: "ui-effects-transfer" };
    $( "#fechaVuelta" ).effect( "transfer", options, 500, callback2 );  
};

function callback2() {
    var options = { to: "#revertible", className: "ui-effects-transfer" };
    if($( "#fechaVuelta" ).val()){
        $( "#revertible" ).append("<p>Fecha de vuelta: " + $( "#fechaVuelta" ).val() + "<p>");
    }else{
        $( "#revertible" ).append("<p>Sin fecha de vuelta.<p>");
    }
    $( "#ciudadOrigen" ).effect( "transfer", options, 500, callback3 );
};

function callback3() {
    var options = { to: "#revertible", className: "ui-effects-transfer" };
    $( "#revertible" ).append("<p>Desde: " + $( "#ciudadOrigen" ).val() + "<p>");
    $( "#ciudadDestino" ).effect( "transfer", options, 500, callback4 );
};

function callback4() {
    var options = { to: "#revertible", className: "ui-effects-transfer" };
    $( "#revertible" ).append("<p>Hasta: " + $( "#ciudadDestino" ).val() + "<p>");
};

