
const usernamee = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const errorElement = document.getElementsByClassName('form__error');

console.log(password);
console.log(confirmPassword);

const form = document.getElementById('formjs');

form.addEventListener('submit', (e) => {
    let message = []
    if(message.length > 0){
        e.preventDefault()

        errorElement.innerText = message.join(', ');
    }
})



confirmPassword.addEventListener('keypress',checkLength2);
password.addEventListener('keypress', checkLength);

function checkLength(){
  let lengthPass = password.value.length;
  console.log(lengthPass);

  if(lengthPass < 8 ){
    document.getElementById('alertP').innerHTML = "Password needs to be longer than 8 characters";

    let active = document.getElementById('alertP');
    
    active.classList.add('active');
 
  }
  else{
    document.getElementById('alertP').innerHTML = "";
  }
}

function submitForm(){

    const isValid = ValidateEmail(email.value);
    // console.log(isValid);

    let classn = document.getElementsByClassName('form__error--email');
    for(let i=0; i<classn.length;i++){
        let current = classn[i];
        if(isValid === false){
        current.classList.add('active');
    }else if (isValid === true){
           current.classList.remove('active');
    }

    }

    let usernameeActive = document.getElementsByClassName('form__error--username');
    for(let i=0; i<usernameeActive.length;i++){
        let atm = usernameeActive[i];

        if(isEmpty(usernamee.value) == true ){
                atm.classList.add('active');
        }else{
            atm.classList.remove('active');
        }
    }



    if(password.value == '' || confirmPassword == ''){
        let passActive = document.getElementsByClassName('form__error--password');
        console.log(passActive);

        for(let i=0; i < passActive.length;i++){
            let pass = passActive[i];
            console.log(pass);
           pass.classList.add('active');
         pass.innerHTML = "Not valid or empty!";

        }
    }else if(password.value != confirmPassword.value){
        let passActive = document.getElementsByClassName('form__error--password');

        for(let i=0; i < passActive.length;i++){
            let pass = passActive[i];
            console.log("not the same");
           pass.classList.add('active');
         pass.innerHTML = "Password dont match";
    }
}
 else if(password.value != '' ||  confirmPassword.value != null){
  let passActive = document.getElementsByClassName('form__error--password');
   for(let i=0; i < passActive.length;i++){
     let pass = passActive[i];
     console.log("");
    pass.classList.remove('active');
}

  }




function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {
      return true;

    } else {
      return false;
    }
  }


  function isEmpty(text){
      if(text == ""){
          return true;
      }else{
          return false;
      }
  }


  function checkPasswordMatch(input1,input2){
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
        console.log('wrong password')
        return false;
      }
      return true;
      console.log('right password')

    }

   
  



} //submit form ends here




    function checkLength2(){
      let confirmPasswordd = confirmPassword.value.length;
      console.log(confirmPasswordd);
    
      if(confirmPasswordd < 8){
        document.getElementById('alertPP').innerHTML = "Password needs to be longer than 8 characters";
    
        let active = document.getElementById('alertPP');
        
        active.classList.add('active');
     
      }else{
        document.getElementById('alertPP').innerHTML = "";
      }
    }


