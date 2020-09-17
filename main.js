// Facciamo una chiamata ajax all'api di boolean al seguente indirizzo.
// https://flynn.boolean.careers/exercises/api/array/music
// L'api ci restituirà decina di dischi musicali che dovremo stampare a schermo con Handlebars.

// Bonus:
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo solo i corrispondenti cd.


function getAlbums(data) {
  var responseArray = data.response;

  genreAll(responseArray);
  var current = "all";

  $(".filter-button").click(function () {
    var selectValue = $(".filter-box select").val();

    if (selectValue == "all" && current != "all") {
      genreAll(responseArray);
      current = "all";
    } else if (selectValue == "pop" && current != "pop") {
      genrePop(responseArray);
      current = "pop";
    } else if (selectValue == "rock" && current != "rock") {
      genreRock(responseArray);
      current = "rock";
    } else if (selectValue == "metal" && current != "metal") {
      genreMetal(responseArray);
      current = "metal";
    } else if (selectValue == "jazz" && current != "jazz") {
      genreJazz(responseArray);
      current = "jazz";
    }

  });
}

function genreAll(responseArray) {

  $(".cds-container").html("");
  var source = $("#cd-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < responseArray.length; i++) {
    var context = responseArray[i];
    var html = template(context);
    $(".cds-container").append(html);
  }
}

function genrePop(responseArray) {

  $(".cds-container").html("");
  var source = $("#cd-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < responseArray.length; i++) {
    if (responseArray[i].genre == "Pop") {
      var context = responseArray[i];
      var html = template(context);
      $(".cds-container").append(html);
    }
  }
}

function genreRock(responseArray) {

  $(".cds-container").html("");
  var source = $("#cd-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < responseArray.length; i++) {
    if (responseArray[i].genre == "Rock") {
      var context = responseArray[i];
      var html = template(context);
      $(".cds-container").append(html);
    }
  }
}

function genreMetal(responseArray) {

  $(".cds-container").html("");
  var source = $("#cd-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < responseArray.length; i++) {
    if (responseArray[i].genre == "Metal") {
      var context = responseArray[i];
      var html = template(context);
      $(".cds-container").append(html);
    }
  }
}

function genreJazz(responseArray) {

  $(".cds-container").html("");
  var source = $("#cd-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < responseArray.length; i++) {
    if (responseArray[i].genre == "Jazz") {
      var context = responseArray[i];
      var html = template(context);
      $(".cds-container").append(html);
    }
  }
}

$(document).ready(function() {

  $(".filter-box select").val("all");

  // ajax
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
  // /ajax

});
