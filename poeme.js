/**
 * Created by gkuma on 24/05/15.
 */

/* GLOBALS */
var button = document.getElementById('speak');
var count = 0;
var poetry = ["", "", ""];

function rand_a_b(min, max)
{
	return Math.floor(Math.random() * (max - min) + min);
}

function generatePoem() {
var poemData = [
[['Je laisse mon Magma', 'Sous la haute bifurcation', 'Sur les bourasque'],    ['vogonesque', 'arabesque', 'caravagesque']],
	[['Embriculé loin de', 'Articulé depuis', 'Jufile sur'],                ['la blatosphere', 'la litiere', 'l\'embarcardaire']],
	[['Dans la zone sontale', 'Sous les pres martial', 'Dans la lune basse'],      ['inifugé', 'limiboufé', 'articoté']],
	[['Par treize pourtours', 'Par des parcours', 'Vers les generateur'],            ['calometrique', 'histarique', 'Artistique']],

	[['Oh freddled', 'Les burgondin', 'Les virtisute', 'Ces martiquais'], ['gruntbuggly', 'mircondilys', 'mysterique', 'lurdigquant']],
	[['Les micturations de Thy', 'Les steroisade', 'Ces mistyfandandre'], ['sont à moi', 'grandissent bruissillement', 'distingue le vertisandre']],
	[['Comme plurdled', 'Sous les martinification'], ['gabbleblotchits', 'striduladits', 'pourifisit']],
	[['Sur une abeille de', 'Dans les flots du', 'Là où les stigates de'], ['flodibus', 'lurgid', 'fartigade', 'clirtallis']],

	[['Ce mordiously hath bitled', 'Ces youstricops utrilis', 'Le mourtisons yotilop'], ['deplacé', 'vendu', 'nistifé', 'nistilade', 'dehors', 'aliste']],
	[['Son earted des ', 'Sa kulista des', 'Mon butilis des'],['jartisaux', 'jurtles', 'rutilles', 'fillies']],
	[['Son earted des ', 'Sa kulista des', 'Mon butilis des'],['jartisaux', 'jurtles', 'rutilles', 'fillies']],
	[['Son earted des ', 'Sa kulista des', 'Mon butilis des'],['jartisaux', 'jurtles', 'rutilles', 'fillies']]
	]
	for (var i = 0, c = poemData.length; i < c; i++)
{
	for (var j = 0, d = poemData[i].length; j < d; j++)
	{
		poetry[Math.floor(i / 4)] += poemData[i][j][rand_a_b(0, poemData[i][j].length)];
		if (poemData[i].length == j + 1)
			poetry[Math.floor(i / 4)] += '<br />';
		else
			poetry[Math.floor(i / 4)] += ' ';
	}
}
var paragraphe = document.getElementById('mypoem');

paragraphe.innerHTML = poetry[0] + '<br \>' + poetry[1] + '<br \>' + poetry[2];

}

function speak() {
	var msg = new SpeechSynthesisUtterance();
	msg.text = poetry[count];
	msg.volume = parseFloat(0.9);
	msg.rate = parseFloat(0.8);
	msg.pitch = parseFloat(0.5);
	msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Google Français'; })[0];
	msg.lang = 'fr-FR';
	msg.text = msg.text.replace(/\<br \/\>/g, ", ");
	window.speechSynthesis.speak(msg);
	msg.onstart = function(event) {
		console.log('The utterance started to be spoken.');
	};
	console.log(msg.voice);
	console.log(msg.text);
	msg.onend = function(event) {
		console.log('The utterance has been spoken.');
		count++;
		if (count < 3)
			speak();
	};
}

button.addEventListener('click', function(e){

   // void window.location.reload();
	window.speechSynthesis.cancel();
	var paragraphe = document.getElementById('mypoem').innerHTML = "";
	poetry = ["", "", ""];
	count = 0;
	generatePoem();
	if (document.getElementById('mypoem').innerHTML.length > 0) {
		speak();
	}
});
