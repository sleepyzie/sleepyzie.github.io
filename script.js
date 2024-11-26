
const circle1 = document.querySelector('.circle1');
const circle2 = document.querySelector('.circle2');
const animationContainer = document.getElementById('animation-container');

function checkCollision() {
  const rect1 = circle1.getBoundingClientRect();
  const rect2 = circle2.getBoundingClientRect();

  return (
    rect1.left < rect2.right &&
    rect1.right > rect2.left &&
    rect1.top < rect2.bottom &&
    rect1.bottom > rect2.top
  );
}

function handleCollision() {
  if (checkCollision()) {
    circle1.style.animation = 'explosion 1s ease-in-out forwards';
    circle2.style.animation = 'explosion 1s ease-in-out forwards';
  }
}

// Add event listener to continuously check for collision
animationContainer.addEventListener('mousemove', handleCollision);
