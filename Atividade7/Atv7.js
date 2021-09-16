let udecid = parseInt(window.prompt('Insira \n1 para pedra\n2 para papel\n3 para tesoura'));
let pdecid =parseInt(10*Math.random());
while(pdecid>8){
    pdecid =parseInt(10*Math.random());
}
//computador decidiu:
if(pdecid<3){//pedra
    pdecid=1;
}
else if(pdecid<6){//papel
    pdecid=2;
}
else{//tesoura
    pdecid=3;
}
//vitoria humana
if(udecid===1 && pdecid===3 || udecid===3 && pdecid===2 ||
     udecid===2 && pdecid===1){
    window.alert('usuario ganhou');
}
//derrota humana
else if(pdecid===1 && udecid===3 || pdecid===3 && udecid===2 ||
    pdecid===2 && udecid===1){//vitoria humana
   window.alert('computador ganhou');
}
//empate
else{
    window.alert('empate');
}
