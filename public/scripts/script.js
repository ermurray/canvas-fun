
  const myTreesButton = document.getElementById('getMyTrees');
  const newtonsApple = document.getElementById('apple');
  const treeCanvas = document.getElementById('fractal-trees');
  const fallingApples = document.getElementById('newtonian-physics')
  
  myTreesButton.addEventListener('click', () => {
    treeCanvas.style.display = 'block';
    fallingApples.style.display = 'none';
  });

  newtonsApple.addEventListener('click', () => {
    treeCanvas.style.display = 'none';
    fallingApples.style.display = 'block';
  })
