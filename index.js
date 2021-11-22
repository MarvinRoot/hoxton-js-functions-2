let userLetter = prompt("Enter a letter: ")

function checkUserNameLetterMatch(userLetter){ 
    users.filter(function(user){
        if(user.name.includes(userLetter)) {
           return user;
        }
    }).map(function (user){
        
        return user.name
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