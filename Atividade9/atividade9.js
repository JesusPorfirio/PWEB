function ordenando(){
    //  let valores=[a,b,c];
      valores = [];
      valores[0] = document.getElementById("numero1").value;
      valores[1]=document.getElementById("numero2").value;
      valores[2]=document.getElementById("numero3").value;
      valores.sort(function(x,y){
          if(x>y) return 1;
          if(x<y) return -1;
      });
     return alert("o maior numero é: "+ valores[2] +"\n"+
     "numeros dispotos em ordem crescente: "
     +valores);
   }