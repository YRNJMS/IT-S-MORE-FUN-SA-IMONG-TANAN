let title = document.getElementById('title');
let subtitle = document.getElementById('subtitle');
let p = document.getElementById('coco1');
let coco1 = document.getElementById('coco1');
let coco2 = document.getElementById('coco2');
let terraces = document.getElementById('terraces');
let terraces1 = document.getElementById('terraces1');
let sky = document.getElementById('sky');
let text = document.getElementById('divider');
let nav = document.getElementById('nav')
window.addEventListener('scroll', function(){
    let value = window.scrollY;

    title.style.marginTop = value * 2.5 + 'px';
    title.style.opacity = (-value / 150) + 1; 
    subtitle.style.marginLeft = value * -1.0 + 'px';
    subtitle.style.opacity = (-value / 150) + 1; 
    coco1.style.top = value *-1.5 + 'px';
    coco1.style.left = value * 0.4 + 'px';
    coco2.style.top = value *-1.5 + 'px';
    coco2.style.left = value * -0.5 + 'px';
    terraces.style.top = value * -1.5 + 'px'
    terraces1.style.top = value * -1.6 + 'px'
    divider.style.top = value * -1.3 + 'px'
    sky.style.transform = `scale(${1 + (0.5 * value / 1000)})`;
    sky.style.top = value *-1.5 + 'px'
    sky.style.left = value *-0.2 + 'px'
    p.style.marginTop = value *-2.5 + 'px'
    nav.style.marginRight = value *1.5 + 'px'
});
