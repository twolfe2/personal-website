$(document).ready(function() {


  $('.nav').on('click', 'li', function() {
    $('.navbar-toggle').click();
  });

  $(".card").flip();



  var colors = [
    ['#6ed4c0', '#ffffff'],
    ['#6ed4c0', '#ffffff'],
    ['#6ed4c0', '#ffffff'],
    ['#6ed4c0', '#ffffff'],
    ['#6ed4c0', '#ffffff'],
    ['#6ed4c0', '#ffffff']
  ];

  var imgPath = 'images/logos'
  var color = ['#6ed4c0', '#ffffff'];
  var logos = [imgPath+'/react.png', imgPath+'/redux.png',  imgPath+'/logo_JavaScript.png', imgPath+'/mongo.jpg', imgPath+'/angular.png',imgPath+'/html5.svg', imgPath+'/css3.svg',imgPath+'/nodejs.jpeg', imgPath+'/bootstrap.png', imgPath+'/expressjs.png', imgPath+'/socket.png', imgPath+'/mysql.png']
  var percentages = [70, 60, 80, 80, 70, 70, 80, 70, 90, 80, 40, 50];
  for (var i = 1; i <= 12; i++) {
    var child = document.getElementById('circles-' + i),
      percentage = percentages[i - 1];


    Circles.create({
      id: child.id,
      percentage: percentage,
      radius: 80,
      width: 10,
      // number:    percentage / 1,
      text: '<img class="skillLogo img-circle" src="' + logos[i - 1] + '"></img>',
      colors: color
    });
  }





});
