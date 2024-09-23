click_to_convert.addEventListener('click',function() { var speech= true;
window.SpeechRecognition= Window.webkitspeechRecognition;
const Recognition = SpeechRecognition();  
Recognition.addEventListener('result',e=>{
  const transcript = array.from(e.results)
     .map(result =>result[0])
     .map(result => result.transcript)
 convert_text.inneraHTML = transcript;
});
if(speech == true){
  Recognition.start();
 }
})