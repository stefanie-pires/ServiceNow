function onChange(control, oldValue, newValue, isLoading) {
  if (isLoading || newValue == "") {
    return;
  }

  var fecha_ini = g_form.getValue("fecha_contratacion");
  var fecha_fin = g_form.getValue("fecha_termino");

  if (fecha_fin >= fecha_ini) {
    g_form.clearValue("fecha_termino");
    g_form.showFieldMsg(
      "fecha_termino",
      "No puede ingresar una fecha igual o menor a la fecha de contratación",
      "error"
    );
  }
}

/*este script impede que o usuário insira uma data de término de contrato
 que seja igual ou anterior à data de contratação.
*/
