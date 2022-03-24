function background_color(id){
    document.body.style.background = document.getElementById(id).innerHTML;
    if (document.body.style.background == document.body.style.color){
        document.body.style.background = "grey"
        alert("Background color and text color can't be same")
    }
}


function text_color(id){
    document.body.style.color = document.getElementById(id).innerHTML;
    if (document.body.style.background == document.body.style.color){
        document.body.style.background = "grey"
        alert("Background color and Text color can't be same")
    
    }
}
