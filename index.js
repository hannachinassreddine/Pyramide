console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
let x=document.querySelector('main')
myFunction()
function myFunction() {
    while (x.hasChildNodes()) {
        x.removeChild(x.firstChild);
      }

    var etagenumber = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?", 6);
    if (etagenumber == null || etagenumber == "" ||etagenumber<2||etagenumber>25 ) {
      console.log("S'il vous plait entrer un nombre entre 2 et 25");
    } else {
        
        createpyramide(parseInt(etagenumber))
        
    }
    
  }
  function createpyramide(a){
      var pyramidestr='Voici la pyramide :\n'
      for(i=1;i<=a;i++){
          
        var etage=document.createElement('span')
        var str=new Array(i*2-1 + 1).join( 'a' )
        etage.innerText=str
      x.append(etage)
      pyramidestr+=new Array(a-i + 1).join( ' ' )+str+'\n';
      }
      console.log(pyramidestr)
  }