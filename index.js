let userLetter = prompt("Enter a letter: ")

function checkUserNameLetterMatch(userLetter){ 
    users.filter(function(user){

        if(user.name.includes(userLetter)) {
           return console.log(`Hello ${user.name}`);
        }
    })
}

setInterval(function() { checkUserNameLetterMatch(userLetter)
}, 2000);

let userIdNumber = Number(prompt("Enter your ID:"))

todos.filter(function(todo){
        if(todo.userId === userIdNumber){
            if(todo.completed===false){
                console.log(`${todo.title}`);
                return todo.title
            }
        }
})