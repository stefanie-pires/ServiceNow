// Formato de cnpj obrigatorio

function onChange(control, oldValue, newValue, isLoading) {
  if (isLoading || newValue == "") {
    return;
  }

  if (!/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/.test(newValue)) {
    g_form.setValue("u_cnpj", "");
    alert("Formato obrigatório: xx.xxx.xxx/xxxx-xx");
    return;
  }
}

// Formato municipio obrigatorio

function onChangeMunicipio(control, oldValue, newValue, isLoading) {
  if (isLoading || newValue === "") {
    return;
  }

  if (!/.+\/[A-Z]{2}$/.test(newValue)) {
    g_form.setValue("u_municipio", "");
    alert("Formato obrigatório: Município/UF");
    return;
  }
}
