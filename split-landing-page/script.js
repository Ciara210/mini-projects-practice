const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => container.classList.add('expand-left'));
left.addEventListener('mouseleave', () => container.classList.remove('expand-left'));

right.addEventListener('mouseenter', () => container.classList.add('expand-right'));
right.addEventListener('mouseleave', () => container.classList.remove('expand-right'));
