function tiradaDeRuleta() {
    const vueltas = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    let posicion = 0;
    for (let i = 0; i < vueltas; i++) {
        posicion = Math.floor(Math.random() * 37);
    }
    
    return posicion;
}
for (let juego = 1; juego <= 10; juego++) {
    const valorAleatorio = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    const resultado = tiradaDeRuleta();
    
    console.log(`Nro de Juego: ${juego}`);
    console.log(`Valor Aleatorio Generado: ${valorAleatorio}`);
    console.log(`Nro que cayó en la ruleta: ${resultado}`);
    console.log();
}