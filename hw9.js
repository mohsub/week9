var addSix = createBase(6);

function createBase(x){
    return y => y + x;
}

console.log(addSix(10));
console.log(addSix(21));

//Rewrite the following code (using promise and other control flow tools/features):
const url = 'https://jsonplaceholder.typicode.com/users';
fetch(url)
.then(response =>{
return response.json()             
})
.then(users => {
    users.forEach ((user,i) => {
        const url1 = 'https://jsonplaceholder.typicode.com/users/${user.id}/todos';
        fetch(url1)
        .then(data => data.json())
        .then(userId => {
            user.userId = userId
        })
    });
    return users;
})
.then(users => console.log(users));

