## Game Time

The piano rocks but its time to add more fun to the Piano Rock star, how about creating a game around our event

To get turn the piano into a game we want to 
* Add songs to the game
* Add keyboard support
* Add choose piano note support
* Add score functionality

We should create a cool panel on top of our piano to enable these festures

![alt text](https://raw.github.com/CoderDojo/piano-game/master/game/doc-files/piano-game.png?login=noelking&token=e3573361872dca184dca5ebeb8df868e "Piano Rock Star")


## Create the game section on the page

we will give it css style of __gameDiv__ so add a class attribute to with the __gameDiv__ value.

````html

<div class="gameDiv">			
				
</div>


````

This __div__ should be located immediately inside the __body__ tag

````html

<body>
			<div class="gameDiv">	

			</div>
````

We now need to add the style for our game panel.  So what does our style want to achieve?  We need to 
* Set left padding to zero
* Set right padding to zero
* A border on the bottom to emphasis on piano panel, the color should be  #222222 solid and width of 1px
* Add shadow with following details: 0 1px 3px rgba(0, 0, 0, 0.25), 0 -1px 0 rgba(0, 0, 0, 0.1) inset;
* Min height of 130px
* Width of the panel to 1050px
* Margin for left of auto
* Margin for right of auto

Now add a new style to the bottom of style.css called ````div.gameDiv```` 

````css

div.gameDiv {
    padding-left: 0;
    padding-right: 0;
    border-bottom: 1px solid #222222;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25), 0 -1px 0 rgba(0, 0, 0, 0.1) inset;
    min-height: 130px;
    width: 1050px;
    margin-left: auto;
    margin-right: auto;
}

````

## Add songs to the game

On the very right of the game section we see the play note section which look like this


![alt text](https://raw.github.com/CoderDojo/piano-game/master/game/doc-files/play-note.png "Piano Rock Star")

We not need to add the HTML and CSS to display this panel so lets get started, what HTML tag should we use?  Yes you are right __div__ tag so lets go and create that div just inside the 
__gameDiv__

__NOTE__ Remember to create the closing div tag as well


````html

<div class="gameDiv">   
                <div>

                </div>
````

Now lets add some styling inside the __class__ attribute.  Can you add three styles
* songOption
* spanAuto
* span230

We create different styles so they can shared in different ares of the website, it is good standard to create small styles classes which can be reused

The class can take multiple styles as long as you seperate them by a space

````html

<div class="gameDiv">

    <div class="gamePanel spanAuto span230">
                    
                </div>      

````

Now lets add the style for this div, with the following aims

#### gamePanel style
* Set the background to #3A3A3A
* Add a border of type solid, width 1px and color #CCCCCC;
* Add a box shadow with color rgba(0, 0, 0, 0.075);
* Add text folor of #333333;
* Display block
* Set the position to relative
* Set the transistion to .02s with each of 0s
* Set padding on the div to 4px
* Add a margin top of 10px

````css

.gamePanel {
    background: #3A3A3A;
    border: 1px solid #CCCCCC;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075);
    color: #333333;
    display: block;
    position: relative;
    transition: transform 0.2s ease 0s;
    padding: 4px;
    height: 100px;
    margin-top: 10px;
}
````

Now refresh your page and is it looking like your div? not yet well we have more styling to do


#### Add hover for the song option

One cool feature that can be added in CSS is __hover__ so when you put the mouse over a section of a screen it can cause the style to change.  To do this 
you use the style __class__ in our case __gamePanel__ and then put __:hover__ after it.  This is now the style that will appear once the mouse is over this 
section.

Lets make the __div__ a little bigger when the mouse appears over the sections of its feels like 3D

````css
.songOption:hover {
    transform: scale(1.04);
 }
````


#### spanAuto style

Now lets style the spanAuto
* Set margin of 10px
* Set the float to left


````css
.spanAuto {
    margin: 10px;
    float: left;
}
````

#### span230 style

There is one important property we have not set yet? Yes its the width
* Set the width to 230px

````css
.span230 {
    width: 230px;
}
````
#### Style inside the song div

Would you agree we are slitting the div in half 
* First half with bullet > and Play note message
* Second hand displaying the note

Well its now time to add the notice div for the message, add a new div with span50p style
* Add new div with class of __span50p__
* Add new span with class __notice__  and text __>__
* Add h3 with text __Play Note__
* Add hr tag
* Close div tag

````html
<div class="gameOption spanAuto span230">
        <div class="span50p">
            <span class="notice">></span>
                <h3>Play Note</h3>
            <hr/>
            </div>

````

Great refresh the page, how does this look? not great right? Well we now need to style it.  First lets handle the __span50p__ style in style.css
* We want the __width__ to be __50%__
* Set the __float__ to __left__ 

````css
.span50p {
    width:50%;
    float: left;
}
````

Great its now time to style the notice, which adds the orange section with __>__ bullet


````css
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
```` 

The div should now look like this


````html

      <div class="gameOption spanAuto span230">
        <div class="span50p">
            <span class="notice">></span>
                <h3>Play Note</h3>
            <hr/>
            </div>
            <div class="span50p">
                <div id="note" class="info"></div>
            </div>
        </div>
    </div>
````


## Add songs to the game

Lets get started with styling the song loader, would you agreed  the song panel is inside the game div?  Lets see if we can build the play song __div__ to look like this 

![alt text](https://raw.github.com/CoderDojo/piano-game/master/game/doc-files/select-song.png?login=noelking&token=e3573361872dca184dca5ebeb8df868e "Piano Rock Star")


The first panel we want to add to our game is the load song panel, this panel should
* Have message tell players to __Select Song__
* Have a drop down we can load songs into 
* A button to play the song

For the panel we are going to us a div and style it with two styles __songOption__ and __spanAuto__ we will see 
these later

````html
	<div class="songOption spanAuto">
		
	</div>
````

So lets style this panel in the style.css and we want to set
* background
* border
* border-radius of none
* box-shadow
* text color
* position
* transition
* padding
* height
* margin-top

````css

.songOption {
    background: none repeat scroll 0 0 #3A3A3A;
    border: 1px solid #CCCCCC;
    border-radius: 0 0 0 0;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075);
    color: #333333;
    position: relative;
    transition: transform 0.2s ease 0s;
    padding: 4px;
    height: 100px;
    margin-top: 10px;
}


````

Now that we have styled this 

````html
	<div class="songOption spanAuto">
		<span class="notice">></span>
		<h3>Select Song</h3>
		<hr/>
		<select id="songs"></select>
		<input id="playSong" class="btn btn-red" type="submit" 
				value="Play Now!" name="play">
	</div>
````




````css

div.info {
	margin: 5px;
	border: thin solid #000;
	padding-top: 15px;
	height: 75px;
	font-size: 50px;
	padding-left: 5px;
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