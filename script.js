const formName = document.querySelector('#name')
const formZip = document.querySelector('#zip')
const formEmail = document.querySelector('#email')
const formPhone = document.querySelector('#phone')

formName.addEventListener('blur', validateName)
formZip.addEventListener('blur', validateZip)
formEmail.addEventListener('blur', validateEmail)
formPhone.addEventListener('blur', validatePhone)

function validateName() {
    re = /^[a-zA-Z]{2,10}$/

    if (!re.test(formName.value)) {
        formName.classList.add('is-invalid')
    } else {
        formName.classList.remove('is-invalid')
    }
}

function validateZip() {
    re = /^[0-9]{5}(-[0-9]{4})?$/

    if (!re.test(formZip.value)) {
        formZip.classList.add('is-invalid')
    } else {
        formZip.classList.remove('is-invalid')
    }
}

function validateEmail() {
    re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

    if (!re.test(formEmail.value)) {
        formEmail.classList.add('is-invalid')
    } else {
        formEmail.classList.remove('is-invalid')
    }
}

function validatePhone() {
    re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/

    if (!re.test(formPhone.value)) {
        formPhone.classList.add('is-invalid')
    } else {
        formPhone.classList.remove('is-invalid')
    }
}