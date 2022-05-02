
// const textarea = document.querySelector("textarea"),


function getText(){
    if(document.getSelection){
        let textarea = document.getSelection().toString();
    }
    return textarea
}
const textarea = document.getSelection()
speech = document.querySelector("button");


function textToSpeech(text){
    let u = new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(u)
}
isSpeaking = true
synth = speechSynthesis

function pause_Resume(kk){
   kk.preventDefault();
    if(textarea!==""){
        if(!synth.speaking){
        textToSpeech(textarea)
        }
    }

    if(isSpeaking){
        synth.resume()
        isSpeaking= false
        speech.innerText = "Convert to Speech"
    }
    else{
        synth.pause()
        isSpeaking= true
        speech.innerText = "Paused"
    }
}

speech.addEventListener("click",pause_Resume)



// These functions are for changing colors
i = 0
function background_color(id){
    if (i == 0 && id == "black"){
        alert("Background color and text color can't be same")
        document.body.style.background = "lightgrey"
        sessionStorage.setItem("background", "lightgrey")
    }
    
    else{
        document.body.style.background = document.getElementById(id).innerHTML;
        sessionStorage.setItem("background", id)
        if (document.body.style.background === document.body.style.color){
            document.body.style.background = "lightgrey"
            sessionStorage.setItem("background", "lightgrey")
            alert("Background color and text color can't be same")
        }
    }
    i = 1
}


function text_color(id){

    if (i == 0 && id == "grey"){
        alert("Background color and text color can't be same")
        document.body.style.background = "lightgrey"
        sessionStorage.setItem("background", "lightgrey")

    }

    else{
        document.body.style.color = document.getElementById(id).innerHTML;
        sessionStorage.setItem("text", id)
        if (document.body.style.background === document.body.style.color){
            document.body.style.background = "lightgrey"

            sessionStorage.setItem("background", "lightgrey")
            alert("Background color and Text color can't be same")
        
        }   
    }
    i = 1
}

document.body.style.background = sessionStorage.getItem("background")
document.body.style.color = sessionStorage.getItem("text")



function text_size(id){
    if (id == "small"){
        document.body.style.fontSize = "15px"
        sessionStorage.setItem("text_size", "15px")
    }

    else if(id == "medium")
    {
        document.body.style.fontSize = "20px"
        sessionStorage.setItem("text_size", "20px")
    }
    else if (id == "large")
    {
        document.body.style.fontSize = "30px"
        sessionStorage.setItem("text_size", "30px")
    }
}

document.body.style.fontSize = sessionStorage.getItem("text_size")


// these functions are for selecting only one checkbox
function OneCheckBox1(checkbox){
    let checkboxes = document.getElementsByName('checkbox1')
    for(i=0;i<checkboxes.length; i++){
        if(checkboxes[i] !== checkbox){
            checkboxes[i].checked = false
        }
    }
}

function OneCheckBox2(checkbox){
    let checkboxes = document.getElementsByName('checkbox2')
    for(i=0;i<checkboxes.length; i++){
        if(checkboxes[i] !== checkbox){
            checkboxes[i].checked = false
        }
    }
}


// These function provides answers after hitting submit

function submit1(){
    let element1 = document.getElementById("checkbox1c")
    element1.style.color = "lightgreen"

    let element2 = document.getElementById("checkbox2b")
    element2.style.color = "lightgreen"

    document.getElementById("answer").innerHTML = "The correct answers are: <br> <br> 1) Parentheses, Exponents, Multiplication or Division, Addition or Subtraction <br><br> 2) 7 "
}

function check_answer(){
    document.getElementById("check_answer").innerHTML = "The correct answers are: <br> <br> 1) 33 <br><br> 2) 50 <br> <br> 3) 10 <br><br> 2) 26 "
}
