createLoader ()

window.addEventListener('load', loaderWait)

function loaderWait() {
    setTimeout(() => {
        if(document.querySelector('.loader__mask')){
            document.querySelector('.loader__mask').remove()
        }
    }, 1000)
}

function createLoader () {
    const loaderMask = document.createElement('div')
    loaderMask.classList.add('loader__mask')
    loaderMask.innerHTML = '<div class="loader"></div>';
    document.body.prepend(loaderMask)
}