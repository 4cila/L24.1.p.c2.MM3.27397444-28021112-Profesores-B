export default class Universidad {
    constructor() {
        this.acumIngreso = 0;
    }

    procesarProfesor(contratado) {
        this.acumIngreso += contratado.ingresoTotal();
    }


    mostrarIngresoTotal() {

        return this.acumIngreso;
    }
}