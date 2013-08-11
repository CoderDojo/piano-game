## Sharp in the wrong position

Ok we have just found out that the D1# key is in the wrong position
and it should be between keys D1 and E1.  So lets go and fix that one.
So how can link what you are seeing on the page to the code? Well how
about we search the code for the text we see and want to change.
You are all agreed we need to change D1# so open index.html in your
notepad++ and then type Ctrl+F and add D1# then hit find. 

Great you have found the following code

````html
<div id="sharpD1" class="sharp sharpD1">
                    <div class="sharpText keyboardText">D1#</div>
                </div>
````

From what you have already learnt about how CSS and HTML work you
will know the that class attribute on the div tag links directly
to the some entry in our style.css file. 

There is two div's show because the outer one is the black sharp
while the inner one holds the text.  In this scenario we want
to move the black sharp to the right position so we will style
the div with an id of "sharpD1".  Can you tell me which styles
are impacting this?

Yes you are right its sharp and sharpD1, so lets go and take a look
at these in style.css file.  Can you now open this file and search for
these styles.  Remembering that we styled using the tag name then the class
so in this case you are searching for
* div.sharp
* div.sharpD1

Lets see which one of these are positioning the black sharp.

So div.sharp looks like

````css
div.sharp {
    background-color: #111;
    position: absolute;
    float: left;
    width: 60px;
    height: 250px;
    z-index: 2;
    box-shadow: rgb(48, 48, 48) 0px -9px 10px 9px inset, rgb(247, 247, 247) 0px -15px 0px 0px inset;
    border: 1px solid black;
    border-radius: 0 0 5px 5px;
    color: #666666;
}
````

while div.sharpD1 looks like

````css
div.sharpD1 {
    margin-left: 890px;
}
`````

So can you guess which one is impacting the left position of the
div you have created? Hit the only style that mentions left! So
yes you are right (no pun intended), div.sharpD1 is what you need
to change.  Remember margin-left: changes the left positioning of
the div by putting 890 dots/pixels to the left hand side of the
element. 

Do you think 890 is to much? If we reduced that value would the
sharp move closer to the position between D1 and E1. Well I think so
so lets go and do that.  But the question is by how much do we reduce
the value?  There must be some cool way of working that out?

What is under the sharp on the screen? A key? yes.  So we need to
move this back exactly the same width of the key to fit
between D1 and E1.  Would you agree?

What is the width of the key and how do you find that.  Well just
like you found the sharp lets search for the key style div.key, great
you have found it, now put your CSS hat on and tell us which
value represents the width of the key?

````css
div.key {
    background-color: #FFF;
    float: left;
    width: 90px;
    height: 400px;
    margin: 0px;
    border: 1px solid #666666;
    color: #666666;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 -10px 2px 0 #888888 inset, 0 -60px 40px 10px #EEEEEE inset;
}   
````

Yes you are right, width is 90px.  So how about we reduce the margin-left
of the div.sharpD1 by 90 from 890 to 800 and lets see what happens.

````css
div.sharpD1 {
    margin-left: 800px;
}
````

Now refresh you browser and what do you think?
Great our sharp is now in the right position, great work.