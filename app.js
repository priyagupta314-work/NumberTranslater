var inputText=document.querySelector("#inpText");
var btnTrans=document.querySelector("#btnTranslate");
var outputText=document.querySelector("#outText");
var url="https://api.funtranslations.com/translate/numbers.json";
function errorHandler(error){
    alert("There is some error with server. Try after some time.")
}
btnTrans.addEventListener("click",function translateNumber(){
    fetch(url+"?text="+parseInt(inputText.value))
    .then(response => response.json())
    .then(json => outputText.innerText=json.contents.translated)
    .catch(errorHandler);
})