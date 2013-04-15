function Song(songDetails, timeout) {
	var name = songDetails.name;
	var notes = songDetails.notes;
	var currentNoteNumber = 0;
	var notePanel;
	var keyboardPanel;
	var timeout = timeout;
	var currentMusicKey;
	
	this.currentNote;
	this.currentKey;
	
	this.play = play;
	this.note = note;
	this.getCurrentKey = getCurrentKey;
	
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
			this.currentNote = notes[currentNoteNumber].note;
			this.currentKey =  notes[currentNoteNumber].keyboard;
			currentMusicKey = keyboard.getKey(currentNote).getCurrentNote();
			currentMusicKey.addClass('nextNote');
			setNoteColor();
			notePanel.text(currentNote);
			keyboardPanel.text(currentKey);
			currentNoteNumber++;
			setTimeout(displayNextNote, timeout);
			setTimeout(removeKeySupport, 800);
		}
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
