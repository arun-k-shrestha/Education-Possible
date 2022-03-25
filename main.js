i = 0
function background_color(id){
    if (i == 0 && id == "black"){
        alert("Background color and text color can't be same")
        document.body.style.background = "lightgrey"
    }
    
    else{
        document.body.style.background = document.getElementById(id).innerHTML;
        if (document.body.style.background === document.body.style.color){
            document.body.style.background = "lightgrey"
            alert("Background color and text color can't be same")
        }
    }
    i =+ 1
}


function text_color(id){

    if (i == 0 && id == "grey"){
        alert("Background color and text color can't be same")
        document.body.style.background = "lightgrey"
    }

    else{
        document.body.style.color = document.getElementById(id).innerHTML;
        if (document.body.style.background === document.body.style.color){
            document.body.style.background = "lightgrey"
            alert("Background color and Text color can't be same")
        
        }   
    }
    i =+ 1
}



// font size- add
