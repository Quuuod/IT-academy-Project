const main = document.querySelector(".mainPage")
const contacts = document.querySelector(".contactPage")
const team = document.querySelector(".teamPage")
const login = document.querySelector(".login")
const newUser = document.querySelector(".new")
const account = document.querySelector(".account")
const page404 = document.querySelector(".page404")


const hideAll = () => {
    main.classList.add('hidden');
    contacts.classList.add('hidden');
    team.classList.add('hidden');
    login.classList.add('hidden');
    newUser.classList.add('hidden');
    page404.classList.add('hidden');
}

const onLocationChange = () => {
    hideAll();
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
                login.classList.remove('hidden');
                break;
            case "#new":
                newUser.classList.remove('hidden');
                break;
                case "#account":
                    account.classList.remove('hidden');
                    break;
            case "":
                main.classList.remove('hidden');
                break;

            default:
                hideAll();
                page404.classList.remove('hidden');
                break;
                //   case "#notes":
                //     if (checkLogin()) {
                //       notesPage.hidden = false
                //     } else {
                //       alert('you must log in ')
                //       location.hash = '#login'
                //     }
                //     break;
                //   case '':
                //     location.hash = "#list"
                //     break;
                //   default:
                //     hideAll();
                //     page404.hidden = false
                //     break;
                // }
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