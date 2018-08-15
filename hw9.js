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
    console.log(users)
})
//3
function creatAlert(btnNum){
    return function (){ alert(prizes[btnNum]);};
 }
 for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
     // for each of our buttons, when the user clicks it...
     document.getElementById('btn-' + btnNum).onclick = creatAlert(btnNum)
                     
     
    
 }
 for ( var j = 0; j < prizes.length; j++){
     document.getElementById('btn-' + j).onclick();
 }