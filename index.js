document.getElementById('boton1').addEventListener("click", function() {
    botones('anchor1');
});

document.getElementById('boton2').addEventListener("click", function() {
    botones('anchor2');
});

document.getElementById('boton3').addEventListener("click", function() {
    botones('anchor3');
});

document.getElementById('boton4').addEventListener("click", function() {
    botones('anchor4');
});

function botones(anchor) {
    document.getElementById(anchor).scrollIntoView();
}



var database = firebase.database();

var InformacionGeneral = database.ref('MiWeb/InformacionGeneral/-MDqdApzpEWp9Yhwf9Bq');

InformacionGeneral.once('value', function(snapshot) {
    var info = snapshot.val()

    $(".nombreCompleto2").text("Nombre Completo: " + info.nombre)
    $(".email2").text("Email: " + info.email)
    $(".telefono2").text("Telefono: " + info.telefono)
    $(".edad2").text("Edad: " + info.edad)
    $(".direccion2").text("Dirección: " + info.direccion)
    $(".disponibilidad").text("Disponibilidad Horaria: " + info.disponibilidad)

    $(".info").html(cadena)
});



var experienciaLaboral = database.ref('MiWeb/experienciaLaboral/');

experienciaLaboral.once('value', function(snapshot) {
    var experiencia = snapshot.val()


      cadena=""
      for(var i in experiencia){
          var elem=experiencia[i]


          cadena+="<li> "+"Trabajo: "+ elem.academia+"<br>"
          cadena+="Empresa: "+ elem.nombre+"<br>"
          cadena+="Duración: "+ elem.duracion+"<br>"
          cadena+="</li>"
      }

      $(".experiencia").html(cadena)
});


var database = firebase.database();
var estudios = database.ref('MiWeb/estudios/');

estudios.once('value', function(snapshot) {
    var formacion = snapshot.val()

       cadena=""
      for(var i in formacion){
          var elem=formacion[i]
          cadena+="<li> "+"Academia: "+ elem.academia+"<br>"
          cadena+="Formación: "+ elem.nombre+"<br>"
          cadena+="Duración: "+ elem.duracion+"<br>"

          cadena+="</li>"
      }
      $(".formacion").html(cadena)   
});






var idiomas = database.ref('MiWeb/idiomas/');

idiomas.once('value', function(snapshot) {
    var idioma = snapshot.val()

       cadena=""
      for(var i in idioma){
          var elem=idioma[i]
          cadena+="<li> "+"Idioma: "+ elem.idioma+"<br>"
          cadena+="Nivel: "+ elem.nivel+"<br>"

          cadena+="</li>"
      }
      $(".idioma").html(cadena)   
});






$("#anchor4").hover(function(){
    $(this).css("font-size", "45px");
    }, function(){
    $(this).css("font-size", "30px");
  });



$(".pieDePagina").click((evento)=>{
    $(".formulario").show()
})
$(".Submit").click((evento)=>{
    var texto=$(".name").val()
    var texto1=$(".lastName").val()
    var texto2=$(".phone").val()
    var texto3=$(".mail").val()

    $(".reemplazar").text("contacto "+texto +" "+texto1 +" "+texto2 +" "+texto3)
})
