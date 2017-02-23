var arraylinks = [].slice.call(document.querySelectorAll('a'));

function disable(arraylinks) {
    'use strict';
    arraylinks.addEventListener('click', function(event) {
        event.preventDefault();
    });
}
arraylinks.forEach(disable);
