window.onload = setup;
		
var tunes;
var song;
var songsDropDown;
var score = 0;
var scorePanel;

var keyboard;

function setup() {
	songsDropDown = jQuery("#songs");
	scorePanel = jQuery("#score");
	createKeys();
	loadTunes();
	handlePlaySong();
	document.onkeydown = handleKeyboardClick;
}

function handlePlaySong() {
	var playButton = jQuery("#playSong");
	playButton.click(function() {
		var songOption = jQuery("#songs option:selected");
		var songValue = songOption.val();
		song = new Song(tunes[songValue], 1000);
		score = 0;
		scorePanel.text(score);
		song.play();
	});
}

function createKeys() {
	keyboard = new KeyBoard();
	keyboard.load();
}

function loadTunes() {
	jQuery.getJSON('js/tunes.json', function(data, textStatus) {
		if (textStatus == "success") {
			tunes = data;
			loadSongsToScreen();
		}
		else {
			alert("JSON non-success status for tunes: " + textStatus);
		}
	});
}

function loadSongsToScreen() {
	for(var currentSongNumber = 0; currentSongNumber < tunes.length; currentSongNumber++) {
		var songName = tunes[currentSongNumber].name;
		appendOption(songName);
	}
}

function appendOption(songName) {
	songsDropDown.append('<option value="' +0+'">'+
		songName +'</option>');
}

function handleKeyboardClick(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		var keyCode = new KeyCode();
		var keyHit = keyCode.getCharacter(code);
		
		var currentNote = song.note();
		var keySelect = song.getCurrentKey();

		var musicKey = keyboard.getKey(currentNote);
		console.log(musicKey.keyboardKey + '- '+ keySelect);

		if(keyHit == keySelect) {
			musicKey.clickNote();
			score = score + 10;
			scorePanel.text(score);
		}
}
