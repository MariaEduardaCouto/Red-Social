let users = JSON.parse(localStorage.getItem("users"))
let posts = JSON.parse(localStorage.getItem("posts"))

for (const post of posts) {
    document.querySelector('#divPosts').innerHTML += `
        <div class="p-3 w50 d-flex flex-column justify-content-between">
            <div class="w100 d-flex justify-content-between" id="post">
                <p>${post.user}</p>
                <p>${post.post}</p>
                <p>${post.files}</p>
            </div>

            <img class="w25" src="${post.files}">
        </div>
    `
}