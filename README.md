# zckoh/website
My website which uses React as a frontend.  
This react web app is deployed on my Github Pages (https://zckoh.github.io).

## Description
This react app is created using create-react-app.  
mdbootstrap is used to style all the components (NavBar, Modal, Buttons, etc...).  
react-router-dom is used to route the web app to the different pages.
The website contains the following pages:
- Home (landing page)
- Projects
- What To Eat! (web app)


### Home (landing page)
Act as a landing page and shows some information about me.  

### Projects
Contains a list of recent projects that I've been working on.

### What To Eat!
My first web app which allows users to first choose if they are eating in or eating out.
If eating in (cook), then allow the user to randomly select a dish from a list of predefined dishes.
If eating out, then shows a list of restaurant on a map from a location.

To search for a list of restaurant near a given location on a map, the Google Maps JavaScript API is used.

## Future work
Possible improvements:
- Use React with server-side rendering instead of client-side rendering (next.js maybe?).
- Add a database to allow CRUD operation on the list of cooking dishes.
- Add tracking for which dish/restaurant that has been chosen by the user.