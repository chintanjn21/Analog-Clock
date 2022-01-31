
setInterval(() => {                                                                                                             //12 hours = 360 degrees
    let d = new Date();                                                   
    let h = d.getHours();                                          
    let m = d.getMinutes();                                                                          
    let s = d.getSeconds();                                     
    let hrotation = 30*h + m/2;                                     
    let mrotation = 6*m;                                        
    let srotation = 6*s;                                        

    hour.style.transform = `rotate(${hrotation}deg)`;                                       
    minute.style.transform = `rotate(${mrotation}deg)`;        
    second.style.transform = `rotate(${srotation}deg)`;        
}, 1000);                                                       
    
//FOR HOUR HAND                                                                //12 hours = 360 degrees
//01 hour = 360/12 = 30 degree          
//h hours = 30*h degree   
//01 hour = 30 degree
//60 min = 30 degree
//01 min = 1/2 degree    
//m min = m/2 degree
//h hours = 30h + m/2 degrees        

//FOR MINUTE HAND                             
//60 min = 360 degree
//01 min = 360/60 = 6 degree
 //m min = 6*m degree  

//FOR SECOND HAND                             
//60 sec = 360 degree
//01 sec = 360/60 = 6 degre
//m sec = 6*s degree    
