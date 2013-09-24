
function Game(keyboard) {
			
	var tunes;
	var song;
	var songsDropDown;
	var score = 0;
	var scorePanel;

	this.setupGame = setupGame;
	this.handleKeyboardClick = handleKeyboardClick;
	this.isGameRunning = isGameRunning;
	
	setupGame();

	function setupGame() {
		songsDropDown = jQuery("#songs");
		scorePanel = jQuery("#score");
		loadTunes();
		handlePlaySong();
		document.onkeydown = handleKeyboardClick;
	}

	function isGameRunning() {
		var currentNote = song.note();
		//if current note is blank game not playing
		if(currentNote == "") {
			return false;
		} else { //note value is not blank so game playing
			return true;
		}
	}

	function handlePlaySong() {
		var playButton = jQuery("#playSong");
		playButton.click(function() {
			var songOption = jQuery("#songs option:selected");
			var songValue = songOption.val();
			song = new Song(tunes[songValue], 1000, keyboard);
			score = 0;
			scorePanel.text(score);
			song.play();
		});
	}

	function loadTunes() {
		var tunesList = new Tunes();
		tunes = tunesList.list;
		loadSongsToScreen();
	}

	function loadSongsToScreen() {
		for(var currentSongNumber = 0; currentSongNumber < tunes.length; currentSongNumber++) {
			var songName = tunes[currentSongNumber].name;
			appendOption(songName, currentSongNumber);
		} 
	}

	function appendOption(songName, songVal) {
		songsDropDown.append('<option value="' +songVal+'">'+
			songName +'</option>');
	}

	function handleKeyboardClick(keyHit) {

			var currentNote = song.note();
			var keySelect = song.getCurrentKey();

			var musicKey = keyboard.getKey(currentNote);

			if(keyHit == keySelect) {
				musicKey.clickNote();
				score = score + 10;
				scorePanel.text(score);
			}
	}
}
