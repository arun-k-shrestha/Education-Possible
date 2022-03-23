function background_color(id){
    if (document.body.style.background !== document.body.style.color){
    document.body.style.background = document.getElementById(id).innerHTML;
    }
    else{
    document.body.style.background = "pink"
    }
}


function text_color(id){
    if (document.body.style.background !== document.body.style.color){
    document.body.style.color = document.getElementById(id).innerHTML;
    }
    else{
        document.body.style.color = "pink"
        }
}
