const loginPage = document.querySelector(".login")

const loginInput = loginPage.querySelector("#loginId")
const passwordInput = loginPage.querySelector("#passwordId")

const loginSubmit = loginPage.querySelector("#loginSubmit")
const signUpRedir = loginPage.querySelector("#signUp")

signUpRedir.addEventListener('click', e => location.hash = "new")

loginSubmit.addEventListener('click', e => {
    try {
        createLoader ()
        const users = [];
    (async () => {
        await fetch("https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user")
            .then(res => {
                return res.json()
            })
            .then(res => {
                res.forEach(user => {
                    users[user.id] = user.login
                });
            })

        if (loginInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
            if (users.find(item => item === loginInput.value)) {

                let passwordMatch
                let userID
                await fetch(`https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/${users.indexOf(loginInput.value)}`)
                    .then((res) => {
                        return res.json()
                    })
                    .then(res => {
                        userID = res.id
                        passwordMatch = res.password === passwordInput.value
                    })

                if (passwordMatch) {
                    localStorage.setItem('UserID', userID)
                    loginInput.value = ''
                    passwordInput.value = ''
                    alert('Signed in')
                    getHeaderAvatar()
                    location.hash = 'main'
                } else {
                    alert('Incorrect password')
                    passwordInput.value = ''
                }
            } else alert('No such user')
        } else {
            alert('Complete the required fields')
        }
    })()

    } catch (error) {
        throw(error)
    } finally{
        loaderWait()
    }
    
})