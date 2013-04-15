var keyPressed = false;

function MusicKey(noteFile, noteId, selectedCss) {
		
		var noteFile = noteFile;
		var imageId = imageId;
		var selectedCss = selectedCss;
		
		this.clickNote = clickNote;
		this.getCurrentNote = getCurrentNote;
		
		var note = $("#"+noteId);
		
		note.click(function() {
			keyPress();
		});
		
		function clickNote() {
			note.click();
		}
		
		function getCurrentNote() {
			return note;
		}
		
		function keyPress() {
			if(!keyPressed) {
				keyPressed = true;
				note.addClass(selectedCss);
				playAudio();
				keyPressed = false;
				setTimeout(resetKey, 400);
			}
		}
		
		function resetKey() {
			note.removeClass(selectedCss);
		}
		
		function playAudio() {
			var audio = "<audio style='display: none' autoplay><source src="+noteFile+" type='audio/wav'/></audio>";
			note.append(audio);
		}
}
