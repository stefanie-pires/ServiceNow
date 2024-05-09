// Formato obrigatorio apenas com números, pontos, barras e traços

function onChange(control, oldValue, newValue, isLoading) {
  if (isLoading || newValue === "") {
    return;
  }

  if (!/^[0-9./-]*$/.test(newValue)) {
    newValue = newValue.replace(/[^0-9./-]/g, "");
    g_form.setValue("u_processo_numero", newValue);
    alert("Somente números, pontos, barras e traços são permitidos.");
  }
}

// Formato obrigatorio apenas com números e virgulas

function onChange(control, oldValue, newValue, isLoading) {
  if (isLoading || newValue === "") {
    return;
  }

  if (!/^\d+(\,\d+)?$/.test(newValue)) {
    // Remove caracteres que não sejam números ou vírgula
    newValue = newValue.replace(/[^\d,]/g, "");
    g_form.setValue("u_area_do_imovel", newValue);
    alert("Permite apenas números e vírgula");
  }
}
