// https://github.com/twbs/examples/tree/main/vite
// https://getbootstrap.com/docs/5.3/examples/dashboard/
// https://icons.getbootstrap.com/#usage ==> Dus kopieer SVG en plak deze in de HTML en refereer eraan met xlink...

// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const myMainNavToggler = document.getElementById('my-main-nav-toggler');
if (myMainNavToggler) {
    myMainNavToggler.addEventListener('click', function() {
        document.getElementById('my-main-nav').classList.toggle('my-main-nav-hidden');
    });
}