import axios from 'axios';

// METODOS HTTP: GET, POST, PUT, PATCH, DELETE

class ClienteHTTP{

    constructor(url){
        this.url = url
    }

    // GET
    async mostrarJuegos(){
        try {
            const respuesta = await axios.get(this.url)
            console.log(respuesta.data)
        } catch (error) {
            throw new Error('error en la ruta')
            // throw error.response
        }
    }

    // GET CON PARAMETROS 
    async mostrarJuegosPorParametro(param){
        const respuesta = await axios.get(this.url, {
            params: {
                consola: param
            }
        })
        console.log(respuesta.data)
    }

    // POST
    async agregarJuego(objeto){
        try {
            const respuesta = await axios.post(this.url, objeto)
            console.log(respuesta.data)
        } catch (error) {
            throw error.response
        }
    }

    // DELETE
    async borrarJuego(id){
        try {
            const respuesta = await axios.delete(`${this.url}/${id}`)
            console.log(respuesta.data)
        } catch (error) {
            throw error.response
        }
    }
    
    // PUT METODO DE REEMPLAZO
    async put(id, objeto){
        const respuesta = await axios.put(`${this.url}/${id}`, objeto)
        console.log(respuesta.data)
    }

    // PATCH
    async modificarDatos(id, dato){
        try {
            const respuesta = await axios.patch(`${this.url}/${id}`, dato)
            console.log(respuesta.data)
        } catch (error) {
            throw error.response
        }
    }

}

export default ClienteHTTP