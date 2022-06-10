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

document.querySelector("#registerForm").addEventListener('submit', function(){
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
            
            location.href = '/html/logIn.html'
            // location.href = '/html/logIn.html'
        } else {
            alert('This username already exists!')
        }   
    } else {
        alert("The passwords are not the equivalent!")
    }
})