const headerAvatar = document.querySelector("#headerAvatar")

function getHeaderAvatar() {
    if (localStorage.UserID) {
        fetch("https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/" + localStorage.UserID)
            .then(res => {
                return res.json()
            })
            .then(res => {
                headerAvatar.innerHTML = `<img src = "${res.avatarUrl}" alt="">`
            })
    } else {
        headerAvatar.innerHTML = ''
    }

}
getHeaderAvatar()