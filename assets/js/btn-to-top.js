export default function btnTop() {
    const btn = document.querySelector('.btn-to-top');
    
    window.addEventListener('scroll', function() {
        window.scrollY > document.documentElement.clientHeight ? btn.style.display = "block" : btn.style.display = "none";
    });

    btn.addEventListener('click', function () {
        window.scrollTo(0, 0);
    })
}