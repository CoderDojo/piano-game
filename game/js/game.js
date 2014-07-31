
function Game(keyboard) {
			
	var tunesList;
	var song;
	var songsDropDown;
	var score ;
	var scorePanel;

	this.handleKeyboardClick = handleKeyboardClick;
	this.isGameRunning = isGameRunning;
	
	setupGame();

	function setupGame() {
		songsDropDown = jQuery("#songs");
		scorePanel = jQuery("#score");
		score = 0;
		loadTunes();
		handlePlaySong();
	}

	function loadTunes() {
		var tunes = new Tunes();
		tunesList = tunes.list;
		loadSongsToScreen();
	}

	function loadSongsToScreen() {
		for(var currentSongNumber = 0; currentSongNumber < tunesList.length; currentSongNumber = currentSongNumber+1) {
			var songName = tunesList[currentSongNumber].name;
			appendOption(songName, currentSongNumber);
		} 
	}

	function appendOption(songName, songVal) {
		songsDropDown.append('<option value="' +songVal+'">'+
			songName +'</option>');
	}

	function isGameRunning() {
		if(song) {
			var currentNote = song.note();
			//if current note is blank game not playing
			if(currentNote == "") {
				return false;
			} else { //note value is not blank so game playing
				return true;
			}
		} 
		return false;
	}

	function handlePlaySong() {
		var playButton = jQuery("#playSong");
		playButton.click(function() {
			playSong();			
		});
	}

	function playSong() {
		var songOption = jQuery("#songs option:selected");
		var songValue = songOption.val();
		song = new Song(tunesList[songValue], 1000, keyboard);
		score = 0;
		scorePanel.text(score);
		song.play();
	}

	function handleKeyboardClick(keyHit) {
		console.log(keyHit);

		var currentNote = song.note();
		var hitNote = keyboard.getMusicKeyFromKeyboard(keyHit);
		var expectedNote = keyboard.getKey(currentNote);

		if(hitNote == expectedNote) {
			expectedNote.clickNote();
			score = score + 10;
			scorePanel.text(score);
		}

	}
}
