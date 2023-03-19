//CODE -> https://pastebin.com/FrTRymGE
// STYLE -> /* https://pastebin.com/pYPf7DQ5 */


window.onload = (event) =>{
    console.info("Your page has completely loaded including css, DOM and images")
    bindings(); 
}

function bindings(){
    let allButtons = document.getElementsByTagName("button");
    for(let i =0; i < allButtons.length; i++){
        allButtons[i].addEventListener('click', change_colour)
    }
}

function change_colour(event){
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2")
    const button3 = document.getElementById("button3")
    const button4 = document.getElementById("button4")
    // CAN USE SWITCH CASE AS WELL (better)
    if(event.target.id === "button1"){
        button2.style.backgroundColor = "red"
        button4.style.backgroundColor = "red"

    }else if(event.target.id === "button2"){
        button1.style.backgroundColor = "yellow"
        button4.style.backgroundColor = "yellow"

    }else if(event.target.id === "button3"){
        button2.style.backgroundColor = "yellow"
        button3.style.backgroundColor = "yellow"

    }else if(event.target.id === "button4"){
        button1.style.backgroundColor = "red"
        button3.style.backgroundColor = "red"

    }else if(event.target.id === "reset"){
        button1.style.backgroundColor = ""
        button2.style.backgroundColor = ""
        button3.style.backgroundColor = ""
        button4.style.backgroundColor = ""
    }
}