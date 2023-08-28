let bgContainerImage=document.getElementById("bgContainer");
let themeUserInputE1=document.getElementById("themeUserInput");
let headingE1=document.getElementById("heading");

let lightThemeImageUrl="url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";

let darkThemeImageUrl="url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";


//bgContainerImage.style.backgroundImage="url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
//bgContainerImage.style.backgroundSize = "100% 50%";



function changeTheme(event){
    if(event.key === "enter") {
        let themeUserInputVal = themeUserInputE1.value;
      console.log(event);
        if(themeUserInputVal === "Light"){
            bgContainerImage.style.backgroundImage=lightThemeImageUrl;
           // bgContainerImage.style.backgroundSize = "100% 50%";
            headingE1.style.color="red";
        }else if(themeUserInputVal === "Dark"){
            bgContainerImage.style.backgroundImage =darkThemeImageUrl;
            headingE1.style.color = "blue";
            //bgContainerImage.style.backgroundSize = "100% 50%";
        }else{
            alert("Enter the valid input");
        }
    
    }
}   

themeUserInputE1.addEventListener("keydown",changeTheme);
