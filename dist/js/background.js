function ready(fn) {document.readyState != 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn)}
ready (() => {
    console.log(this);

    particlesJS.load('particles-js', 'assets/particles.json');

});
