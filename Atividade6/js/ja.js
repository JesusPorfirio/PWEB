function resp1() {
    var nome = window.prompt("Insira o nome do aluno");
    var nota = window.prompt("Insira a nota1 do aluno");
    nota = parseFloat(nota) + parseFloat(window.prompt("Insira a nota2 do aluno"));
    nota = (parseFloat(nota) + parseFloat(window.prompt("Insira a nota3 do aluno"))/3);
    
    window.alert("Nota do "+ nome + ": " + nota);
    nota=0;
    nome='';
}
function resp2() {
    nota = parseFloat(window.prompt("Insira o numero 1"));
    nome = parseFloat(window.prompt("Insira o numero 2"));
    window.alert(nota+nome);
    window.alert(nota-nome);
    window.alert(nota/nome);
    window.alert(nota%nome);
}
