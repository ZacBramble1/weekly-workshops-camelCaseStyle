window.onload = (event) =>{
    main();
}

// Here I am using named function
function main(){
    bindings(); 
}

// Here I am using an arrow function
// function bindings(){
// some code here     
// }
bindings = () =>{
    document.getElementById("fetchButton").addEventListener("click", fetchData)
    
}
//https://openlibrary.org/works/OL45804W.json
function fetchData(){
    setTimeout(()=>{
        loadImage("myImage")
    }, 5000)
    setTimeout(()=>{
        textFill("sampleParagraph", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
    }, 2000)
    gradualFill("fetch", "red")
    .then(() => gradualFill("dblookup", "yellow"))
    .then(() => gradualFill("webserver", "magenta"))
    .then(() => gradualFill("formulateResponse", "green"))
    .then(() => gradualFill("responseBack", "cyan"))
    .then(() => gradualFill("frontEndRender", "blue"))
    .then(() =>{
        fetch("https://openlibrary.org/works/OL45804W.json")
        .then(res => res.json())
        .then(val => {
            document.getElementById("emptyDiv").innerHTML = val.description
        })
       
    })
}

function gradualFill(id, color){
    return new Promise((resolve, reject) =>{
        let element = document.getElementById(id);
        let width = 1;
        element.style.backgroundColor = color
        let ident = setInterval(()=>{
            if(width >= 100){
                clearInterval(ident)
                resolve(width)
            }else{
                width += 1; 
                element.style.width = width+"%";
            }
        }, 30)
    })
}
function textFill(id, text){
    document.getElementById(id).innerHTML  = text
}
function loadImage(id, url){
    document.getElementById(id).style.width = "100px"
    document.getElementById(id).style.height = "100px"
    document.getElementById(id).src = "https://images.unsplash.com/photo-1618944847828-82e943c3bdb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
}