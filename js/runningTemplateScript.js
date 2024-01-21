  let showInfo = document.getElementById("running-template").innerHTML;
  let template = Handlebars.compile(showInfo);
  let showTemplate = template ({
    info: showData
  });

  $('#running-list').html(showTemplate);
