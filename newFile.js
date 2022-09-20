//Programar Funcion Acyncrona PAra el Boton de Guardar
btnCalcular.addEventListener("click", () => {
  GuardarAlumnos.push({
    Identificación: Id.value,
    Nombre: Nombre.value,
    Asignatura: Asignatura.value,
    nota1: nota1.value,
    nota2: nota2.value,
    nota3: nota3.value,
    Definitiva: Definitiva.value,
    Observaciones: Observaciones.value,
  });
  console.table(GuardarAlumnos);
});
