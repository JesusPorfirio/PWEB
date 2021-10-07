function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    return parseFloat(base) * parseFloat(altura);
}
const retangulo1 = new Retangulo(2, 4);

console.log(Retangulo1);
