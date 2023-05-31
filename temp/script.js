let va=()=>{
    let degree = document.getElementById('degree').value
    let con = document.getElementById('con').value
    let result = document.getElementById('result')
    let ic = document.getElementById('ic')

    let re

    let FtoC=(chr)=>{
        let c = Math.round((chr-32)*5/9)
        if(c <= 10){
            result.innerHTML=(` Result = ${c}°celsius `) 
            
        }else if(c >= 40){
            result.innerHTML =(` Result = ${c}°celsius `) 
            
        }else{
            result.innerHTML=(` Result = ${c}°celsius `)
            
        }
    }

    let CtoF=(fhr)=>{
        let f = Math.round((fhr*9/5)+32)
        if(f <= 50){
            result.innerHTML=(` Result = ${f}°fahrenheit `) 
            
        }else if(f >= 104){
            result.innerHTML =(` Result = ${f}°fahrenheit `) 
            
        }else{
            result.innerHTML=(` Result = ${f}°fahrenheit `)
            
        }
    }

    if(con=="celsius"){
        re = FtoC(degree)
        return re
    }else{
        re= CtoF(degree)
        return re
    }
}