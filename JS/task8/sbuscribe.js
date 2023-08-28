let nameEl=document.getElementById("name");
let nameErrMsgEl=document.getElementById("nameErrMsg");

let emailEl=document.getElementById("email");
let emailErrMsgEl=document.getElementById("emailErrMsg");

let myFormEl=document.getElementById("myForm");
let textDataE1=document.getElementById("textData");

let formData= {
    name:"",
    email:"",
    //status:"Active",
    //gender:"Male"
  };

  nameEl.addEventListener("blur", function(event) {
    if (event.target.value==="") {
      nameErrMsgEl.textContent="Required*";
    } else {
      nameErrMsgEl.textContent="";
    }
  
    formData.name=event.target.value;
  });
  emailEl.addEventListener("blur", function(event) {
    if (event.target.value==="") {
      emailErrMsgEl.textContent="Required*";
    } else {
      emailErrMsgEl.textContent="";
    }
  
    formData.email=event.target.value;
  });

  function validateFormData(formData) {
    let {name, email} =formData;
    if (name==="") {
      nameErrMsgEl.textContent="Required*";
    }
    if (email===""){
      emailErrMsgEl.textContent="Required*";
    }
  }
  /*
  function submitFormData(formData) {
    let options= {
      method:"POST",
      headers: {
        "Content-Type":"application/json",
        Accept:"application/json",
        Authorization:
          "Bearer 94aeb36ba46864733562e6ad5fe095ea6b8641730eb681827df1569611fde29d",
      },
      body:JSON.stringify(formData)
    };
  
    let url="https://gorest.co.in/public-api/users";
  
    fetch(url, options)
      .then(function(response) {
        returnresponse.json();
      })
      .then(function(jsonData) {
        console.log(jsonData);
        if (jsonData.code===422) {
          if (jsonData.data[0].message==="has already been taken") {
            emailErrMsgEl.textContent="Email Already Exists";
          }
        }
      });
  }
  */
  
  myFormEl.addEventListener("submit", function(event){
    event.preventDefault();
    validateFormData(formData);
    //submitFormData(formData);
    //textDataE1.textContent=formData;
  });