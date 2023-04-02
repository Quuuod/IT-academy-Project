const newAvatarContainer = document.querySelector('.newAvatar')
const newAvatar = newAvatarContainer.querySelector('input')
const avatar = document.querySelector('#avatar')
const accLogin = document.querySelector('#loginId')

const newPasswordContainer = document.querySelector('#newPasswordContainer')
const accPassword = document.querySelector('#accPassword')
const newPassword = document.querySelector('#newPassword')
const changePasswordBtn = document.querySelector('#changePassword');

function newAvatarFunc() {
    newAvatarContainer.classList.add('hidden')
    if (newAvatar.value.trim() !== '') {
        fetch("https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/" + localStorage.UserID, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    avatarUrl: newAvatar.value
                })
            }).then(res => {
                return res.json()
            })
            .then(res => {
                avatar.src = res.avatarUrl
                alert('Avatar changed!')
                getHeaderAvatar()
            });
    } else if (newAvatar.value.trim() !== '') {
        alert('You didnt insert the link')
    }
    newAvatar.value = ''
}

function checkPasswordFunc() {
    fetch("https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/" + localStorage.UserID)
        .then(res => {
            return res.json()
        })
        .then(res => {
            changePasswordBtn.classList.add('hidden')
            if (accPassword.value === res.password) {
                changePasswordBtn.classList.remove('hidden')
            } else if (accPassword.value.trim() !== '') {
                accPassword.value = ''
                alert("Invalid password ")
            }
        })

}

function changePasswordFunc() {
    fetch("https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/" + localStorage.UserID)
        .then(res => {
            return res.json()
        })
        .then(res => {
            if (newPassword.value.trim() !== '' && accPassword.value.trim() === res.password) {
                fetch("https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/" + localStorage.UserID, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            password: newPassword.value,
                        })
                    }).then(res => {
                        return res.json()
                    })
                    .then(() => {
                        accPassword.value = ''
                        newPassword.value = ''
                        changePasswordBtn.classList.add('hidden')
                        alert('Password changed!')
                    });
            } else {
                alert('Write new password!')
            }

        })

}

avatar.addEventListener('click', e => {
    newAvatarContainer.classList.remove('hidden')
})



async function getUser() {

    newAvatar.removeEventListener('blur', newAvatarFunc)
    accPassword.removeEventListener('blur', checkPasswordFunc)
    changePasswordBtn.removeEventListener('click', changePasswordFunc)

    await fetch("https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/" + localStorage.UserID)
        .then(res => {
            return res.json()
        })
        .then(res => {
            accLogin.innerText = res.login
            avatar.src = res.avatarUrl

            newAvatar.addEventListener('blur', newAvatarFunc)
            accPassword.addEventListener('blur', checkPasswordFunc)
            changePasswordBtn.addEventListener('click', changePasswordFunc)
        })
}
if (localStorage.UserID) {
    getUser()
}