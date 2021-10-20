import ClienteHTTP from "./clientehttp/cliente.js";

const url = 'http://localhost:3000/juegos'

const cliente = new ClienteHTTP(url)

const objetoPut = {
    nombre: "Super Mario Bros 3",
    consola: "NES",
    año: 1988
}

const datoModificacion = {
    consola: "Nintendo Entertainment System"
}

try {

    // const juegoGuardado = await cliente.agregarJuegos(juego)
    // console.log(juegoGuardado)
    // cliente.mostrarJuegos()

    // await cliente.borrarJuego(4)
    // cliente.mostrarJuegos()

    // const pruebaPut = await cliente.put(3, objetoPut)
    // console.log(pruebaPut)

    // const objetoModificado = await cliente.modificarDatos(1, datoModificacion)
    // console.log(objetoModificado)

    // cliente.mostrarJuegos()

    // cliente.mostrarJuegosPorParametro('NINTENDO64')

} catch (error) {
    console.log(error)
}


