let height = parseInt(window.innerHeight)
document.querySelector("#head").style.height = `${height / 8}px`
document.querySelector("#registerForm").style.height = `${height - parseInt(document.querySelector("#head").style.height.slice(0, -2))}px`


let users

if (!localStorage.users) {
    users = []
    localStorage.setItem('users', JSON.stringify(users));
} else {
    users = JSON.parse(localStorage.getItem("users"))
}

document.querySelector("#formAddList").addEventListener('submit', function(){
    let username = document.querySelector("#txtUsername").value
    let password = document.querySelector("#txtPassword").value
    let cPassword = document.querySelector("#txtConfirmPassword").value

    if (password == cPassword) {
        if (!users.find(pos => pos.username == username)) {
            let user = {
                username: username,
                password: password,
            }
        
            users.push(user)   
            localStorage.setItem('users', JSON.stringify(users));
        } else {
            alert("This username already exists!")
        }   
    }
})