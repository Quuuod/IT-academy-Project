const newAvatarContainer = document.querySelector('.newAvatar')
const newAvatar = newAvatarContainer.querySelector('input')
const avatar = document.querySelector('#avatar')
const accLogin = document.querySelector('#loginId')

const newPasswordContainer = document.querySelector('#newPasswordContainer')
const accPassword = document.querySelector('#accPassword')
const newPassword = document.querySelector('#newPassword')
const changePasswordBtn = document.querySelector('#changePassword');

(async () => {
    await fetch("https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/" + localStorage.UserID)
        .then(res => {
            return res.json()
        })
        .then(res => {
            accLogin.innerText = res.login
            avatar.src = res.avatarUrl

            avatar.addEventListener('click', e => {
                newAvatarContainer.classList.remove('hidden')
            })
            newAvatar.addEventListener('blur', e => {
                e.preventDefault()
                newAvatarContainer.classList.add('hidden')
                if (newAvatar.value.trim() !== '') {
                    fetch("https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/" + localStorage.UserID, {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                login: res.login,
                                password: res.password,
                                avatarUrl: newAvatar.value
                            })
                        }).then(res => {
                            return res.json()
                        })
                        .then(res => {
                            avatar.src = res.avatarUrl
                            alert('Avatar changed!')
                        });
                } else {
                    alert('You didnt insert the link')
                }
                newAvatar.value = ''
            })

            accPassword.addEventListener('blur', e => {
                e.preventDefault()
                changePasswordBtn.classList.add('hidden')
                if (accPassword.value.trim() === res.password) {  
                    changePasswordBtn.classList.remove('hidden')
                } else{alert("Invalid password ")}
            })
            changePasswordBtn.addEventListener('click', e => {
                e.preventDefault()
                if (newPassword.value.trim() !== '' && accPassword.value.trim() === res.password) {
                    fetch("https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/" + localStorage.UserID, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            login: res.login,
                            password: newPassword.value,
                            avatarUrl: res.avatarUrl
                        })
                    }).then(res => {
                        return res.json()
                    })
                    .then(res => {
                        accPassword.value = ''
                        newPassword.value = ''
                        changePasswordBtn.classList.add('hidden')
                        alert('Password changed!')
                    });
                } else {
                    alert('Write new password!')
                }
            })
        })
})()

// fetch("https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/" + localStorage.UserID, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             login: res.login,
//             password: res.password,
//             avatarUrl: newAvatar.value
//         })
//     }).then(res => {
//         return res.json()
//     })
//     .then(res => {
//         avatar.src = res.avatarUrl
//     });