const newAvatarContainer = document.querySelector('.newAvatar')
const newAvatar = newAvatarContainer.querySelector('input')
const avatar = document.querySelector('#avatar')
const accLogin = document.querySelector('#loginId')

const newPasswordContainer = document.querySelector('#newPasswordContainer')
const accPassword = document.querySelector('#accPassword')
const newPassword = document.querySelector('#newPassword')
const changePasswordBtn = document.querySelector('#changePassword');

async function newAvatarFunc() {
    try {
        createLoader ()
        newAvatarContainer.classList.add('hidden')
        if (newAvatar.value.trim() !== '') {
            await fetch(newAvatar.value, {
                    method: 'HEAD',
                    mode: 'no-cors'
                })
                .then(function () {
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
                })
                .catch(function () {
                    alert('URL is not valid');
                });
        } else if (newAvatar.value.trim() !== '') {
            alert('You didnt insert the link')
        }
        newAvatar.value = ''
    } catch (error) {
        throw (error)
    } finally {
        loaderWait()
    }

}

function checkPasswordFunc() {
    try {
        createLoader ()
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
    } catch (error) {
        throw (error)
    } finally {
        loaderWait()
    }


}

function changePasswordFunc() {
    try {
        createLoader ()
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

    } catch (error) {
        throw (error)
    } finally {
        loaderWait()
    }

}

avatar.addEventListener('click', e => {
    newAvatarContainer.classList.remove('hidden')
})



async function getUser() {
    try {
        createLoader ()
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
    } catch (error) {
        throw (error)
    } finally {
        loaderWait()
    }

}
if (localStorage.UserID) {
    getUser()
}