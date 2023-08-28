let newPasswordEl=document.getElementById("newPassword");
let newPasswordErrMsgEl=document.getElementById("newPasswordErrMsg");

let confirmPasswordEl=document.getElementById("confirmPassword");
let confirmPasswordErrMsgEl=document.getElementById("confirmPasswordErrMsg");

let updatePasswordFormEl=document.getElementById("updatePasswordForm");
let textMsgE1=document.getElementById("textMsg");
let updatePasswordFormE1=document.getElementById("updatePasswordForm");

let formData= {
    newPassword:"",
    confirmPassword:"",
  };

newPasswordEl.addEventListener("blur", function(event) {
    if (event.target.value==="") {
        newPasswordErrMsgEl.textContent="Required*";
    } else {
        newPasswordErrMsgEl.textContent="";
    }
  
    formData.name=event.target.value;
  });
  confirmPasswordEl.addEventListener("blur", function(event) {
    if (event.target.value==="") {
        confirmPasswordErrMsgEl.textContent="Required*";
    } else {
        confirmPasswordErrMsgEl.textContent="";
    }
  
    formData.name=event.target.value;
  });

  function updatepass(formData){
    let newPassword=newPasswordEl.value;
    let confirmPassword=confirmPasswordEl.value;
    if(newPassword===confirmPassword){
        textMsgE1.textContent="password updated successfully!";
        textMsgE1.style.color="green";
        textMsgE1.style.fontSize="30px"
    }else{
        textMsgE1.textContent="passwod is mismatch";
        textMsgE1.style.color="red";
        textMsgE1.style.fontSize="30px"
    }

  }
  updatePasswordFormE1.addEventListener("submit", function(event){
    event.preventDefault();
    updatepass(formData);
    //submitFormData(formData);
    //textDataE1.textContent=formData;
  });
  //updatePasswordFormE1.addEventListener("click",updatepass);
