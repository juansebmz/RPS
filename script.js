document.getElementById("piedra").addEventListener("click", () => jugar("piedra"));
document.getElementById("papel").addEventListener("click", () => jugar("papel"));
document.getElementById("tijeras").addEventListener("click", () => jugar("tijeras"));


let pJugadas = 0;
let pGanadas = 0;
let resultado;

function maquinaJuego() {
    return Math.ceil(Math.random() * 3);
}

function jugar(usuario) {
    const opciones = ["piedra", "papel", "tijeras"];
    const maquina = maquinaJuego();
    const maquina_txt = opciones [maquina - 1];


    if (usuario === maquina_txt) {
        resultado = "Empate";
    } else if ((usuario === "piedra" && maquina_txt === "tijeras") || (usuario === "papel" && maquina_txt === "piedra") || (usuario === "tijeras" && maquina_txt === "papel")) {
        resultado = "Ganaste";
        pGanadas++;
    } else {
        resultado = "Perdiste";
    }
    pJugadas++;
    actualizarContadores();

    alert(`${resultado}. Tu elegiste: ${usuario} y la computadora: ${maquina_txt}`);

}

function actualizarContadores() {
    document.getElementById("pJugadas").textContent = pJugadas;
    document.getElementById("pGanadas").textContent = pGanadas;
}