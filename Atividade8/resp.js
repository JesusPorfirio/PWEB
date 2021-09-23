const pessoas = 45;
var idade = Array(pessoas);
var media = 0;//para calcular a media de idade das pessoas
var velho=0;//para encontrar a pessoa mais velha
var novo=100000;// para encontrar a pessoa mais nova

var sexo = Array(pessoas);
var mascFem = Array(2);
mascFem[0]=0;mascFem[1]=0;

var opniao = Array(pessoas);

var tipoOpn = Array(4);//contador de opniao
tipoOpn[0]=0; tipoOpn[1]=0; tipoOpn[2]=0; tipoOpn[3]=0;

for(var cont = 0; cont <pessoas; cont++){
    idade[cont] = prompt("informe sua idade");
    media = media + parseInt(idade[cont]);
    //obtencao da pessoa mais velha
    if(velho < idade[cont]){
        velho = idade[cont];
    }
    
    //obtencao da pessoa mais nova
    if(novo>idade[cont]){
        novo=idade[cont];
    }
    sexo[cont]=prompt("informe seu sexo");
    //contagem de pessoas do sexo masculino ou feminino
    if(sexo[cont] == 'm' || sexo[cont] == 'M'){
        mascFem[0]++; 
    }
    else{
        mascFem[1]++;
    }
    //obtencao das opnioes
    opniao[cont]=parseInt(prompt("informe sua opniao \nDe 4 para otimo até 0 para pessimo"));
    if(opniao[cont]==1){
        tipoOpn[0]++;
    }
    else if(opniao[cont]==2){
        tipoOpn[1]++;
    }
    else if(opniao[cont]==3){
        tipoOpn[2]++;
    }
    else if(opniao[cont]==4){
        tipoOpn[3]++;
    }
}
window.alert('media das pessoas: '+media/pessoas);
window.alert('o mais velho tem: '+velho);
window.alert('o mais novo tem: '+novo);
window.alert('quantidade de vaciloes que acharam pessimo: '+tipoOpn[3]);
window.alert('porcentagem otimo e bom: '+((tipoOpn[0]+tipoOpn[1])/45)*100 + "%");
window.alert('opn masculina: '+mascFem[0]+'\n'+'opn feminina: '+mascFem[1]);