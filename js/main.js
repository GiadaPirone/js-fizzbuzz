const contenitore = document.getElementById("container");
let scriviFlizz = "Frizz";

for ( let c = 0; c < 20; c++){

    var indice = c + 1; //per far diventare 0=1 19=20

    contenitore.innerHTML = contenitore.innerHTML + ` <div class="box">${indice}</div> `;
    // contenitore.innerHTML =  ` <div class="box">${c}</div> `;
       
    if (indice % 3 == 0){
        document.querySelector(".box").innerHTML = scriviFlizz;
        
    }

}


    

  

