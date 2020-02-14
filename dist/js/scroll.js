function ready(fn) {document.readyState != 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn)}
ready (() => {

    const navbarOffset = 65;

    function scrollTo(element) {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: element.offsetTop - navbarOffset,
        });
        console.log(scroll);
    }

    document.getElementById('scroll-about').addEventListener('click', event => {
        event.preventDefault();
        scrollTo(document.getElementById('about'));
    })

    document.getElementById('scroll-contact').addEventListener('click', event => {
        event.preventDefault();
        scrollTo(document.getElementById('contact'));
    })

    document.getElementById('scroll-portfolio').addEventListener('click', event => {
        event.preventDefault();
        scrollTo(document.getElementById('portfolio'));
    })

});
