const email =document.getElementById("mail")
const mail2=document.getElementById("gmail")
const form =document.getElementById("form")
const pwd =document.getElementById("password")
const usr =document.getElementById("name")
const sub = document.getElementById("btn")
const check = document.querySelector('#chec')
const sub2 =document.getElementById("bt2")
const pwd2 =document.getElementById("password2")
const pwd3 =document.getElementById("password3")
//queryselector pour les chekbox
const check2 = document.querySelector('#chec2')
const phone=document.getElementById("tel")

//email
email.addEventListener("input", ()=>{
    const emailRegex=  /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/
      if(emailRegex.test(email.value)){
        email.setCustomValidity('');
      }
      else if(email==''){
        email.setCustomValidity("remplir l'email")
      }
      else{
        email.setCustomValidity("please enter valid mail")
      }
     });
  //password
  pwd.addEventListener('input',()=>{
    const pwdRegex=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/
        if(pwdRegex.test(pwd.value) ){
          pwd.setCustomValidity('');
        }
        else if(pwd==""){
          pwd.setCustomValidity("remplir le mot de passe")
        }
        else{
          pwd.setCustomValidity("enter strongpassword")
        
        }
  })
  check.addEventListener('change',function(){
    if(this.checked){
     sub.disabled=false;
    }
    else{
     sub.disabled=true;
    }

 })  
  function validform(){
    if( email.value.checkValidity() && pwd.value.checkValidity()){
      sub.disabled=false;
    }
    else{
     sub.disabled=true;
    }
   }
   check.addEventListener('change',function(){
    if(this.checked){
     sub.disabled=false;
    }
    else{
     sub.disabled=true;
    }

 })

    //inscription
  usr.addEventListener('input',()=>{
    if(usr.value.length >=4){
         usr.setCustomValidity('');
    }
    else{
      usr.setCustomValidity("user name must have 4 carters")
    }
  })
 
  mail2.addEventListener('input',()=>{
       const gemailRegex=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/
       if(gemailRegex.test(mail2.value)){
        mail2.setCustomValidity("");
       }
      else{
        mail2.setCustomValidity("please enter valid mail")
      } 
  })
  pwd2.addEventListener('input',()=>{
 
      if(pwd2.value===pwd3.value ){  
        pwd2.setCustomValidity('');
      }
      else{
        paxsfewwd2.setCustomValidity("enter the same password ")
      }  
      
  })

  pwd3.addEventListener('input',()=>{
    const preg= /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/
    if( preg.test(pwd3.value)){  
      pwd3.setCustomValidity('');
    }
    else{
      pwd3.setCustomValidity("ennter the pass stong")
    }  
    
})
  check2.addEventListener('change',function(){
    if(this.checked ){
     sub2.disabled=false;
    }
    else{
     sub2.disabled=true;
    }

 })
function validform2(){
  if(mail2.checkValidity()&&pwd2.checkValidity() && usr.checkValidity() && pwd3.checkValidity()){
    sub2.disabled=false;
  }else{
    sub2.disabled=true
  }
}


