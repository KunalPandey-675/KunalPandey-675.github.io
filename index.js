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
console.log(clk)
clk.forEach(a => {
    a.addEventListener('click', function () {
        // let bg = document.querySelector('.que')
        // a.style.backgroundColor='red'
        let b = this.nextElementSibling
        let c = a.querySelector('.arrow')
        if (b.style.display === 'block') {
            a.style.backgroundColor='#263581'
            b.style.display = 'none'
            c.classList.remove('rotate')

            
        } else {
            a.style.backgroundColor='#243898'
            b.style.display = 'block'
            c.classList.add('rotate');
        }
    })
});