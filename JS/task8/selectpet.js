let petSelectE1=document.getElementById("petSelect");
let petImgE1=document.getElementById("petImg");

  let changeBgImage = function(){
    if(document.getElementById("petSelect").value === "select"){
        petImgE1.style.backgroundImage = "";
    }
    else if(document.getElementById("petSelect").value === "Cat"){
        petImgE1.style.backgroundImage = "url('https://res.cloudinary.com/dsm5qqqrm/image/upload/v1691053655/a253503a26eb6f5c523f800669c80a1d_wdeggo.jpg')";
    }else if(document.getElementById("petSelect").value === "Dog"){
        petImgE1.style.backgroundImage = "url('https://res.cloudinary.com/dsm5qqqrm/image/upload/v1691054998/golder-retriever-puppy_tfrwvf.jpg')";
    }else if(document.getElementById("petSelect").value === "Parrot"){
        petImgE1.style.backgroundImage = "url('https://res.cloudinary.com/dsm5qqqrm/image/upload/v1691055012/1800_cuctmi.jpg')";
    }else if(document.getElementById("petSelect").value === "Spider"){
        petImgE1.style.backgroundImage = "url('https://res.cloudinary.com/dsm5qqqrm/image/upload/v1691055029/GettyImages-5988-061502-2000-7b729e6d55f74ab18c8a7aa5c3f1b0a3_vfping.jpg')";
    }
    
    
};

petSelectE1.addEventListener('change', changeBgImage);
