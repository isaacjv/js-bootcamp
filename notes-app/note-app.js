// DOM - Document Object Model

// Query and remove
// const p = document.querySelector('p');
// p.remove();

// Query and remove all
const ps = document.querySelectorAll('p');
ps.forEach(function (p) {
    p.textContent = '***XXX***';
    //console.log(p.textContent);
    //p.remove();
})