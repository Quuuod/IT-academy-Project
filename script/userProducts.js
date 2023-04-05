const likedBtn = document.querySelector("#likedBtn")
const cartBtn = document.querySelector("#cartBtn")
const purchasedBtn = document.querySelector("#purchasedBtn")

const liked = document.querySelector("#liked")
const shoppingCart = document.querySelector("#shoppingCart")
const purchased = document.querySelector("#purchased")

const buyLikedBtn = document.querySelector("#buyAllLiked")
const buyInCartBtn = document.querySelector("#buyAllCart")

const allCategories = document.querySelectorAll('.categoryProducts')

let total = 0

allCategories.forEach(element => {
    element.classList.add("hidden")
})

function selectCategoty(category) {
    buyLikedBtn.classList.add("hidden")
    buyInCartBtn.classList.add("hidden")

    buyLikedBtn.innerText = `Buy All Liked: 0$`
    buyInCartBtn.innerText = `Buy All Liked: 0$`

    likedBtn.classList.remove('choosenCategory')
    cartBtn.classList.remove('choosenCategory')
    purchasedBtn.classList.remove('choosenCategory')

    allCategories.forEach(element => {
        element.innerHTML = ''
        element.classList.add("hidden")
    })
    document.querySelector(`#${category}`).classList.remove("hidden")
}

likedBtn.addEventListener('click', e => {
    selectCategoty('liked')
    likedBtn.classList.add('choosenCategory')
    buyLikedBtn.classList.remove("hidden")
    loadUserProducts('liked', liked)
})

cartBtn.addEventListener('click', e => {
    selectCategoty('shoppingCart')
    cartBtn.classList.add('choosenCategory')
    buyInCartBtn.classList.remove("hidden")
    loadUserProducts('shoppingCart', shoppingCart)
})

purchasedBtn.addEventListener('click', e => {
    selectCategoty('purchased')
    purchasedBtn.classList.add('choosenCategory')
    loadUserProducts('purchased', purchased)
})

async function loadUserProducts(category, container) {
    try {
        createLoader ()
        const idArr = []
        total = 0
        buyLikedBtn.removeEventListener('click', buyAllLiked)
        buyInCartBtn.removeEventListener('click', buyAllInCart)

        await fetch(`https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/${localStorage.UserID}`)
            .then(res => {
                return res.json()
            }).then(res => {
                res[category].forEach(id => {
                    idArr.push(id)
                })
                if (idArr.length !== 0) {
                    idArr.forEach(id => {
                        fetch(`https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/product/${id}`)
                            .then(res => {
                                return res.json()
                            }).then(res => {
                                total += res.price
                                const userProductContainer = document.createElement("div")
                                userProductContainer.classList.add("userProduct")
                                container.append(userProductContainer)

                                userProductContainer.innerHTML =
                                    `
                <div class="userProductText">
                <p id = "productName" class="productText" placeholder=" ">${res.productName}</p>
                <p id = "productName" class="productText" placeholder=" ">${res.price} $</p>
                </div>
                <div class="productImageContainer">
                <img id = "productImage" class="productImage" src ="${res.imageUrl}">
                    `
                                if (category === 'liked' || category === 'shoppingCart') {
                                    const deleteBtn = document.createElement('div')
                                    deleteBtn.classList.add('deleteProduct')
                                    deleteBtn.dataset.id = res.id
                                    deleteBtn.innerHTML =
                                        `
                    <svg class = 'deleteImg' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="${cross}" fill="black"/>
                    </svg>
                    `
                                    if (category === 'liked') {
                                        deleteBtn.addEventListener('click', async e => {
                                            const arr = []
                                            fetch(`https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/${localStorage.UserID}`)
                                                .then(res => {
                                                    return res.json()
                                                }).then(res => {
                                                    res[category].forEach(product => {
                                                        arr.push(Number(product))
                                                    })
                                                    arr.splice(arr.indexOf(Number(deleteBtn.dataset.id)), 1)
                                                    fetch(`https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/${localStorage.UserID}`, {
                                                        method: "PUT",
                                                        headers: {
                                                            "Content-Type": "application/json"
                                                        },
                                                        body: JSON.stringify({
                                                            liked: arr
                                                        })
                                                    })
                                                })
                                            userProductContainer.remove()
                                        })
                                        buyLikedBtn.innerText = `Buy All Liked: ${total} $`
                                    } else if (category === 'shoppingCart') {
                                        deleteBtn.addEventListener('click', async e => {
                                            const arr = []
                                            fetch(`https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/${localStorage.UserID}`)
                                                .then(res => {
                                                    return res.json()
                                                }).then(res => {
                                                    res[category].forEach(product => {
                                                        arr.push(Number(product))
                                                    })
                                                    arr.splice(arr.indexOf(Number(deleteBtn.dataset.id)), 1)
                                                    fetch(`https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/${localStorage.UserID}`, {
                                                        method: "PUT",
                                                        headers: {
                                                            "Content-Type": "application/json"
                                                        },
                                                        body: JSON.stringify({
                                                            shoppingCart: arr
                                                        })
                                                    })
                                                })
                                            userProductContainer.remove()
                                        })
                                        buyInCartBtn.innerText = `Buy All In Cart: ${total} $`
                                    }
                                    userProductContainer.append(deleteBtn)
                                }

                            })
                        //кнопка на покупку конкретного
                    })
                    buyLikedBtn.addEventListener('click', e => {
                        buyAllLiked()
                        buyLikedBtn.innerText = `Buy All Liked: 0$`
                    })

                    buyInCartBtn.addEventListener('click', e => {
                        buyAllInCart()
                        buyInCartBtn.innerText = `Buy All In Cart: 0$`
                    })
                }
            })
    } catch (error) {
        throw (error)
    } finally {
        loaderWait()
    }

}

function buyAllLiked() {
    const arr = []
    fetch(`https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/${localStorage.UserID}`)
        .then(res => {
            return res.json()
        }).then(res => {
            res.liked.forEach(product => {
                arr.push(Number(product))
            })
            res.purchased.forEach(product => {
                arr.push(Number(product))
            })
            fetch(`https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/${localStorage.UserID}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    liked: [],
                    purchased: arr
                })
            })
        })
    document.querySelectorAll('.userProduct').forEach(element => {
        element.remove()
    })
}


function buyAllInCart() {
    const arr = []
    fetch(`https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/${localStorage.UserID}`)
        .then(res => {
            return res.json()
        }).then(res => {
            res.shoppingCart.forEach(product => {
                arr.push(Number(product))
            })
            res.purchased.forEach(product => {
                arr.push(Number(product))
            })
            fetch(`https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/${localStorage.UserID}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    shoppingCart: [],
                    purchased: arr
                })
            })
        })
    document.querySelectorAll('.userProduct').forEach(element => {
        element.remove()
    })
}