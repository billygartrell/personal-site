  let showInfo = document.getElementById("book-template").innerHTML;
  let template = Handlebars.compile(showInfo);
  let showTemplate = template ({
    info: showData
  });

  $('#book-list').html(showTemplate);
