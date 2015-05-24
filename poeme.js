/**
 * Created by gkuma on 24/05/15.
 */

function rand_a_b(min, max)
{
    return Math.floor(Math.random() * (max - min) + min);
}
var poemData = [
    [['Je laisse mon Magma', 'Sous la haute bifurcation', 'Sur les bourasque'],	['vogonesque', 'arabesque', 'caravagesque']],
    [['Embriculé loin de', 'Articulé depuis', 'Jufile sur'],				['la blatosphere', 'la litiere', 'l\'embarcardaire']],
    [['Dans la zone sontale', 'Sous les pres martial', 'Dans la lune basse'],  	['inifugé', 'limiboufé', 'articoté']],
    [['Par treize pourtours', 'Par des parcours', 'Vers les generateur'],			['calometrique', 'histarique', 'Artistique']],
    [[''],['']],
    [['Oh freddled', 'Les burgondin', 'Les virtisute', 'Ces martiquais'], ['gruntbuggly', 'mircondilys', 'mysterique', 'lurdigquant']],
    [['Les micturations de Thy', 'Les steroisade', 'Ces mistyfandandre'], ['sont à moi', 'grandissent bruissillement', 'distingue le vertisandre']],
    [['Comme plurdled', 'Sous les martinification'], ['gabbleblotchits', 'striduladits', 'pourifisit']],
    [['Sur une abeille de', 'Dans les flots du', 'Là où les stigates de'], ['flodibus', 'lurgid', 'fartigade', 'clirtallis']],
    [['Ce mordiously hath bitled', 'Ces youstricops utrilis', 'Le mourtisons yotilop'], ['deplacé', 'vendu', 'nistifé', 'nistilade', 'dehors', 'aliste']],
    [['Son earted des ', 'Sa kulista des', 'Mon butilis des'],['jartisaux', 'jurtles', 'rutilles', 'fillies']]
]
var poetry = "";
for (var i = 0, c = poemData.length; i < c; i++)
{
    for (var j = 0, d = poemData[i].length; j < d; j++)
    {
        poetry += poemData[i][j][rand_a_b(0, poemData[i][j].length)];
        if (poemData[i].length == j + 1)
            poetry += '<br />';
        else
            poetry += ' ';
    }
}
var paragraphe = document.getElementById('mypoem');

paragraphe.innerHTML = poetry;
var button = document.getElementById('speak');
// Get the text input element.
//var speechMsgInput = document.getElementById('mypoem').innerHTML;


function speak() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.getElementById('mypoem').innerHTML;
    msg.volume = parseFloat(0.9);
    msg.rate = parseFloat(0.8);
    msg.pitch = parseFloat(0.5);
    msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Google Français'; })[0];
    msg.voice.lang = 'fr-FR';
    msg.text = msg.text.replace(/\<br\>/g, ", ");
    window.speechSynthesis.speak(msg);
    console.log(msg.voice);
    console.log(msg.text);
    console.log();

}

button.addEventListener('click', function(e) {

    if (document.getElementById('mypoem').innerHTML.length > 0) {
        speak();
    }
});