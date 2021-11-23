let userLetter = prompt("Enter a letter: ")

    const foundUsers = users.filter(function(user){
        return user.name.includes(userLetter)
    })


let userIndex = 0
if(foundUsers.length > 0){
    const intervalId = setInterval(function() {
        const user = foundUsers[userIndex]
        console.log(`Hi ${user.name}`)
        userIndex += 1
        if(userIndex === foundUsers.length) clearInterval(intervalId)
    }, 2000);
}

let userIdNumber = Number(prompt("Enter your ID:"))

todos.filter(function(todo){
        if(todo.userId === userIdNumber){
            if(todo.completed===false){
                console.log(`${todo.title}`);
                return todo.title
            }
        }
})