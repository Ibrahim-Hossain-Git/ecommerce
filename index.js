/*hamburger menu clickable*/
const bar = document.getElementById('bar');  /*hambarg er id nilam(bar)*/
const close = document.getElementById('close'); /*close navbar by cross*/ 
const nav = document.getElementById('navbar'); /*navbar er id nilam (navbar(mediaquery te))*/

if (bar) {
    bar.addEventListener('click', () => {  /*bar paile click kore active korbo*/
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {  /*close paile click kore remove korbo*/
        nav.classList.remove('active');
    })
}