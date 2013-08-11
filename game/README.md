## Game Time

The piano rocks but its time to add more fun to the Piano Rock star, how about creating a game around our event

To get turn the piano into a game we want to 
* Add songs to the game
* Add keyboard support
* Add choose piano note support
* Add score functionality

We should create a cool panel on top of our piano to enable these festures

![Image](../blob/master/piano-game.png?raw=true)

````css

div.menuDiv {
	border-radius: 0 0 0 0;
    padding-left: 0;
    padding-right: 0;
    background: none repeat scroll 0 0 #000000;
    border-bottom: 1px solid #222222;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25), 0 -1px 0 rgba(0, 0, 0, 0.1) inset;
    min-height: 130px;
    width: 1050px;
    margin-left: auto;
    margin-right: auto;
}


div.info {
	margin: 5px;
	border: thin solid #000;
	padding-top: 15px;
	height: 75px;
	font-size: 50px;
	padding-left: 5px;
}


.songOption {
    background: none repeat scroll 0 0 #3A3A3A;
    border: 1px solid #CCCCCC;
    border-radius: 0 0 0 0;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075);
    color: #333333;
    display: block;
    position: relative;
    transition: transform 0.2s ease 0s;
    padding: 4px;
    height: 100px;
    margin-top: 10px;
}

.songOption:hover {
    color: #333333;
    text-decoration: none;
    transform: scale(1.04);
 }
 
 span.notice {
	margin-top: 10px;
    background: none repeat scroll 0 0 #EB3C00;
    border-radius: 50% 50% 50% 50%;
    color: #FFFFFF;
    display: inline-block;
    float: left;
    font-size: 15px;
    font-weight: bold;
    height: 32px;
    line-height: 30px;
    margin-right: 10px;
    text-align: center;
    width: 30px;
}

hr {
    border-bottom: 0 none #CCCCCC;
    border-color: #CCCCCC;
}

h3 {
	font-family: 'Lato',sans-serif;
	color: #AAAAAA;
	font-size: 12px;
}

.btn-red {
	background-color: #006DCC;
    background-image: linear-gradient(to bottom, #0088CC, #0044CC);
    background-repeat: repeat-x;
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
    color: #FFFFFF;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.btn {
    border-radius: 3px 3px 3px 3px;
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    border-style: solid;
    border-width: 1px;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset, 0 1px 2px rgba(0, 0, 0, 0.05);
    display: inline-block;
    font-size: 13px;
    line-height: 18px;
    margin-bottom: 0;
    padding: 4px 10px;
    text-align: center;
    vertical-align: middle;
     margin-left: 0;
}

.red {
	color: #CC0000;
}

div.keyboardInfo {
    background-color: gray;    
    font-weight: bold;
}


````



````html

<div class="menuDiv">			
				<div class="songOption spanAuto">
					<span class="notice">></span>
					<h3>Select Song</h3>
					<hr/>
					<select id="songs"></select>
					<input id="playSong" class="btn btn-red" type="submit" 
					 value="Play Now!" name="play">
				</div>
				<div class="songOption spanAuto span230">
					<div class="span50p">
					<span class="notice">></span>
						<h3>Play Note</h3>
					<hr/>
					</div>
					<div class="span50p">
						<div id="note" class="info"></div>
					</div>
				</div>
				<div class="songOption spanAuto span230">
					<div class="span50p">
					<span class="notice">></span>
						<h3>Keyboard</h3>
					<hr/>
					</div>
					<div class="span50p">
						<div id="keyboard" class="info"></div>
					</div>
				</div>
				<div class="songOption spanAuto span230">
					<div class="span50p">
					<span class="notice">></span>
						<h3>Score</h3>
					<hr/>
					</div>
					<div class="span50p">
						<div id="score" class="info red">0</div>
					</div>
				</div>
			</div>

````