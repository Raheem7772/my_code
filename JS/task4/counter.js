let counterElement=document.getElementById("counterValue");
function onIncrement() {
    let previousCounterValue = counterElement.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    let clickCount=updatedCounterValue;
    localStorage.setItem("clickCount",clickCount);
    let storedCounterValue=localStorage.getItem("clickCount");
    if (updatedCounterValue > 0) {
        counterElement.textContent = updatedCounterValue;
        }
        
        }
        