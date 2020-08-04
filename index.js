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

/*
var InformacionGeneral = database.ref('MiWeb/InformacionGeneral/');

InformacionGeneral.once('value', function(snapshot) {
    var info = snapshot.val()

    cadena=""
    for(var i in info){
        var elem=info[i]


        cadena+="<li> "+"Nombre Completo: "+ elem.nombreCompleto2+"<br>"
        cadena+="Email: "+ elem.email+"<br>"
        cadena+="Telefono: "+ elem.telefono+"<br>"
        cadena+="Edad: "+ elem.edad+"<br>"
        cadena+="Direccion: "+ elem.direccion+"<br>"
        cadena+="Disponibilidad Horaria: "+ elem.disponibilidad+"<br>"
        cadena+="</li>"
    }

    $(".info").html(cadena)

    console.log(info);
});
*/


console.log("hola mundo");

var InformacionGeneral = database.ref('MiWeb/InformacionGeneral/-MDqdApzpEWp9Yhwf9Bq');

InformacionGeneral.once('value', function(snapshot) {
    var info = snapshot.val()

    $(".nombreCompleto2").text("Nombre Completo: " + info.nombreCompleto2)
    $(".email2").text("Email: " + info.email2)
    $(".telefono2").text("Telefono: " + info.telefono2)
    $(".edad2").text("Edad: " + info.edad2)
    $(".direccion2").text("Dirección: " + info.direccion2)
    $(".disponibilidad").text("Disponibilidad Horaria: " + info.disponibilidad)

    $(".info").html(cadena)

    console.log("hola mundo");
    console.log(info);
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

      console.log(experiencia);
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

      console.log(formacion);
   
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

      console.log(idioma);
   
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
