
textarea = document.getSelection() 
speech_Button = document.getElementById("speech_button");

function textToSpeech(text){
    let speechSpeak = new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(speechSpeak)
}
isSpeaking = true

function pause_Resume(pauseResume){
   pauseResume.preventDefault();
    if(textarea!==""){
      console.log(textarea)
        if(!speechSynthesis.speaking){
        textToSpeech(textarea)
        }
    }
    if(isSpeaking){
        speechSynthesis.resume()
        isSpeaking= false
        speech_Button.innerText = "Pause"
    }
    else{
        speechSynthesis.pause()
        isSpeaking= true
        speech_Button.innerText = "Convert to Speech"
    }
}

speech_Button.addEventListener("click",pause_Resume)



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

function isAnswer(id1, id2){
    let element1 = document.getElementById("checkbox"+id1)
    element1.style.color = "lightgreen"

    let element2 = document.getElementById("checkbox"+id2)
    element2.style.color = "lightgreen"
}


function Test_Knowledge(id){


    // For Order_Operaation Quiz 1
    if(id === "Order_Operation1"){
        isAnswer("1.1","1.2")
        document.getElementById("Answer_Order_Operation1").innerHTML = "The correct answers are: <br> <br> 1) Parentheses, Exponents, Multiplication or Division, Addition or Subtraction <br> <br> 2) 7 <br> &nbsp; reason: <br> &nbsp;8 ÷ 4 × 2 + 3 <br> &nbsp; = 2 × 2 + 3 <br>  &nbsp; = 4 + 3 <br> &nbsp;  = 7 "
    }

    // For Laws_Exponents Quiz 1
    else if(id === "Laws_Exponents1"){
        isAnswer("1.1","1.2")

        document.getElementById("Answer_Laws_Exponents1").innerHTML = "The correct answers are: <br> <br> 1) 8<sup>5</sup> <br> <br> 2) Six to the power of five "
    }

    // For Laws_Exponents Quiz 2
    else if(id === "Laws_Exponents2"){
        isAnswer("2.1","2.2")
        document.getElementById("Answer_Laws_Exponents2").innerHTML = "The correct answers are: <br> <br> 1) 4a<sup>13</sup> <br> <br> 2) 5y<sup>2</sup> "
    }

    // For Laws_Exponents Quiz 3
    else if(id === "Laws_Exponents3"){
        isAnswer("3.1","3.2")
        document.getElementById("Answer_Laws_Exponents3").innerHTML = "The correct answers are: <br> <br> 1) 10<sup>3</sup>w<sup>6</sup> <br> <br> 2) 5<sup>12</sup>/9<sup>4</sup> "
    }

}

function check_answer(){
    document.getElementById("check_answer_order_operation").innerHTML = "The correct answers are: <br> <br> 1) 33 <br><br> 2) 50 <br> <br> 3) 10 <br><br> 2) 26"
    document.getElementById("check_answer_laws_exponents").innerHTML = "The correct answers are: <br> <br> 1) 33 <br><br> 2) 50 <br> <br> 3) 10 <br><br> 2) 26"
}
