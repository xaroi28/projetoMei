const fundoPessoass = document.querySelector('.fundoPessoass');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    const imageCenterX = fundoPessoass.offsetLeft + fundoPessoass.offsetWidth / 2;
    const imageCenterY = fundoPessoass.offsetTop + fundoPessoass.offsetHeight / 2;
    
    const offsetX = (mouseX - imageCenterX) / 20;
    const offsetY = (mouseY - imageCenterY) / 20;
    
    fundoPessoass.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});
