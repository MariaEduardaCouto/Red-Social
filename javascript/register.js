let height = parseInt(window.innerHeight)
document.querySelector("#head").style.height = `${height / 8}px`
document.querySelector("#registerForm").style.height = `${height - parseInt(document.querySelector("#head").style.height.slice(0, -2))}px`

let divMessage = document.querySelector('#divMessage')
let divMessageHeight = divMessage.style.height
divMessage.style.top = `${height-(height/10)}px`
let opacity = 0

let users

if (!localStorage.users) {
    users = []
    localStorage.setItem('users', JSON.stringify(users));
} else {
    users = JSON.parse(localStorage.getItem("users"))
}

document.querySelector("#registerForm").addEventListener('submit', function(e) {
    e.preventDefault()

    let username = document.querySelector("#txtUsername").value
    let password = document.querySelector("#txtPassword").value
    let cPassword = document.querySelector("#txtConfirmPassword").value

    if (password == cPassword) {
        if (!users.find(pos => pos.username == username)) {

            let user = {
                username: username,
                password: password,
                posts: [],
                type: 'user',
            }
        
            users.push(user)   
            localStorage.setItem('users', JSON.stringify(users));
            
            fadeInMessage(`User ${username} created with success!`, true)
        } else {
            fadeInMessage(`This username already exists!`, false)
        }   
    } else {
        fadeInMessage(`The passwords don't match!`, false)
    }
})

function fadeInMessage(message, wasSuccessful) {
    if (opacity == 0) {
        divMessage.children[0].innerHTML = message
    }

    opacity += 0.05

    if (opacity >= 1) {
        if (!wasSuccessful) {
            setTimeout(() => { location.reload() }, 1400);
        } else {
            setTimeout(() => { location.href = 'logIn.html' }, 1400)
        }
    } else {
        setTimeout(() => {fadeInMessage(message, wasSuccessful)}, 50)
    }

    divMessage.style.opacity = opacity
}