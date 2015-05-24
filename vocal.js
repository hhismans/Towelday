var button = document.getElementById('speak');
// Get the text input element.
var speechMsgInput = document.getElementById('mypoem');
function speak(text) {
    var msg = new SpeechSynthesisUtterance();
    var voice = speechSynthesis.getVoices();
    msg.text = text;
    msg.volume = parseFloat(0.8);
    msg.rate = parseFloat(0.1);
    msg.pitch = parseFloat(0.1);
    msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Albert'; })[0];
    window.speechSynthesis.speak(msg);
}
button.addEventListener('click', function(e) {
    if (speechMsgInput.value.length > 0) {
        speak(speechMsgInput.value);
    }
});