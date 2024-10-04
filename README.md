WELCOME TO MY FOOGLE PAGE (FAKE GOOGLE)

These webpages were created using HTML, CSS, and JavaScript.

There are three pages I created:
Google
Google Images
Google Advanced Search

Each page is functional and utilizes eventListeners and functions to behave as close to the real pages as I could make

I created a total of 4 functions to be used in conjunction with eventListeners

My 4 functions:

displaySearch() This function uses the window object and the method open to open a url. I used googles url formula and concatenated the value of what was inputted in the search bar at the end. This opens a google search page for the users input. Also implemented to check to make sure search isn't blank and if so prevent it using event.preventDefault.
randomMessage(isMouseOver) This function takes a parameter to check if the mouseover event is true or false. If it is true the message in the "Feeling Lucky" button is changed to a random string in an array. The string is randomized using Math random multiplied by the length of the array.
If the condition is false the value of the "Feeling Lucky" is set to it's default message.
imgSearch() This function is the same as display search except I used string interpolation to add the input value in. The url formula is different and requires "&udm=2" to be able to get the image result of a search instead.
advSearch()


eventListeners used:
"click"
"mouseover"
"mouseout"

Thank you for visiting my page!!!

-Sean Pichay
