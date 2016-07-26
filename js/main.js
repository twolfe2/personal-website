$(document).ready(function() {
  

  $('.nav').on('click','li',() => {
    $('.navbar-toggle').click();
  });
 console.log('hi2');

    var colors = [
    ['#6ed4c0', '#ffffff'],
    ['#6ed4c0', '#ffffff'],
    ['#6ed4c0', '#ffffff'],
    ['#6ed4c0', '#ffffff'],
    ['#6ed4c0', '#ffffff'],
    ['#6ed4c0', '#ffffff']
  ];

  var color = ['#6ed4c0', '#ffffff'];

  var percentages = [20,70,60,80,70,70,80];
  for (var i = 1; i <= 7; i++) {
    var child = document.getElementById('circles-' + i),
      percentage = percentages[i-1];

    Circles.create({
      id: child.id,
      percentage: percentage,
      radius: 80,
      width: 10,
      // number:    percentage / 1,
      // text:       '%',
      colors: color
    });
  }



  

});