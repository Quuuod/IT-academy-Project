const signUp = document.querySelector(".new")

const username = signUp.querySelector("#username")
const password = signUp.querySelector("#password")
const confirmPassword = signUp.querySelector("#confirm")

const createUser = signUp.querySelector("#submit")

const fetchWithLog = (...args) =>
    fetch(...args).then((res) => res.json()).then(console.log);

createUser.addEventListener('click', e => {
    let logins = [];
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

                    fetchWithLog('https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            login: username.value,
                            password: password.value,
                        })
                    });
                    username.value = ''
                    password.value = ''
                    confirmPassword.value = ''
                    alert('Created')
                } else {
                    alert('User already exist')
                }
            } else {
                alert('Passwords does not match')
            }
        } else {
            alert('Complete the required fields')
        }

    })()
})