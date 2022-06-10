const username = sessionStorage.getItem('loggedUser')
let users = JSON.parse(localStorage.getItem("users"))
users = users.sort()
let divUsers = ''
let convPos

for (const user of users) {
    document.querySelector('#divUsers').innerHTML += `
        <div class="rounded mt-5 p-4 w100" style="border-width: 1px; border-style: solid; border-color: #e7e9ec;">
            <p style="font-family: BalooReg; font-size: 20px; color: black;">${user.username}</p>
            <button class="btn bckOrange w50" id="aPosts">Send message</button>
        </div>
    `
}

document.querySelector("#txtFilter").addEventListener('input', function() {
    let filter = document.querySelector("#txtFilter").value
    divUsers = ''
    
    document.querySelector('#divUsers').innerHTML = ``

    for (const user of users) {
        if (user.username.includes(filter)) {
            divUsers += `
                <div class="rounded mt-5 p-4 w100" style="border-width: 1px; border-style: solid; border-color: #e7e9ec;">
                    <p style="font-family: BalooReg; font-size: 20px; color: black;">${user.username}</p>
                    <button class="btn bckOrange w50" id="aPosts">Send message</button>
                </div>
            `
        }
    }

    document.querySelector('#divUsers').innerHTML += divUsers
})

for (const btns of document.querySelectorAll('#aPosts')) {
    btns.addEventListener('click', function() {
        document.querySelector("#txtFilter").style.visibility = 'hidden'

        let toUser = this.parentNode.firstElementChild.innerHTML

        document.querySelector('#divUsers').innerHTML = ``

        let pos = users.findIndex(user => user.username == username)
        
        if (users[pos].messages.find(message => message.toUser == toUser)) {
            convPos = users[pos].messages.findIndex(message => message.toUser == toUser)
            

        } else {
            document.querySelector('#formSendMessage').innerHTML = `
                <input type="text" class="mr-1 form-control w75" id="txtMessage" placeholder="Say something to ${toUser}!" required>
                <button type="submit" class="btn bckOrange w25" id="aSend">Send</button>
            `
        }

        // alert(JSON.stringify(users[pos].messages[convPos]))
        
        
        // let conversation = users[pos].messages[conversationPos].messages

        // alert(JSON.stringify(conversation))
    })
}

document.querySelector('#formSendMessage').addEventListener('submit', function(e) {
    e.preventDefault()
    let text = document.querySelector('#txtMessage').value

    document.querySelector('#divMessages').innerHTML += `
        <div class="w100" style="font-size: 17px">
            ${username}: ${text}
        </div>
    `

    convPos = users[pos].messages[convPos].messages.push({
        from: username,
        message: text
    })

    alert(JSON.stringify(users[pos].messages[convPos]))

})