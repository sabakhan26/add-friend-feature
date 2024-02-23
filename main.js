// var istatus = document.querySelector("h5")
// var addFriend = document.querySelector("#Add")
// var removeFriend = document.querySelector("#remove")
// addFriend.addEventListener("click",function(){
//     istatus.innerHTML = "FRIENDS"
//     istatus.style.color ="green"
// })
// removeFriend.addEventListener("click", function(){
//     istatus.innerHTML = "STRANGER"
//     istatus.style.color ="red"
// })
var istatus = document.querySelector("h5")
var btn = document.querySelector("#Add")
var check= 0
btn.addEventListener("click",function(){
   if(check == 0){
    istatus.innerHTML = "FRIENDS"
    istatus.style.color ="green"
    btn.innerHTML = "Remove Friend"
    check= 1
   }else{
    istatus.innerHTML = "STRANGER"
    istatus.style.color ="red"
    btn.innerHTML = "Add Friend"
    check = 0
   }
    
})