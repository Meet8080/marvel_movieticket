var i = 0;
var imagefiles = [
  'marvel.jpg',
  'avenger.jpg',
  'avenger3.png',
  'ironman1.jpg',
  'allhero.jpg',
];
window.setInterval(startSlider, 2000);

function startSlider() {
  document.getElementById('topimg').src = './image/' + imagefiles[i];
  i++;
  if (i > 4) {
    i = 0;
  }
}
