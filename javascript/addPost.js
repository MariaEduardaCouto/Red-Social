let posts

if (!localStorage.posts) {
    posts = []
    localStorage.setItem('posts', JSON.stringify(posts));
} else {
    posts = JSON.parse(localStorage.getItem("posts"))
}

let users = JSON.parse(localStorage.getItem("users"))
let clicks = 0
let files = []
let urlFile

let displayedFile = document.querySelector('#imgPost')
let addFile = document.querySelector('#addFile')
let btnAddFile = document.querySelector('#btnAddFile')
let selectFile = document.querySelector('#sltTypeFile')
let imgPost = document.querySelector('#imgPost')
let btnSubmit = document.querySelector('#btnSubmit')
btnSubmit.disabled = true

document.querySelector('#btnUrl').addEventListener('click', function() {
    document.querySelector('#spanInputFile').innerHTML = `
        <input class="mt-3" type="url" placeholder="Paste an url here!" id="addFile">
    `
})

document.querySelector('#btnLocal').addEventListener('click', function() {
    document.querySelector('#spanInputFile').innerHTML = `
        <input class="mt-3" type="file" accept="image/*" name="image" id="addFile">
    `
})

if (document.querySelector('#addFile').value == '') {
    btnAddFile.disabled = true
} else {
    btnAddFile.disabled = false
}

selectFile.addEventListener('change', function() {
    document.querySelector('#spanInputFile').innerHTML = `
        <input class="mt-3" type="file" accept="${selectFile.value}/*" name="image" id="addFile2">
    `
    addFile = document.querySelector('#addFile')
    btnAddFile.disabled = false

    displayedFile.src = `/images/${selectFile.value}.png`
})

document.querySelector('#addFile').addEventListener('change', function() {    
    btnAddFile.disabled = false

    imgPost.src = addFile.value
})

btnAddFile.addEventListener('click', function() {
    clicks += 1
    
    if (clicks < 4) {
        urlFile = document.querySelector('#filePhoto').value

        files.push(urlFile)
    } else {
        document.querySelector('#formAddPost').disabled = true
    }

    btnSubmit.disabled = false
})

document.querySelector('#formAddPost').addEventListener('submit', function() {
    clicks = 0
    alert('a')
    
    const username = sessionStorage.getItem('loggedUser')
    let postName = document.querySelector('#txtPostName').value

    let post = {
        user: username,
        post: postName,
        files: [],
    }

    posts.push(post)
    localStorage.setItem('posts', JSON.stringify(posts));

    post = {
        post: postName,
        files: [],
    }

    for (const user of users) {
        if (user.username == username) {
            alert(post)
            user.posts.push(post)

            localStorage.setItem('users', JSON.stringify(users));
        }
    }
})