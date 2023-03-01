*** Intro to DOM 1 *** 
-   index.html should open browser editor 
Whats the DOM 
-   the in memory data structure that represents the browsers web document 
-   NODES
    -   JS objects with properties used to get/set information and methods to manipulate the DOM.
   (document)(devConsole) an html centric representation of teh document 
   (dir(document)(devConsole) lets you see the JS data structure 

***Dev Tool***
-   (h1) == $0
    -   that tells us that chrome has created a variable named $0 that represents the <h1> element 



    REVIEW

    -   forEach loop
        -   one liner or coding challenge 

        temperate literals - pass
        
        
        template literal is basically making the stindg dynamoc 
        
        it just represents a variable 
        
       
create and id in tml for the paretn 
       constants

       state(variables)

       dom elements was ste p 1 after creating the ids 
       const headeEl
       -    document.querySelector = (#hero-header")

       cosntpickerEl = 
       document.querySelctor("#color-picker")
       
***EVENT LISTNER STEP 6 ***
-   function handleClicker(evt) {
    console.log(evt.target)
}
       
pickerEl.addEventListner('click", handleClick) - 
create outside of function - test then put it in side of the functuo 

       test it by click on the squares taht should begenerated 

       the lsitner when clicked will change a target elemets backgroudn color 

       ***steppart2***
       -    
do the same thing on the second part for headerEl

headerEl.style.backgroundColr = evt.targetr.style.backgroundColor - option 1 shivas 

currentColor = evt.target.style.backgroundColor

***helper functions*** -       step after dome elemets STEP 2 
*** GENERATING THE BOARD***
       -    have a render 
       -    have a  create colors
step 3 
       function init() {
        createColors () //responsole for appending colors to color picker 
       }
        //render
step 4 
        function createColors(){
            //console.log color options ie creating colors 
            for(let i=0; i<colorOptions.length; i++) {
                const currentColor = colorOptions[i]
            }
        }
step 5 
create new element 

const newOption = document.createelement ('div)
//ad
       plan of  attack

***CSS FLEXBOX and GRID ***