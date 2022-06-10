let height = parseInt(window.innerHeight)
document.querySelector("#head").style.height = `${height / 8}px`
document.querySelector("#loginForm").style.height = `${height - parseInt(document.querySelector("#head").style.height.slice(0, -2))}px`

let divMessage = document.querySelector('#divMessage')
let divMessageHeight = divMessage.style.height
divMessage.style.top = `${height-(height/10)}px`
let opacity = 0

if (!localStorage.users) {
    users = []
    localStorage.setItem('users', JSON.stringify(users));
} else {
    users = JSON.parse(localStorage.getItem("users"))
}

document.querySelector("#loginForm").addEventListener('submit', function(e) {
    e.preventDefault()

    let username = document.querySelector("#txtUsername").value
    let password = document.querySelector("#txtPassword").value

    if (!users.find(pos => pos.username == username && pos.password == password)) {
        fadeInMessage(`Username or password incorrects!`, false)
    } else {
        sessionStorage.setItem('loggedUser', username)

        fadeInMessage(`Welcome ${username}!`, true)
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
            setTimeout(() => { location.href = 'home.html' }, 1400)
        }
    } else {
        setTimeout(() => {fadeInMessage(message, wasSuccessful)}, 50)
    }

    divMessage.style.opacity = opacity
}