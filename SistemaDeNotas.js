//declarar las varibles
let GuardarAlumnos = [];
let Id = document.getElementById("Id");
let Nombre = document.getElementById("Nombre");
let Asignatura = document.getElementById("Asignatura");
let nota1 = document.getElementById("nota1");
let nota2 = document.getElementById("nota2");
let nota3 = document.getElementById("nota3");
let Definitiva = document.getElementById("Definitiva");
let Observaciones = document.getElementById(" Observaciones");

let btnCalcular = document.getElementById("btnCalcular");
let btnLimpiar = document.getElementById("btnLimpiar");
let btnBuscar = document.getElementById("btnBuscar");
let btnListar = document.getElementById("btnListar");

//crear funciones para oobligacion de campos
Id.onfocus = () => {
  Mensajeid.textContent = " Su Identificacion es Obligatoria";
};
Nombre.onfocus = () => {
  MensajeNombre.textContent = " Campo Obligatorio";
};
Asignatura.onfocus = () => {
  MensajeAsignatura.textContent = " Campo Obligatorio";
};
Id.addEventListener("blur", function () {
  Mensajeid.textContent = "";
});
Nombre.addEventListener("blur", function () {
  MensajeNombre.textContent = "";
});
Asignatura.addEventListener("blur", function () {
  MensajeAsignatura.textContent = "";
});

//programat boton de guardar

//Programar Funcion Acyncrona PAra el Boton de Guardar
btnCalcular.addEventListener("click", () => {
  let nota_1, nota_2, nota_3, promedio;
  nota_1 = parseFloat(document.formulario1.nota1.value);
  nota_2 = parseFloat(document.formulario1.nota2.value);
  nota_3 = parseFloat(document.formulario1.nota3.value);
  promedio = (nota_1 + nota_2 + nota_3) / 3;
  document.formulario1.Definitiva.value = promedio;

  if (promedio <= 2) {
    document.formulario1.Observaciones.value = "Reprobado";
  }
  if (promedio > 2 && promedio < 2.94) {
    document.formulario1.Observaciones.value =
      "Debe comunicarse con el docente para habilitacion";
  }
  if (promedio >= 3 && promedio <= 5) {
    document.formulario1.Observaciones.value = "Felicitaciones quedas aprobado";
  }

  if (promedio >= 5.1) {
    alert("error numero no permitido");
  }
  newFunction();

  function newFunction() {
    GuardarAlumnos.push({
      Identificación: Id.value,
      Nombre: Nombre.value,
      Asignatura: Asignatura.value,
      nota1: nota1.value,
      nota2: nota2.value,
      nota3: nota3.value,
      Definitiva: Definitiva.value,
      Observaciones: Observaciones,
    });
    console.table(GuardarAlumnos);
  }
});

//Crear la tabla para llamar los objetos de mi arreglo

btnBuscar.addEventListener("click", () => {
  if (!TAlumnos.hasChildNodes()) {
    let newTable = document.createElement("table");
    newTable.setAttribute("border", "1");
    let newthId = document.createElement("th");
    let newTextthId = document.createTextNode("Id");
    let newthNombre = document.createElement("th");
    let newTextthNombre = document.createTextNode("Nombre");
    let newthAsignatura = document.createElement("th");
    let newTextthAsignatura = document.createTextNode("Asignatura");
    let newthnota1 = document.createElement("th");
    let newTextthnota1 = document.createTextNode("nota1");
    let newthnota2 = document.createElement("th");
    let newTextthnota2 = document.createTextNode("nota2");
    let newthnota3 = document.createElement("th");
    let newTextthnota3 = document.createTextNode("nota3");
    let newthDefinitiva = document.createElement("th");
    let newTextthDefinitiva = document.createTextNode("Definitiva");
    let newthObservaciones = document.createElement("th");
    let newTextthObservaciones = document.createTextNode("Observaciones");

    //agregar los textos a cada encabezado
    newthId.appenChild(newTextthId);
    newthNombre.appendChild(newTextthNombre);
    newthAsignatura.appenChild(newTextthAsignatura);
    newthnota1.appendChild(newTextthnota1);
    newthnota2.appendChild(newTextthnota2);
    newthnota3.appendChild(newTextthnota3);
    newthDefinitiva.appenChild(newTextthDefinitiva);
    newthObservaciones.appendChild(newTextthObservaciones);

    //agregar los th ala tabla

    newTable.appendChild(newthId);
    newTable.appendChild(newthNombre);
    newTable.appendChild(newthAsignatura);
    newTable.appendChild(newthnota1);
    newTable.appendChild(newthnota2);
    newTable.appendChild(newthnota3);
    newTable.appendChild(newthDefinitiva);
    newTable.appendChild(newthObservaciones);
    //agregar la tabla a al div TAlumnos

    //recorrer el arreglo para que cada uno sea una fila
    GuardarAlumnos.map((Galumnos) => {
      let newRow = document.createElement("tr");
      let newtdId = createElement("td");
      let newTextId = createTextNode(Galumnos.Id);
      let newtdNombre = document.createElement("td");
      let newTextNombre = document.createTextNode(Galumnos.Nombre);
      let newtdAsignatura = document.createElement("td");
      let newTextAsignatura = document.createTextNode(Galumnos.Asignatura);
      let newtdnota1 = document.createElement("td");
      let newTextNota1 = document.createTextNode(Galumnos.nota1);
      let newtdnota2 = document.createElement("td");
      let newTextNota2 = document.createTextNode(Galumnos.nota2);
      let newtdnota3 = document.createElement("td");
      let newTextNota3 = document.createTextNode(Galumnos.nota3);
      let newtdDefinitiva = document.createElement("td");
      let newTextDefinitiva = document.createTextNode(Galumnos.definit);
      let newtdObservaciones = document.createElement("td");
      let newTextObservaciones = document.createTextNode(
        Galumnos.Observaciones
      );

      //agregar a cada  elemento de los tds

      newtdId = appendChild(newTextId);
      newtdNombre = appendChild(newTextNombre);
      newtdAsignatura = appendChild(newTextAsignatura);
      newtdnota1 = appendChild(newTextNota1);
      newtdnota2 = appendChild(newTextNota2);
      newtdnota3 = appendChild(newTextNota3);
      newtdDefinitiva = appendChild(newTextDefinitiva);
      newtdObservaciones = appendChild(newTextObservaciones);

      // agregar los tds
      newRow.appendChild(newtdId);
      newRow.appendChild(newtdNombre);
      newRow.appendChild(newtdAsignatura);
      newRow.appendChild(newtdnota1);
      newRow.appendChild(newtdnota2);
      newRow.appendChild(newtdnota3);
      newRow.appendChild(newtdDefinitiva);
      newRow.appendChild(newtdObservaciones);

      newTable.appendChild(newRow);
    });

    TAlumnos.appendChild(newTable);
  }
});

//programar botton de limpiar
btnLimpiar.addEventListener("click", () => {
  Id.value = "";
  Nombre.value = "";
  Asignatura.value = "";
  nota1.value = "";
  nota2.value = "";
  nota3.value = "";
  Definitiva.value = "";
  Observaciones.value = "";
  //Enviar el foco a valor 1
  Id.focus();
});

// Dar la Funconalidad al btnGuardar

//crear boton listar

let TodosAlumnos = async () => {
  let Alumnos = await getAlumnos();
  Alumnos.map((alum) => {
    document.write(
      "<table border='1'><th>Identificación</th><th>Nombre</th><th>Asignatura</th><th>Definitiva</th>"
    );
    //pregunntar al profe sobre stilos
    document.write(
      `<div class="divT" display="flex"></div><tr><td>${alum.Id}</td><td>${alum.Nombre}</td><td>${alum.Asignatura}</td><td>${alum.Definitiva}</td></tr></div>`
    );
    document.write("</table>", " <br />");
  }, 200);
};
