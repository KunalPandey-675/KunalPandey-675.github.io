let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("imgs");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

const clk = document.querySelectorAll('.que')
clk.forEach(a => {
    a.addEventListener('click', function () {
        // let bg = document.querySelector('.que')
        // a.style.backgroundColor='red'
        let b = this.nextElementSibling
        let c = a.querySelector('.arrow')
        if (b.style.display === 'block') {
            a.style.backgroundColor = '#263581'
            b.style.display = 'none'
            c.classList.remove('rotate')


        } else {
            a.style.backgroundColor = '#243898'
            b.style.display = 'block'
            c.classList.add('rotate');
        }
    })
});
let h = document.querySelector('.ham img')
h.addEventListener('click', function () {
    if (h.getAttribute('src') === 'imgs/ham.svg') {
        let bg = document.querySelector('.hmenu')
        bg.style.left = '0'
        h.src = 'imgs/cross.svg'
    }
    else {
        let bg = document.querySelector('.hmenu')
        bg.style.left = '-100%'
        h.src = 'imgs/ham.svg'
    }
})
let c = document.querySelectorAll('.pop')
c.forEach(e => {
    e.addEventListener('click', async function () {
        let p = document.querySelector('.popup')
        setTimeout(() => {
            p.style.opacity = '1'
            // p.style.top = '40px'
            p.style.bottom = '40px'
        }, 100);
        setTimeout(() => {
            console.log('js is running')
            p.style.opacity = '0'
            // p.style.top = '-100px'
            p.style.bottom = '-100px'
        }, 1200);
    })
});
