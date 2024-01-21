  let showInfo = document.getElementById("series-template").innerHTML;
  let template = Handlebars.compile(showInfo);
  let showTemplate = template ({
    info: showData
  });

  $('#series-list').html(showTemplate);
