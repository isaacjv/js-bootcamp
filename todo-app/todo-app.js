
const pscan = document.querySelectorAll('p');
pscan.forEach(function (p) {
    if(p.textContent.toLowerCase().includes('the')) {
        p.remove();
    }
})