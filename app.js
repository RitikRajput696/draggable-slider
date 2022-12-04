const tabsBox = document.querySelector('.tabs-box');
const arrowIcons = document.querySelectorAll('.icon i');

let isDragging = false;

arrowIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    // if clicked icon is left, reduce 350 from tabsbox scrollLeft else add
    tabsBox.scrollLeft += icon.id === 'left' ? -350 : 350;
  });
});

function dragging(e) {
  if (!isDragging) return;
  tabsBox.classList.add('dragging');
  tabsBox.scrollLeft -= e.movementX;
}

function dragStop() {
  isDragging = false;
  tabsBox.classList.remove('dragging');
}

tabsBox.addEventListener('mousedown', () => {
  isDragging = true;
});
tabsBox.addEventListener('mousemove', dragging);

document.addEventListener('mouseup', dragStop);
