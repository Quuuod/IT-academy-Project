const newAvatarContainer = document.querySelector('.newAvatar')
const newAvatar = newAvatarContainer.querySelector('input')
const avatar = document.querySelector('#avatar')

avatar.addEventListener('click', e=>{
    newAvatarContainer.classList.remove('hidden')
})
newAvatar.addEventListener('blur', e =>{
    e.preventDefault()
    newAvatarContainer.classList.add('hidden')
    if(newAvatar.value.trim() !== ''){
            avatar.src = newAvatar.value
    }
    newAvatar.value = ''
})