//client script pra ficar obrigatorio campos só depois do chamado ser iniciado:
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
  if (newValue === "") {
    return;
  }
  if (newValue == "2") {
    g_form.setMandatory("u_data_de_emissao", true);
    g_form.setMandatory("u_novo_vencimento", true);
    g_form.setMandatory("u_midia_do_certificado", true);
  }
  //Type appropriate comment here, and begin script below
}
