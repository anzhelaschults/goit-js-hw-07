function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
function createBoxes(amount) {
  const boxes = document.querySelector('#boxes');
  boxes.innerHTML = '';
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    const size = 30 + i * 10;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.display = 'inline-block';
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}
function destroyBoxes() {
  document.querySelector('#boxes').innerHTML = '';
}
const input = document.querySelector('#controls input');
document.querySelector('[data-create]').addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) return;
  createBoxes(amount);
  input.value = '';
});
document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);
