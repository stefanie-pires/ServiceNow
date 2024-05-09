// name: IntegrationCEP

var IntegrationCEP = Class.create();
IntegrationCEP.prototype = Object.extendsObject(AbstractAjaxProcessor, {
  searchForCEP: function () {
    var cep = this.getParameter("sysparm_cep"); // Parâmetro recebido

    try {
      var r = new sn_ws.RESTMessageV2("Via Cep", "Default GET");
      r.setStringParameterNoEscape("cep", cep); // Parâmetro que será recebido
      var response = r.execute();
      var responseBody = response.getBody();
      var httpStatus = response.getStatusCode();

      return responseBody; //Retorno dos dados
    } catch (ex) {
      var message = ex.message;
      gs.info("Erro CEP_Client: " + message); // Menssagem indicando o erro
    }
  },

  type: "IntegrationCEP",
});

// http://www.servicenowbr.com.br/2023/01/auto-preenchimento-via-integracao-rest.html
