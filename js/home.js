

// order.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     validateInputs();
// })
 document.getElementById("btn").onclick = function() {
    document.getElementById("order").style.display = "block";
}
document.getElementById("submitOrder").onclick = function() {
    document.getElementById("order").style.display = "none";
}
const form=document.querySelector('form');
const nameInput=document.querySelector('input[name="name"]');
const phoneInput=document.querySelector('input[name="phone"]');
const locationInput=document.querySelector('input[name="location"]');
 const error_message=document.querySelector('#error_meesage');
const foodInput=document.querySelector('input[name="food"]');
let text;
const validateInputs=()=>{
    if(!nameInput.value){
        alert("Please enter valid Name");
    }
    if(!phoneInput.value){
        alert("Please enter valid Phone Number");
}
if(location.length <2){
    alert("Please enter valid location");
}else{
    alert("Thank you for contacting us!");
   return true;
}
}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    validateInputs();
});