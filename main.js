// Facciamo una chiamata ajax all'api di boolean al seguente indirizzo.
// https://flynn.boolean.careers/exercises/api/array/music
// L'api ci restituirà decina di dischi musicali che dovremo stampare a schermo con Handlebars.

// Bonus:
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo solo i corrispondenti cd.


function getAlbums(data) {
  var responseArray = data.response;
  console.log(responseArray);

  var source = $("#cd-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < responseArray.length; i++) {
    var context = responseArray[i];
    var html = template(context);
    $(".cds-container").append(html);
  }
}

$(document).ready(function() {

  $.ajax(
    {
      "url": "https://flynn.boolean.careers/exercises/api/array/music",
      "method": "GET",
      "success": function (data, state) {
        getAlbums(data);
      },
      "error": function (request, state, errors) {
        alert("error");
      }
    }
  );

});
