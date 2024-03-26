document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});


document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && (event.key === 'u' || (event.shiftKey && event.code === 'KeyI'))) {
        event.preventDefault();
        alert('Viewing page source is disabled.');
        window.close();
    }
});

