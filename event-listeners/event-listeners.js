
var pictures = ['./imgs/dog.jpg','./imgs/photo1.jpeg','./imgs/photo2.jpeg','./imgs/photo3.jpeg','./imgs/photo4.jpeg','./imgs/photo5.jpeg'];
var currentIndex = 0;
var photos=document.getElementsByTagName('img')

photos[0].addEventListener('click', showNextPicture)
function showNextPicture() {
  currentIndex++;
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }
  photos[0].src=pictures[currentIndex]
  


}
