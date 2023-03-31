const contactNumber = document.querySelector("#contactNumber")
const contactEmail = document.querySelector("#contactEmail")

contactEmail.addEventListener('click', e=>{
    navigator.clipboard.writeText(contactEmail.innerText)
})

contactNumber.addEventListener('click', e=>{
    navigator.clipboard.writeText(contactNumber.innerText)
})