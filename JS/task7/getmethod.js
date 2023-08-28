// script.js
document.addEventListener("DOMContentLoaded", () => {
    const fetchDataButton = document.getElementById("sendGetRequestBtn");
    const requestStatusE1 = document.getElementById("requestStatus");
    const httpResponseE1=document.getElementById("httpResponse");
    

    fetchDataButton.addEventListener("click", () => {
      fetchData();
    });
  
    async function fetchData() {
      try {
        const response = await fetch("https://gorest.co.in/public/v2/users");
        const data = await response.json();
        console.log(data);
        requestStatusE1.textContent=response.status;
        displayData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    function displayData(data) {
        httpResponseE1.innerHTML = ""; // Clear previous data
      data.forEach((item) => {
        //const postElement = document.createElement("div");
        httpResponseE1.innerHTML =`<h5>${item.name}</h5><p>${item.email}</p><p>${item.gender}</p><p>${item.status}</p>`;
        //dataContainer.appendChild(postElement);
        // `<h5>${item.name}</h5><p>${item.email}</p><p>${item.gender}</p>`;
      });
    }
  });

