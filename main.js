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
    i =+ 1
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
    i =+ 1
}

document.body.style.background = sessionStorage.getItem("background")
document.body.style.color = sessionStorage.getItem("text")


function OneCheckBox(checkbox){
    let checkboxes = document.getElementsByName('checkbox1')
    for(i=0;i<checkboxes.length; i++){
        if(checkboxes[i] !== checkbox){
            checkboxes[i].checked = false
        }
    }
}

function submit1(){
    document.getElementById("answer").innerHTML = "The correct answers are: <br> <br> 1) Parentheses, Exponents, Multiplication or Division, Addition or Subtraction <br><br> 2) 7 "
    }

