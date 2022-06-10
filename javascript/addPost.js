let users = JSON.parse(localStorage.getItem("users"))
let clicks = 0
let files = []
let urlFile

let displayedFile = document.querySelector('#imgPost')
let addFile = document.querySelector('#addFile')
let btnAddFile = document.querySelector('#btnAddFile')
let selectFile = document.querySelector('#sltTypeFile')

if (addFile.value == '') {
    btnAddFile.disabled = true
} else {
    btnAddFile.disabled = false
}

selectFile.addEventListener('change', function() {
    document.querySelector('#spanInputFile').innerHTML = `
        <input class="mt-3" type="file" accept="${selectFile.value}/*" name="image" id="addFile">
    `
    addFile = document.querySelector('#addFile')
    btnAddFile.disabled = false

    displayedFile.src = `/images/${selectFile.value}.png`
})

addFile.addEventListener('change', function() {
    btnAddFile.disabled = false
})

btnAddFile.addEventListener('click', function() {
    clicks += 1
    
    if (clicks < 4) {
        urlFile = document.querySelector('#filePhoto').value

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
})