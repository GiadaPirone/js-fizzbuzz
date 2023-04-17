const contenitore = document.getElementById("container");
let scriviFizz = "Fizz";
let scriviBuzz = "Buzz"
let scriviFizzBuzz = " FizzBuzz"
for ( let c = 1; c <= 100; c++){

    // contenitore.innerHTML = contenitore.innerHTML + ` <div class="box">${c}</div> `;
    // contenitore.innerHTML =  ` <div class="box">${c}</div> `;
       
    if (c % 3 == 0){
        contenitore.innerHTML = contenitore.innerHTML + ` <div class="box">${scriviFizz}</div> `;
    } 

    if(c % 5 == 0){
        contenitore.innerHTML = contenitore.innerHTML + ` <div class="box">${scriviBuzz}</div> `;
    } 

    if ( c % 15 == 0){
        contenitore.innerHTML = contenitore.innerHTML + ` <div class="box">${scriviFizzBuzz}</div> `;
    } 

     else if (c % 15 != 0 && c % 5 != 0 && c % 3 != 0) {
        contenitore.innerHTML = contenitore.innerHTML + ` <div class="box">${c}</div> `;
    }

        
    
}


    

  

