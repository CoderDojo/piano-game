### Rename key

Our consultancy team who developed the online piano have not named
the keys correctly and we need you to fix it?

So have you got any idea how to start? Firstly what field is wrong? Yes
its C, the C key should be D agreed?  Where do we start with this fix?

Where do you think the key text __C__ is set?
* In the HTML?
* In the CSS?

You are right its the HTML, as the HTML is what we see on the screen agreed.  So 
go and open index.html.

So lets look for the piano in the HTML? Can you tell me which field represents the piano?
Yes its the ````div```` tag ````html <div id="piano" class="pianoKeys">````.  Great you have found
the piano, now lets look below this tag can you tell what the next HTML elements do? 

The following code is below this div 
````html
<div id="piano" class="pianoKeys">
				<div id="keyC" class="key">
					<div class="keyText keyboardText">C</div>
				</div>
				<div id="sharpC" class="sharp sharpC">
					<div class="sharpText keyboardText">C#</div>
				</div>
				<div id="keyD" class="key">
					<div class="keyText keyboardText">C</div>
				</div>
````

Ok the ```` div ```` tags with a class of __key__ are keys, while
```` div ```` tags with class of __sharp__ are the sharp keys.  So 
go back to the Piano Web Page and how many keys in is the mistake?

Two right!, so if you are looking at the screen its __Key C__, __Sharp C#__, 
and then __Key C__.

We want to change the second __C__ value __D__. So count three divs tags then?
* First has __id="keyC"__
* Second has __id="sharpC"__
* Third has __id="keyD"__ 

So what is __keyD__ keyboard text value?

````html
<div id="keyD" class="key">
	<div class="keyText keyboardText">C</div>
</div>
````

It's __C__ right? but we want it to __D__.  Your HTML should 
now look like this 

````html
<div id="keyD" class="key">
	<div class="keyText keyboardText">C</div>
</div>
````

Well done you have fixed our game.  We are almost ready to launch