let cursor = document.querySelector('.cursor');

let hero = document.querySelector('.hero');

function movement(e){
    cursor.style.left = e.x + 'px';
    cursor.style.top = e.y + 'px';
}

hero.addEventListener('mousemove', movement);