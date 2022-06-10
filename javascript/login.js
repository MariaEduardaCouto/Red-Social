let height = parseInt(window.innerHeight)
document.querySelector("#head").style.height = `${height / 8}px`
document.querySelector("#loginForm").style.height = `${height - parseInt(document.querySelector("#head").style.height.slice(0, -2))}px`

if (!localStorage.users) {
    users = []
    localStorage.setItem('users', JSON.stringify(users));
} else {
    users = JSON.parse(localStorage.getItem("users"))
}

document.querySelector("#loginForm").addEventListener('submit', function(){
    let username = document.querySelector("#txtUsername").value
    let password = document.querySelector("#txtPassword").value

    if (!users.find(pos => pos.username == username && pos.password == password)) {
        alert("This username doesn't exists!")
    } else {
        sessionStorage.setItem('loggedUser', username)
        
        setTimeout(() => { location.href = 'home.html' }, 1000)
    }
})