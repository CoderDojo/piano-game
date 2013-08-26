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
* Set the __margin__ to __10px__
* Set the __background__ to __#EB3C00__
* Set the __border-radius__ to __50%__ for each corner, so its a circle
* Set the text __color__ to __#FFFFFF__
* Set the __display__ to __inline-block__
* Set the __float__ to __left__
* Set the __font-size__ to __15px__
* Set the __font-weight__ to __bold__
* Set the __height__ to __32px__
* Set the __line-height__ to __30px__
* Set the __margin-right__ to __10px__
* Set the __text-align__ to __center__
* Set the __width__ to __30px__

````css
 span.notice {
    margin-top: 10px;
    background: #EB3C00;
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
#### Set the h3 style

We now need to style the __h3__ so go to __style.css__ and using the tag name create a new style that
* Set the __font-family__ to __'Lato',sans-serif__
* Set the text __color__ to __ #AAAAAA__
* Set the __font-size__ to __12px__

````css
h3 {
    font-family: 'Lato',sans-serif;
    color: #AAAAAA;
    font-size: 12px;
}
````

Now refresh and your play note section should be looking alot better

#### Add the section to display the note

Now add a section for displaying the note, by creating a new __div__

````html
<div class="span50p">
                <div id="note" class="info"></div>
            </div>
````

The play note __div__ is now complete and should look exactly like this

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

We have already see the __span50p__ style, but we need to add the new style for __info__ to style.css

####Style for info
* Set __margin__ of __5px__
* Set the __border__ of __thin solid__ and color __#000__
* Set the __padding-top__ of __15px__
* Set the __height__ of __75px__
* Set the __font-size__ of __50px__
* Set the __text-align__ to __center__

````css
div.info {
    margin: 5px;
    border: thin solid #000;
    padding-top: 15px;
    height: 75px;
    font-size: 50px;
    text-align: center;
}
````

## Add songs to the game

Now lets create and style the song loader, would you agreed the song panel is inside the game div?  Lets see if we can build the play song __div__ to look like this 

![alt text](https://raw.github.com/CoderDojo/piano-game/master/game/doc-files/select-song.png "Piano Rock Star")

This panel should
* Have message tell players to __Select Song__
* Have a drop down we can load songs into 
* A button to play the song

This panel is going to be very similar to the play note one we just created, so lets create add the following HTML

````html
	<div class="gamePanel spanAuto">
        <span class="notice">></span>
        <h3></h3>
        <hr/>
        
     </div>
````

Now inside the __h3__ tags add the text __Select Song__ so we now look like this

````html
    <div class="gamePanel spanAuto">
        <span class="notice">></span>
        <h3></h3>
        <hr/>
        
     </div>
````

Now create a new html __select__ tag, with an __option__ for __Select__, the select song html should now look like this


````html
    <div class="gamePanel spanAuto">
        <span class="notice">></span>
        <h3>Select Song</h3>
        <hr/>
        <select id="songs"><option>Select</option></select>
     </div>
````

Great this looks really good, but dont have a button to start the game, lets add a __button__ with existing style classes
* btn
* btn-red

* Give the button an __id__ of __playSong__

The select song html should now look like this.

````html
    <div class="gamePanel spanAuto">
        <span class="notice">></span>
        <h3>Select Song</h3>
        <hr/>
        <select id="songs"><option>Select</option></select>
        <button id="playSong" class="btn btn-red" type="submit" >Play Now!</button>
     </div>
````


## Add the Score 

We want the score to appear right? like the play note section this is inside the __gameDiv__ , so we need to create a div that looks like this

![alt text](https://raw.github.com/CoderDojo/piano-game/master/game/doc-files/score.png "Piano Rock Star")

This panel should
* Hightlight its the score panel
* Have message tell players the __Score__

Ok its great that this panel is very similar to the previous two see we can use their style and html code.  To get started create add the following html just like we did in previous sections


````html
   <div class="gamePanel spanAuto span230">
    <div class="span50p">
    <span class="notice">></span>
        <h3></h3>
    <hr/>
    </div>
    <div class="span50p">
        <div id="scre" class="info red">0</div>
    </div>
</div>
````

Now inside the __h3__ tags add the text __Score__ so we now look like this

````html
   <div class="gamePanel spanAuto span230">
    <div class="span50p">
    <span class="notice">></span>
        <h3>Score</h3>
    <hr/>
    </div>
    <div class="span50p">
        
    </div>
</div>
````

Now create a new __div__ tag to display the score with two style class of 
* info
* red

````html
   <div class="gamePanel spanAuto span230">
    <div class="span50p">
    <span class="notice">></span>
        <h3>Score</h3>
    <hr/>
    </div>
    <div class="span50p">
        <div id="score" class="info red">0</div>
    </div>
</div>
````

To emhasise this is the score, we are going to set the text color red, so lets open style.css and add a new style for class red
* Set the __color__ to __#CC0000__

````css
.red {
    color: #CC0000;
}
````

## Add the Keyboard helper 

You would a keyboard helper to tell you what key to hit right? so we need to create a div that looks like this inside the __gameDiv__

![alt text](https://raw.github.com/CoderDojo/piano-game/master/game/doc-files/keyboard-help.png "Piano Rock Star")

This panel should
* Hightlight its the keybooard panel
* Have message tell players which key to hit

Ok its great that this panel is very similar to the previous two see we can use their style and html code.  To get started create add the following html just like we did in previous sections


````html
<div class="gamePanel spanAuto span230">
    <div class="span50p">
    <span class="notice">></span>
        <h3></h3>
    <hr/>
    </div>
    <div class="span50p">
    </div>
</div>
````

Now inside the __h3__ tags add the text __Keyboard__ so we now look like this

````html
<div class="gamePanel spanAuto span230">
    <div class="span50p">
    <span class="notice">></span>
        <h3>Keyboard</h3>
    <hr/>
    </div>
    <div class="span50p">
    </div>
</div>
````

Now create a new __div__ tag to display the keyboard key with an __id__ of __keyboard__ and two style class of 
* info
* keyboardInfo

````html
 <div class="gamePanel spanAuto span230">
    <div class="span50p">
    <span class="notice">></span>
        <h3>Keyboard</h3>
    <hr/>
    </div>
    <div class="span50p">
        <div id="keyboard" class="info keyboardInfo"></div>
    </div>
</div>
````

To emhasise this is the score, we are going to set the text color red, so lets open style.css and add a new style for class red
* Set the __background__ to __gray__
* Set the __font-weight__ to __bold__

````css
.keyboardInfo {
    background: gray;    
    font-weight: bold;
}
````

Congratulations you have now created the game panels for Piano Rock Star.  Just to review your HTML should now look like this

````html
<div class="gameDiv">   
    <div class="gamePanel spanAuto span230">
        <div class="span50p">
        <span class="notice">></span>
            <h3>Play Note</h3>
        <hr/>
        </div>
        <div class="span50p">
            <div id="note" class="info"></div>
        </div>
    </div>      
    <div class="gamePanel spanAuto">
        <span class="notice">></span>
        <h3>Select Song</h3>
        <hr/>
        <select id="songs"><option>Select</option></select>
        <button id="playSong" class="btn btn-red" type="submit" 
          name="play">Play Now!</button>
    </div>
    <div class="gamePanel spanAuto span230">
        <div class="span50p">
        <span class="notice">></span>
            <h3>Score</h3>
        <hr/>
        </div>
        <div class="span50p">
            <div id="score" class="info red">0</div>
        </div>
    </div>
    
    <div class="gamePanel spanAuto span230">
        <div class="span50p">
        <span class="notice">></span>
            <h3>Keyboard</h3>
        <hr/>
        </div>
        <div class="span50p">
            <div id="keyboard" class="info keyboardInfo"></div>
        </div>
    </div>
    
</div>

````