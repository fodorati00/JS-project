let redv = "00"; 
let greenv = "00"; 
let bluev = "00";


function showVal(v,n)
{
    if(n === "red"){
        let n1 = v%16;
        let n2 = Math.floor(v/16);
        redv=hex(n2,n1);       
        let colorset = redv+""+greenv+""+bluev; 
   
        document.getElementById("h").value="#"+colorset;
        document.getElementById("menu").style.background = "#"+colorset;

    }

    if(n === "green"){
        let n1 = v%16;
        let n2 = Math.floor(v/16);
        greenv=hex(n2,n1);       
        let colorset = redv+""+greenv+""+bluev; 
        document.getElementById("h").value= "#"+colorset;
        document.getElementById("menu").style.background = "#"+colorset;
    }
    if(n === "blue"){
        let n1 = v%16;
        let n2 = Math.floor(v/16);
        bluev=hex(n2,n1);       
        let colorset = redv+""+greenv+""+bluev; 
        document.getElementById("h").value= "#"+colorset;
        document.getElementById("menu").style.background = "#"+colorset;
    }
    
}

function textsetc(v){
    let color =v;
    if(color.length > 6){
        console.log(v);
        document.getElementById("menu").style.background = color;
        
        document.getElementById("red").value = "#"+redv;
        redv = v[1]+""+v[2];
        document.getElementById("green").value = greenv;
        greenv = v[3]+""+v[4];
        document.getElementById("blue").value = bluev;
        bluev = v[5]+""+v[6];
    }
    
    
}

function hex(n2,n1){
    switch(n2){
        case 10:
            n2 = "A";
            break;
        case 11:
            n2 = "B";
            break;
        case 12:
            n2 = "C";
            break; 
        case 13:
            n2 = "D";
            break; 
        case 14:
            n2 = "E";
            break; 
        case 15:
            n2 = "F";
            break; 
        default:
            n2 = n2;
    }

    switch(n1){
        case 10:
            n1 = "A";
            break;
        case 11:
            n1 = "B";
            break;
        case 12:
            n1 = "C";
            break; 
        case 13:
            n1 = "D";
            break; 
        case 14:
            n1 = "E";
            break; 
        case 15:
            n1 = "F";
            break; 
        default:
            n1 = n2;
    }

    return(n2+""+n1);
}
