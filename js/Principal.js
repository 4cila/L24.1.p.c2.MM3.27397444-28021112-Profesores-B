/*En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene
un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere
que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan
de la clase Cl_profesor.
Haga un programa que haga uso de la misma clase Cl_profesor del ejercicio anterior, lea los
datos de un profesor contratado y reporte su ingreso total.
Ejemplos de la corrida:
Nombre del profesor contratado: Rafael
Monto del bono: $30
Cantidad de horas: 15
Ingreso total del profesor Rafael: $180
Nombre del profesor contratado: Felicia
Monto del bono: $30
Cantidad de horas: 20
Ingreso total del profesor Felicia: $230*/

import Universidad from "./Universidad.js";
import Cl_contratado from "./Cl_contratado.js";

let contratado = new Cl_contratado("Rafael", 30, 15);
let contratado2 = new Cl_contratado("Felicia", 30, 20);

let universidad = new Universidad();
universidad.procesarProfesor(contratado);
universidad.procesarProfesor(contratado2);

let salida = document.getElementById("Salida");

let mostrarContratado =(contratado) =>{
    return `

    <tr>
        <td>${contratado.nombre}</td>
        <td>${contratado.bono}</td>
        <td>${contratado.horas}</td>
        <td>${contratado.ingresoTotal()}</td>
    </tr>
    `;

};


salida.innerHTML = `
  <table>
    <tr>
      <td>Nombre</td>
      <td>Bono</td>
       <td>Horas</td> 
       <td>Ingreso</td>

    </tr>
    ${mostrarContratado(contratado)}
    ${mostrarContratado(contratado2)}

  </table>
  
`;


