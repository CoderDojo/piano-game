/**
 * 
 */
function Song(songDetails, timeout, keyboard) {

	this.currentNote;	
	this.play = play;
	this.note = note;

	var name = songDetails.name;
	var notes = songDetails.notes;
	var currentNoteNumber = 0;
	var notePanel;
	var keyboardPanel;
	var timeout = timeout;
	
	function play() {
		currentNoteNumber = 0;
		notePanel = jQuery("#note");
		keyboardPanel = jQuery("#keyboard");
		displayNextNote();
	}
	
	function getCurrentKey() {
		return currentKey;
	}
	
	function note() {
		return currentNote;
	}
	
	function displayNextNote() {
		if(currentNoteNumber < notes.length) {
			this.currentNote = notes[currentNoteNumber];
			if(currentNote != "") {
				displayNoteOnScreen();
				currentNoteNumber++;
				setTimeout(displayNextNote, timeout);
				setTimeout(removeKeySupport, 800);
			}
		}
	}

	function displayNoteOnScreen() {
		currentMusicKey = keyboard.getKey(currentNote).getCurrentNote();
		currentMusicKey.addClass('nextNote');
		setNoteColor();
		notePanel.text(currentNote);
		keyboardPanel.text(keyboard.getNoteForKeyboard(currentNote));
	}
	
	function removeKeySupport() {
			currentMusicKey.removeClass('nextNote');
	}
	
	function setNoteColor() {
		if(currentNoteNumber%2 == 0) {
			notePanel.css('color', '#EB3C00');
			keyboardPanel.css('color', '#EB3C00');
		} else {
			notePanel.css('color', 'green');
			keyboardPanel.css('color', 'green');
		}
	}
}
