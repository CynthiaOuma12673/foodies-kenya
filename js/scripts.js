function sendMessage (){
    var inputtedName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;


    if (inputtedName == ""){
        document.getElementById("error-one").innerHTML='Name cannot be blank!';
    }
 
    if (email == ""){
     document.getElementById("error-two").innerHTML='Email cannot be blank!';
    }
 
    if (message == ""){
     document.getElementById("error-three").innerHTML='Kindly add a message!';
    }
 
    else{
        document.getElementById("success").innerHTML="Hello " + inputtedName + ", your message was sent successfully! We will get back to you on " + email + ". Thanks";
    }



}