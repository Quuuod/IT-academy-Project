const adminPanel = document.querySelector("#admin")

async function CheckPrivilegies() {

    adminPanel.classList.add('hidden')

    if (localStorage.UserID)
        await fetch("https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/user/" + localStorage.UserID)
        .then(res => {
            return res.json()
        })
        .then(res => {
            adminPanel.innerHTML = ''
            if (res.isUserAdmin === true) {

                adminPanel.classList.remove('hidden')

                adminPanel.innerHTML =
                `
                <div class="title">Add new product</div>

                <div class="input-container ic1">
                <input id="inputImage" class="input" type="url" placeholder=" ">
                <div class="cut cut-short"></div>
                <label for="inputImage" class="placeholder">Image URL</label>

                </div>

                <div class="input-container ic1">
                <input id="inputProduct" class="input" type="text" placeholder=" ">
                <div class="cut cut-short"></div>
                <label for="inputProduct" class="placeholder">Product name</label>
                </div>

                <div class="input-container ic1">
                <input id="inputPrice" class="input" type="number" placeholder=" ">
                <div class="cut cut-short"></div>
                <label for="inputPrice" class="placeholder">Product price</label>
                </div>

                <div>
                <button type="text" class="submit" id="submitProduct">Add new product</button>
                </div>
                `

                const inputImage = adminPanel.querySelector('#inputImage')
                const inputProduct = adminPanel.querySelector('#inputProduct')
                const inputPrice = adminPanel.querySelector('#inputPrice')

                const submitProduct = adminPanel.querySelector('#submitProduct')

                submitProduct.addEventListener('click', e => {
                    if (inputImage.value.trim() !== '' && inputProduct.value.trim() !== '' && inputPrice.value.trim() !== '') {
                        fetch(inputImage.value, {
                                method: 'HEAD',
                                mode: 'no-cors'
                            })
                            .then(function () {
                                fetch('https://it-academy-js-api-zmicerboksha.vercel.app/api/6/rm/product', {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        productName: inputProduct.value,
                                        imageUrl: inputImage.value,
                                        price: Number(inputPrice.value),
                                        date: String(Date.now())
                                    })
                                }).then(res =>{
                                    return res.json()
                                }).then(res =>{
                                    alert('Created')
                                })
                            })
                            .catch(function () {
                                alert('URL is not valid');
                            });
                    } else {
                        alert('Fill all fields')
                    }


                })

            }
        })
}


{
    /* <div class="title">Add new product</div>

    <div class="input-container ic1">
        <input id="input1" class="input" type="url" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="input1" class="placeholder">Image URL</label>
    </div>

    <div class="input-container ic1">
        <input id="input2" class="input" type="text" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="input2" class="placeholder">Product name</label>
    </div>

    <div class="input-container ic1">
        <input id="input3" class="input" type="number" placeholder=" " />
        <div class="cut cut-short"></div>
        <label for="input3" class="placeholder">Product price</label>
    </div> */
}