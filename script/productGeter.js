const basket = `M17 15V22C17 22.2652 16.8946 22.5196 16.7071 22.7071C16.5196 22.8946 16.2652 23 16
23C15.7348 23 15.4804 22.8946 15.2929 22.7071C15.1053 22.5196 15 22.2652 15 22V15C15 14.7348 
15.1053 14.4804 15.2929 14.2929C15.4804 14.1054 15.7348 14 16 14C16.2652 14 16.5196 
14.1054 16.7071 14.2929C16.8946 14.4804 17 14.7348 17 15ZM29.9825 12.2637L28.25 25.265C28.1857
25.7455 27.9492 26.1863 27.5843 26.5054C27.2194 26.8246 26.751 27.0003 26.2662 27H5.73373C5.24896
27.0003 4.78057 26.8246 4.41567 26.5054C4.05078 26.1863 3.81421 25.7455 3.74998 25.265L2.01623 
12.265C1.97845 11.9824 2.00154 11.6949 2.08395 11.422C2.16636 11.149 2.30619 10.8968 2.49406 
10.6823C2.68193 10.4678 2.91349 10.2959 3.17322 10.1783C3.43295 10.0606 3.71484 9.9998 3.99998 
10H8.54623L15.25 2.34125C15.3438 2.23484 15.4592 2.14962 15.5885 2.09125C15.7179 2.03287 15.8581
2.00269 16 2.00269C16.1419 2.00269 16.2821 2.03287 16.4114 2.09125C16.5407 2.14962 16.6561 2.23484 
16.75 2.34125L23.4537 10H28C28.2848 10.0002 28.5663 10.0612 28.8256 10.1789C29.0849 10.2967 29.3161
10.4685 29.5037 10.6828C29.6913 10.8971 29.8309 11.149 29.9133 11.4217C29.9956 11.6943 30.0188 
11.9814 29.9812 12.2637H29.9825ZM11.2037 10H20.7962L16 4.51875L11.2037 10ZM28 12H3.99998L5.73373 
25H26.2662L28 12ZM21.605 14.9L20.905 21.9C20.8911 22.0311 20.9034 22.1636 20.9409 22.2899C20.9785 
22.4162 21.0406 22.5339 21.1238 22.6361C21.2069 22.7383 21.3095 22.8231 21.4256 22.8855C21.5416 
22.948 21.6688 22.9869 21.8 23C21.8337 23.0018 21.8675 23.0018 21.9012 23C22.1489 22.9997 22.3877
22.9075 22.5713 22.7412C22.7549 22.5749 22.8702 22.3464 22.895 22.1L23.595 15.1C23.6215 14.8361 
23.5421 14.5725 23.3743 14.3671C23.2064 14.1618 22.9639 14.0315 22.7 14.005C22.4361 13.9785 22.1725
14.0579 21.9671 14.2257C21.7618 14.3936 21.6315 14.6361 21.605 14.9ZM10.395 14.9C10.3685 14.6361 
10.2382 14.3936 10.0328 14.2257C9.82749 14.0579 9.56387 13.9785 9.29998 14.005C9.03609 14.0315 
8.79354 14.1618 8.6257 14.3671C8.45785 14.5725 8.37846 14.8361 8.40498 15.1L9.10498 22.1C9.12985 
22.3475 9.24609 22.5769 9.431 22.7433C9.61591 22.9097 9.85621 23.0012 10.105 23C10.1387 23.0018 
10.1725 23.0018 10.2062 23C10.3369 22.9869 10.4637 22.9481 10.5794 22.886C10.6951 22.8239 10.7974 
22.7395 10.8805 22.6379C10.9636 22.5362 11.0259 22.4191 11.0638 22.2934C11.1016 22.1676 11.1144 
22.0357 11.1012 21.905L10.395 14.9Z`

const like = `M12.39 20.87a.696.696 0 0 1-.78 0C9.764 19.637 2 14.15 2 8.973c0-6.68 7.85-7.75 10-3.25 2.15-4.5 
10-3.43 10 3.25 0 5.178-7.764 10.664-9.61 11.895z`

const cross = `M25.7074 24.2926C25.8004 24.3855 25.8741 24.4958 25.9243 24.6172C25.9746 24.7386 26.0005
24.8687 26.0005 25.0001C26.0005 25.1315 25.9746 25.2616 25.9243 25.383C25.8741 25.5044 25.8004 25.6147 
25.7074 25.7076C25.6145 25.8005 25.5042 25.8742 25.3828 25.9245C25.2614 25.9747 25.1313 26.0006 24.9999 
26.0006C24.8686 26.0006 24.7384 25.9747 24.6171 25.9245C24.4957 25.8742 24.3854 25.8005 24.2924 25.7076L15.9999
17.4138L7.70745 25.7076C7.5198 25.8952 7.26531 26.0006 6.99995 26.0006C6.73458 26.0006 6.48009 25.8952 6.29245 
25.7076C6.1048 25.5199 5.99939 25.2654 5.99939 25.0001C5.99939 24.7347 6.10481 24.4802 6.29245 24.2926L14.5862 
16.0001L6.29245 7.70757C6.1048 7.51993 5.99939 7.26543 5.99939 7.00007C5.99939 6.7347 6.1048 6.48021 6.29245 
6.29257C6.48009 6.10493 6.73458 5.99951 6.99995 5.99951C7.26531 5.99951 7.5198 6.10493 7.70745 6.29257L15.9999 
14.5863L24.2924 6.29257C24.4801 6.10493 24.7346 5.99951 24.9999 5.99951C25.2653 5.99951 25.5198 6.10493 25.7074 
6.29257C25.8951 6.48021 26.0005 6.7347 26.0005 7.00007C26.0005 7.26543 25.8951 7.51993 25.7074 7.70757L17.4137 
16.0001L25.7074 24.2926Z`

const productsContainer = document.querySelector("#productsContainer")

async function getAllProducts() {
    productsContainer.innerHTML = ''
    if (localStorage.UserID) {
        await fetch('https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/product?orderBy=date,desc')
            .then(res => {
                return res.json()
            }).then(res => {
                res.forEach(product => {
                    const productSection = document.createElement("section")
                    productSection.classList.add("product")
                    productsContainer.append(productSection)

                    productSection.innerHTML =
                        `
                <div class = "productBasketContainer" data-id = ${product.id}>
                <svg class = "productBasketImage" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="${basket}" fill="black"/>
                </svg>
                </div>
                <div class="productContainer">
                <p id = "productName" class="productText" placeholder=" ">${product.productName}</p>
                <div class="cut cut-short"></div>
                <p id = "productName" class="productText" placeholder=" ">${product.price} $</p>
                <div class="cut cut-short"></div>
                </div>
                <div class="productImageContainer">
                <img id = "productImage" class="productImage" src ="${product.imageUrl}">
                </div>
                <div class = "productLikeContainer" data-id = ${product.id}>
                <svg class = "productLikeImage" data-id = ${product.id} width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="${like}" fill="black"/>
                </svg>
                </div>
                    `
                    if (localStorage.Admin) {
                        const deleteBtn = document.createElement('div')
                        deleteBtn.classList.add('deleteProduct')
                        deleteBtn.innerHTML =
                            `
                    <svg class = 'deleteImg' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="${cross}" fill="black"/>
                    </svg>
                    `
                        deleteBtn.addEventListener('click', async e => {
                            await fetch(`https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/product/${product.id}`, {
                                method: "DELETE"
                            });
                            productSection.remove()
                        })
                        productSection.append(deleteBtn)
                    }
                });

                document.querySelectorAll('.productBasketContainer').forEach(element => {
                    element.addEventListener('click', e => {
                        const arr = []
                        fetch(`https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/${localStorage.UserID}`)
                            .then(res => {
                                return res.json()
                            }).then(res => {
                                res.shoppingCart.forEach(product => {
                                    arr.push(Number(product))
                                })
                                arr.push(Number(element.dataset.id))
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

                    })
                })

                document.querySelectorAll('.productLikeImage').forEach(element => {
                    fetch(`https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/${localStorage.UserID}`)
                        .then(res => {
                            return res.json()
                        }).then(res => {
                            if (res.liked.includes(Number(element.dataset.id))) {
                                element.classList.add('likeActive')
                            }
                        })
                })

                document.querySelectorAll('.productLikeContainer').forEach(element => {
                    element.addEventListener('click', e => {
                        if (element.children[0].classList[1] === 'likeActive') {
                            const arr = []
                            fetch(`https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/${localStorage.UserID}`)
                                .then(res => {
                                    return res.json()
                                }).then(res => {
                                    res.liked.forEach(product => {
                                        arr.push(Number(product))
                                    })
                                    arr.splice(arr.indexOf(Number(element.dataset.id)), 1)
                                    fetch(`https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/${localStorage.UserID}`, {
                                        method: "PUT",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            liked: arr
                                        })
                                    })
                                    element.children[0].classList.remove('likeActive')
                                })
                        } else {
                            const arr = []
                            fetch(`https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/${localStorage.UserID}`)
                                .then(res => {
                                    return res.json()
                                }).then(res => {
                                    res.liked.forEach(product => {
                                        arr.push(Number(product))
                                    })
                                    arr.push(Number(element.dataset.id))
                                    fetch(`https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/${localStorage.UserID}`, {
                                        method: "PUT",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            liked: arr
                                        })
                                    })
                                    element.children[0].classList.add('likeActive')
                                })
                        }


                    })
                })

            })
    }
}

