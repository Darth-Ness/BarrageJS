function bind(toBind, element) {
    toBind.addEventListener('change', function() {
        document.getElementById(element).innerHTML = toBind;
    })
}