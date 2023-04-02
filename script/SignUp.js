const signUp = document.querySelector(".new")

const username = signUp.querySelector("#username")
const password = signUp.querySelector("#password")
const confirmPassword = signUp.querySelector("#confirm")

const createUser = signUp.querySelector("#submit")
const signInRedir = signUp.querySelector("#signIn")

signInRedir.addEventListener('click', e => location.hash = "login")

createUser.addEventListener('click', e => {
    const logins = [];
    (async () => {
        await fetch("https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user")
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                res.forEach(user => {
                    logins.push(user.login)
                });
            })

        if (username.value.trim() !== '' && password.value.trim() !== '') {
            if (password.value === confirmPassword.value) {
                if (logins.every(item => item !== username.value)) {

                    fetch('https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user', {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                login: username.value,
                                password: password.value,
                                avatarUrl : 'https://flomaster.club/uploads/posts/2022-07/1657359817_39-flomaster-club-p-kot-siluet-risunok-krasivo-39.jpg'
                            })
                        }).then((res) => res.json())
                        .then((res) => {
                            username.value = ''
                            password.value = ''
                            confirmPassword.value = ''
                            localStorage.setItem('UserID', res.id)
                            alert('Created')
                            getHeaderAvatar()
                            location.hash = 'main'
                        });


                } else {
                    alert('User already exist')
                }
            } else {
                alert('Passwords does not match')
                confirmPassword.value = ''
            }
        } else {
            alert('Complete the required fields')
        }

    })()
})