function VerifRéponses(){
    score=0
    verif=true
    qv=0
    if (document.getElementById('q1a').checked===true){
        score=score+1
    }
    if (document.getElementById('q2b').checked===true){
        score=score+1
    }
    if (document.getElementById('q3c').checked===true){
        score=score+1
    }
    if (document.getElementById('q4a').checked===true){
        score=score+1
    }
    if (document.getElementById('q5c').checked===true){
        score=score+1
    }
    if (document.getElementById('q6b').checked===true){
        score=score+1
    }
    if (document.getElementById('q7a').checked===true){
        score=score+1
    }
    if (document.getElementById('q8c').checked===true){
        score=score+1
    }
    if (document.getElementById('q9b').checked===true){
        score=score+1
    }
    if (document.getElementById('q10a').checked===true){
        score=score+1
    }
    if(document.getElementById('q1a').checked===false && document.getElementById('q1b').checked===false && document.getElementById('q1c').checked===false){
        verif=false
        qv=qv+1
    }
    if(document.getElementById('q2a').checked===false && document.getElementById('q2b').checked===false && document.getElementById('q2c').checked===false){
        verif=false
        qv=qv+1
    }
    if(document.getElementById('q3a').checked===false && document.getElementById('q3b').checked===false && document.getElementById('q3c').checked===false){
        verif=false
        qv=qv+1
    }
    if(document.getElementById('q4a').checked===false && document.getElementById('q4b').checked===false && document.getElementById('q4c').checked===false){
        verif=false
        qv=qv+1
    }
    if(document.getElementById('q5a').checked===false && document.getElementById('q5b').checked===false && document.getElementById('q5c').checked===false){
        verif=false
        qv=qv+1
    }
    if(document.getElementById('q6a').checked===false && document.getElementById('q6b').checked===false && document.getElementById('q6c').checked===false){
        verif=false
        qv=qv+1
    }
    if(document.getElementById('q7a').checked===false && document.getElementById('q7b').checked===false && document.getElementById('q7c').checked===false){
        verif=false
        qv=qv+1
    }
    if(document.getElementById('q8a').checked===false && document.getElementById('q8b').checked===false && document.getElementById('q8c').checked===false){
        verif=false
        qv=qv+1
    }
    if(document.getElementById('q9a').checked===false && document.getElementById('q9b').checked===false && document.getElementById('q9c').checked===false){
        verif=false
        qv=qv+1
    }
    if(document.getElementById('q10a').checked===false && document.getElementById('q10b').checked===false && document.getElementById('q10c').checked===false){
        verif=false
        qv=qv+1
    }
    if(verif===true){
       document.write("<h1 style='text-align: center;line-height:500px;'>"+"Votre Score est : "+score+" sur 10"+"</h1>") 
    } else {
        alert("Vous avez laissé "+qv+" questions vides")
    }
    
}