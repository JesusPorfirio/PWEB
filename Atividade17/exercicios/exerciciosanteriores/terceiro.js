var soma = 0;
for (var i=2; i<=process.argv.length-1; i++)
  soma=soma+Number(process.argv[i]);//recebe dados para a var soma 
console.log("soma="+soma);