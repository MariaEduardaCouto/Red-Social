let users = JSON.parse(localStorage.getItem("users"))
let clicks = 0
let files = []

document.querySelector('#filePhoto').addEventListener('change', function() {
    document.querySelector('#imgPost').src = document.querySelector('#filePhoto').value
})

document.querySelector('#addFile').addEventListener('click', function() {
    clicks += 1
    
    if (clicks < 5) {
        let urlFile = document.querySelector('#filePhoto').value
        let typeFile = document.querySelector('#sltTypeFile').value

        files.push(urlFile)
    } else {
        document.querySelector('#formAddPost').disabled = true
    }
})

document.querySelector('#formAddPost').addEventListener('submit', function() {
    clicks = 0
    
    const username = sessionStorage.getItem('loggedUser')
    let postName = document.querySelector('#txtPostName').value

    let post = {
        post: postName,
        files: [],
    }

    for (const user of users) {
        if (user.username == username) {
            user.posts.push(post)
        }
    }

    if (users.find(pos => pos.username == username)) {
        
    }
})