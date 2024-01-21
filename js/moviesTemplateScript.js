  let showInfo = document.getElementById("movie-template").innerHTML;
  let template = Handlebars.compile(showInfo);
  let showTemplate = template ({
    info: showData
  });

  $('#movie-list').html(showTemplate);
