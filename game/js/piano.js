window.onload = setup

var keyPressed = false;

function MusicKey(noteFile, imageId) {
		
		var noteFile = noteFile;
		var imageId = imageId;
		
		var note = $("#"+imageId);
		
		note.click(function() {
			if(!keyPressed) {
				keyPressed = true;
				changeKeyImage();
				playAudio();
				setTimeout(resetKeyImage, 100);
				keyPressed = false;	
			}
		});
		
		function changeKeyImage() {
			note.attr('src','images/key-pressed.png');
			note.css('height','390px');
		}
		
		function playAudio() {
			var audio = "<audio style='display: none' autoplay><source src="+noteFile+" type='audio/wav'/></audio>";
			note.append(audio);
		}
		
		function resetKeyImage() {
			note.css('height','400px');
			note.attr('src','images/key.png');
		}		
}


var keyC;
var keyD;
var keyE;
var keyF;
var keyG;
var keyA;
var keyB;
var keyC1;
var keyD1;
var keyE1;
var keyF1;

function setup() {
	keyC = new MusicKey('notes/C.wav','keyC');
	keyD = new MusicKey('notes/D.wav','keyD');
	keyE = new MusicKey('notes/E.wav','keyE');
	keyF = new MusicKey('notes/F.wav','keyF');
	keyG = new MusicKey('notes/G.wav','keyG');
	keyA = new MusicKey('notes/A.wav','keyA');
	keyB = new MusicKey('notes/B.wav','keyB');
	keyC1 = new MusicKey('notes/C1.wav','keyC1');
	keyD1 = new MusicKey('notes/D1.wav','keyD1');
	keyE1 = new MusicKey('notes/G1.wav','keyE1');
	keyF1 = new MusicKey('notes/F1.wav','keyF1');
}
o
