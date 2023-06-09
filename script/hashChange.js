//страницы
const main = document.querySelector(".mainPage")
const contacts = document.querySelector(".contactPage")
const team = document.querySelector(".teamPage")
const fashion = document.querySelector(".fashionPage")
const login = document.querySelector(".login")
const newUser = document.querySelector(".new")
const userProducts = document.querySelector(".userProducts")
const account = document.querySelector(".account")
const page404 = document.querySelector(".page404")
const header = document.querySelector("header")
const footer = document.querySelector("footer")
//кнопки
const logoutBtn = document.querySelector("#logout")

const signInBtn = document.querySelector("#signIn")
const signUpBtn = document.querySelector("#signUp")
const fashionBtn = document.querySelector("#fashion")
const accountBtn = document.querySelector("#account")
const fashionBigBtn = document.querySelector("#goFashion")
const cartHeaderBtn = document.querySelector("#userProducts")

logoutBtn.addEventListener('click', e => {
    localStorage.removeItem('UserID')
    onLocationChange()
    getHeaderAvatar()
    localStorage.removeItem('Admin')
})

const hideAll = () => {
    main.classList.add('hidden');
    contacts.classList.add('hidden');
    team.classList.add('hidden');
    fashion.classList.add('hidden');
    account.classList.add('hidden');
    login.classList.add('hidden');
    newUser.classList.add('hidden');
    page404.classList.add('hidden');
    userProducts.classList.add('hidden');
}

const checkUser = () => {
    if (localStorage.UserID) {
        signInBtn.classList.add("hidden")
        signUpBtn.classList.add("hidden")

        cartHeaderBtn.classList.remove("hidden")
        accountBtn.classList.remove("hidden")
        fashionBtn.classList.remove("hidden")
        accountBtn.classList.remove("hidden")
        logoutBtn.classList.remove("hidden")

        fashionBigBtn.href = "#fashion"

    } else {
        signInBtn.classList.remove("hidden")
        signUpBtn.classList.remove("hidden")

        cartHeaderBtn.classList.add("hidden")
        accountBtn.classList.add("hidden")
        fashionBtn.classList.add("hidden")
        accountBtn.classList.add("hidden")
        logoutBtn.classList.add("hidden")

        fashionBigBtn.href = "#login"
    }
}
const onLocationChange = () => {
    hideAll()
    checkUser()
    checkUserMobile()
    footer.classList.remove("hidden")
    header.classList.remove("hidden")
    try {
        switch (location.hash) {
            case "#main":
                main.classList.remove('hidden');
                break;

            case "#contacts":
                contacts.classList.remove('hidden');
                break;

            case "#team":
                team.classList.remove('hidden');
                break;

            case "#login":
                if (localStorage.UserID) {
                    location.hash = 'main'
                } else {
                    login.classList.remove('hidden');
                }
                break;

            case "#new":
                if (localStorage.UserID) {
                    location.hash = 'main'
                } else {
                    newUser.classList.remove('hidden');
                }
                break;

            case "#account":
                if (!localStorage.UserID) {
                    location.hash = 'login'
                } else {
                    getUser()
                    account.classList.remove('hidden');
                }
                break;

            case "#fashion":
                if (!localStorage.UserID) {
                    location.hash = 'login'
                } else {
                    CheckPrivilegies()
                    getAllProducts()
                    fashion.classList.remove('hidden');
                }
                break;

            case "#userProducts":
                if (!localStorage.UserID) {
                    location.hash = 'login'
                } else {
                    selectCategoty('shoppingCart')
                    cartBtn.classList.add('choosenCategory')
                    buyInCartBtn.classList.remove("hidden")
                    loadUserProducts('shoppingCart', shoppingCart)
                    footer.classList.add("hidden")
                    userProducts.classList.remove('hidden');
                }
                break;

            case "":
                main.classList.remove('hidden');
                break;

            default:
                hideAll();
                page404.classList.remove('hidden');
                header.classList.add("hidden")
                break;
        }
    } catch {
        throw err;
    } finally {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
};

onLocationChange();

window.addEventListener("hashchange", onLocationChange);