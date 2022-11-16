export default function btnTop() {
    const btn = document.querySelector('.btn-to-top');

    btn.addEventListener('click', function () {
        window.scrollTo(0, 0);
    })

    window.addEventListener('scroll', function() {
        btn.hidden = (scrollY < document.documentElement.clientHeight);
    });
}
