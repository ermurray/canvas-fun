const myTreesButton = document.getElementById('getMyTrees');
const newtonsApple = document.getElementById('apple');
const noisy = document.getElementById('make-noise');
const goHome = document.getElementById('go-home');
const treeCanvas = document.getElementById('fractal-trees');
const fallingApples = document.getElementById('newtonian-physics');
const audioCanvas = document.getElementById('audio-vis'); 
const home = document.getElementById('home'); 
 
// TODO: need to refactor to dry up code below
goHome.addEventListener('click', () => {
  treeCanvas.style.display = 'none';
  fallingApples.style.display = 'none';
  audioCanvas.style.display = 'none';
  home.style.display = 'block';
});

myTreesButton.addEventListener('click', () => {
  treeCanvas.style.display = 'block';
  fallingApples.style.display = 'none';
  audioCanvas.style.display = 'none';
  home.style.display = 'none';
});

newtonsApple.addEventListener('click', () => {
  treeCanvas.style.display = 'none';
  audioCanvas.style.display = 'none';
  fallingApples.style.display = 'block';
  home.style.display = 'none';
});

noisy.addEventListener('click', () =>{
  treeCanvas.style.display = 'none';
  home.style.display = 'none';
  fallingApples.style.display = 'none';
  audioCanvas.style.display = 'block';
});
