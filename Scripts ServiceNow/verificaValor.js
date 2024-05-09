/* Este script verifica se o novo valor inserido em um controle atende
aos critérios de ter exatamente 12 dígitos. Se não atender a esse critério,
ele limpa o campo associado e exibe uma mensagem de aviso ao usuário.*/

function onChange(control, oldValue, newValue, isLoading) {
  if (isLoading || newValue == "") {
    return;
  }

  if (!/^\d{12}$/.test(newValue)) {
    g_form.setValue("u_indique_material_codigo_sap", "");
    g_form.showFieldMsg(
      "u_indique_material_codigo_sap",
      "Limite de 12 caracteres",
      "warning"
    );
    return;
  }
}
