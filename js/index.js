// declare html variables

/* 1 */ const pix = Array.from(document.getElementsByTagName('img'))
// console.log(pix)
/* 2 */ const title = document.querySelector('.logo-heading')
// console.log(title)
/* 3 */ const destinations = Array.from(document.querySelectorAll('.destination'))  
// console.log(destinations)
/* 4 */ const contentHeaders = Array.from(document.querySelectorAll('h2'))
// console.log(contentHeaders)
/* 5 */ const buttons = Array.from(document.querySelectorAll('.btn'))
//console.log(buttons)
/* 6 */ const navItems = Array.from(document.getElementsByTagName('a'))
//console.log(navItems)
/* 7 */ const navbar = document.querySelector('.main-navigation')
//console.log(navbar)


// initialize color randomizer
const colorRandomizer = ["#00a8ff", "#9c88ff", "#fbc531", "#4cd137", "#487eb0", "#e84118"]

// add event listeners
/* 1: Pix border style style */
for (let pHash = 0; pHash < pix.length ; pHash++){
    pix[pHash].addEventListener('mouseover', function(){
        this.style.border = "dotted 3px red"
    } )
}
/* 2: Title size change*/
    title.addEventListener("dblclick", function(){
        this.style.color = "blue"
    })
/* 3: change the button text*/ for (let button = 0; button < buttons.length; button++ ){
    buttons[button].addEventListener('click', function(){
        this.innerText = "U R going on vacation"
    })
}

/* 4: Make all navItems change color randomly on hover*/ 
for (let anchor = 0; anchor < navItems.length; anchor++){
    navItems[anchor].addEventListener("mouseover", function(){
        this.style.color = colorRandomizer[Math.floor(Math.random()*6)]
    })
/* 5  Return their color to neutral on mouse end*/
navItems[anchor].addEventListener("mouseleave", function(){
    this.style.color = "black"
    })
}
/* 6  Make Destinations Draggable*/

/* 7 */

/* 8 */

/* 9  Clicking Contact creates a new section at the bottom of the page*/
navItems[navItems.length-1].addEventListener("click", addElement)

function addElement(){
    let newDiv = document.createElement("div"); 
    let newContent = document.createTextNode("Aloha! Alweiderzein! Ciao! Konichiwa!"); 
    newDiv.appendChild(newContent); 
    
    let anchorDiv = document.querySelector(".home");
    document.body.insertBefore(newDiv, anchorDiv);
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.fontSize = "2rem";
    newDiv.style.margin = "1rem";
}

/* 10 Clicking on a Destination makes it dissapear*/
    for (let locale = 0 ; locale < destinations.length; locale++){
        destinations[locale].addEventListener("click", function(){
            destinations[locale].classList = "invisible"
        })
    }

//