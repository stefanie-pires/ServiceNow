//nome: API CEP

function onChange(control, oldValue, newValue, isLoading) {
  if (isLoading || newValue == "") {
    return;
  }

  var ga = new GlideAjax("global.IntegrationCEP"); //pegar informações Script Include
  ga.addParam("sysparm_name", "searchForCEP");
  ga.addParam("sysparm_cep", newValue);
  ga.getXML(callback);

  function callback(response) {
    var answer = response.responseXML.documentElement.getAttribute("answer");
    var data = JSON.parse(answer.replace(/\r?\n|\r/g, "")); //Remove as quebras de linha
    g_form.setValue("u_logradouro", data.logradouro);
    g_form.setValue("u_bairro", data.bairro);
    g_form.setValue("u_localidade", data.localidade);
    g_form.setValue("u_uf", data.uf);
  }
}

//http://www.servicenowbr.com.br/2022/12/consumindo-api-de-cep-via-rest-message.html
