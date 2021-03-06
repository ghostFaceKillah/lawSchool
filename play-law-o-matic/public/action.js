function doThings(textLines) {
  var answers = [];
  var questions = [];

  for (var i=1;i<textLines.length;i++) {
    var str_dcmp = textLines[i].split("^");
    questions.push(str_dcmp[0]);
    answers.push(str_dcmp[1]);
  };

  which = 110;

  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return react();
    }
    if(event.keyCode == 83 || event.keyCode == 40) {
      event.preventDefault();
      return showhide();
    }
    if(event.keyCode == 65 || event.keyCode == 37) {
      event.preventDefault();
      return prev();
    }
    if(event.keyCode == 68 || event.keyCode == 39) {
      event.preventDefault();
      return next();
    }
    if(event.keyCode == 82  || event.keyCode == 38 ) {
      event.preventDefault();
      return rand();
    }
  });

  $('#button').click( function () { react() });
  $('#next').click( function () { next() });
  $('#prev').click( function () { prev() });
  $('#random').click( function () { rand() });
  $('#showhide').click( function () { showhide() });

  function update(whichOne) {
    which = whichOne;
    $('#number').text( whichOne );
    $('#question').text( which+". "+ questions[whichOne] );
    $('#answer').text( answers[whichOne] );
    var ele = document.getElementById("answer");
    if(ele.style.display == "block") {
      ele.style.display = "none";
    }
  };
   
  function prev() {
     update(which-1);
  }

  function next() {
     update(which+1);
  }

  function react() {
    var input = document.forms["interm"]["letter"].value;
    update(parseInt(input));
  }

  function rand() {
    var which = Math.round(Math.random()*answers.length) - 1;
    update(which);
  };

  function showhide() {
    var ele = document.getElementById("answer");
    if(ele.style.display == "block") {
      ele.style.display = "none";
    }
    else {
      ele.style.display = "block";
    }
  };
};

//$.get('/assets/anq.txt', function(data) {
//  var textLines = data.split("*");
//  doThings(textLines);
//});

$.get('/assets/anq.txt', function(data) {
  var textLines = data.split("*");
  doThings(textLines);
});
