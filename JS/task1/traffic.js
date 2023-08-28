    document.getElementById("trafficLightRed");
    document.getElementById("trafficLightYellow");
    document.getElementById("trafficLightGreen");
    document.getElementById("redButton");
    document.getElementById("yellowButton");
    document.getElementById("greenButton");
    function stopButton() {
        clearLights();
        document.getElementById("trafficLightRed").style.backgroundColor ="red";
        document.getElementById("redButton").style.backgroundColor ="red";
      }
    function readyButton() {
        clearLights();
        document.getElementById("trafficLightYellow").style.backgroundColor ="orange";
        document.getElementById("yellowButton").style.backgroundColor ="orange";
      }
      function goButton() {
        clearLights();
        document.getElementById("trafficLightGreen").style.backgroundColor ="green";
        document.getElementById("greenButton").style.backgroundColor ="green";
      }
      function clearLights() {
        document.getElementById("trafficLightRed").style.backgroundColor ="grey";
        document.getElementById("redButton").style.backgroundColor ="rgb(31, 29, 65)";
        document.getElementById("trafficLightYellow").style.backgroundColor ="grey";
        document.getElementById("yellowButton").style.backgroundColor ="rgb(31, 29, 65)";
        document.getElementById("trafficLightGreen").style.backgroundColor ="grey";
        document.getElementById("greenButton").style.backgroundColor ="rgb(31, 29, 65)";
      }
/*
function readyButton(){
    document.getElementById("trafficLightYellow").style.backgroundColor="yellow";
}
function goButton(){
    document.getElementById("trafficLightGreen").style.backgroundColor="green";
}
*/

