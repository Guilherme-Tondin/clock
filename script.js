function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagemdia')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    //var hora = 08;
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`

    if(hora >= 0 && hora <12){
        
        img.src = "manha.jpg"
        document.body.style.background = "orange"
        msg.innerText += " Bom dia!"    
    }

    else if(hora >=12 && hora < 19){
        
        img.src = "tarde.jpg"
        document.body.style.background = "#a0cfeb"
        msg.innerText += " Boa Tarde!"    


    }
    else{
        
        img.src = "noite.jpg"
        document.body.style.background = "#0120dd"
        msg.innerText += " Boa Noite!"    

    }
}