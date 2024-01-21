  let showInfo = document.getElementById("restaurant-template").innerHTML;
  let template = Handlebars.compile(showInfo);
  let showTemplate = template ({
    info: showData
  });

  $('#restaurant-list').html(showTemplate);
