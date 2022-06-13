let username = document.querySelector('#txtName')
let pass = document.querySelector('#txtPass')

const currentUsername = sessionStorage.getItem('loggedUser')
let users = JSON.parse(localStorage.getItem("users"))

document.querySelector('#formEdit').addEventListener('submit', function(e) {
    e.preventDefault();

    let pos = users.findIndex(user => user.username == currentUsername)

    users[pos].username = username.value
    users[pos].password = pass.value
    localStorage.setItem('users', JSON.stringify(users));
})