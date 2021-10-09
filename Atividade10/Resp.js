function clicar(){
    let aluno=[];
    for(let x =0; x<3; x++){
        aluno.push(window.prompt("Digite um nome:"));
        aluno.push(window.prompt("Digite um Ra:"));
    }
    for(let x =0; x<aluno.length; x++){
        window.alert(aluno[x])
    }
}
function clicar1(){
    let aluno=[];
    let ra=[];
    for(let x =0; x<3; x++){
        aluno.push(window.prompt("Digite um nome:"));
        ra.push(window.prompt("Digite um Ra:"));
    }
    for(let x =0; x<aluno.length; x++){
        window.alert(aluno[x] + ra[x]);
    }
}
function clicar2(){
    let aluno1, aluno2,aluno3;
    let ra1,ra2,ra3;
        aluno1=(window.prompt("Digite um nome:"));
        ra1=(window.prompt("Digite um Ra:"));
        
        aluno2=(window.prompt("Digite um nome:"));
        ra2=(window.prompt("Digite um Ra:"));

        aluno3=(window.prompt("Digite um nome:"));
        ra3=(window.prompt("Digite um Ra:"));


        window.alert(aluno1);
        window.alert(ra1);

        window.alert(aluno2);
        window.alert(ra2);
        
        window.alert(aluno3);
        window.alert(ra3);

}