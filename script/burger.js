const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;
const navbar = document.querySelector(".navbar")
const shadow = document.querySelector(".shadow")
const userAvatar = document.querySelector(".logo")
const logo = document.querySelector("#logo")

const menuMobile = document.querySelector("#menu")
// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = menuMobile.cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  navbar.classList.toggle("opened")
  shadow.classList.toggle("hiddenShadow")
  userAvatar.classList.toggle("hidden")
  logo.classList.toggle("hidden")
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  menu.id = 'menuMobile'
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});
shadow.addEventListener('click', closeOnClick)

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
  shadow.classList.add('hiddenShadow')
  navbar.classList.remove('opened')
  userAvatar.classList.remove("hidden")
  logo.classList.remove("hidden")
}


const logoutBtnMobile = menu.querySelector("#logout")

const signInBtnMobile = menu.querySelector("#signIn")
const signUpBtnMobile = menu.querySelector("#signUp")
const fashionBtnMobile = menu.querySelector("#fashion")
const accountBtnMobile = menu.querySelector("#account")
const fashionBigBtnMobile = menu.querySelector("#goFashion")
const cartBtnMobile = menu.querySelector("#userProducts")

logoutBtnMobile.addEventListener('click', e=>{
    localStorage.removeItem('UserID')
    getHeaderAvatar()
    onLocationChange()
    localStorage.removeItem('Admin')
})

const checkUserMobile = () =>{
    if(localStorage.UserID){
        signInBtnMobile.classList.add("hidden")
        signUpBtnMobile.classList.add("hidden")

        cartBtnMobile.classList.remove("hidden")
        accountBtnMobile.classList.remove("hidden")
        fashionBtnMobile.classList.remove("hidden")
        accountBtnMobile.classList.remove("hidden")
        logoutBtnMobile.classList.remove("hidden")

        fashionBigBtn.href ="#fashion"

    } else{
        signInBtnMobile.classList.remove("hidden")
        signUpBtnMobile.classList.remove("hidden")

        cartBtnMobile.classList.add("hidden")
        accountBtnMobile.classList.add("hidden")
        fashionBtnMobile.classList.add("hidden")
        accountBtnMobile.classList.add("hidden")
        logoutBtnMobile.classList.add("hidden")

        fashionBigBtn.href ="#login"
    }
}
