// Ocultar seções específicas em um formulário com base nos valores de certos campos desse formulário.

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
  if (isLoading || newValue === "") {
    hideSwitch();
    return;
  }

  function hideSections(sections) {
    sections.forEach(function (section) {
      g_form.setSectionDisplay(section, false);
    });
  }

  function hideSwitch() {
    var tipoSolicitacao = g_form.getValue("u_tipo_solicitacao");
    var tipoModificacao = g_form.getValue("u_tipo_de_modificao");

    var sectionsToHide = [
      "compras",
      "informaes_dofornecedor",
      "informaes_doproduto",
      "informaes_fiscais",
      "preenchimento_exclusivoburgerkingcmv",
      "atividades",
    ];

    if (tipoSolicitacao === "modificacao_produto_existente") {
      if (tipoModificacao === "u_alteracao_ncm") {
        var indexToRemove = sectionsToHide.indexOf("informaes_fiscais");
        if (indexToRemove !== -1) {
          sectionsToHide.splice(indexToRemove, 1);
        }
      } else {
        var indexToRemoveSolicitacao = sectionsToHide.indexOf(
          "informaes_doproduto"
        );
        if (indexToRemoveSolicitacao !== -1) {
          sectionsToHide.splice(indexToRemoveSolicitacao, 1);
        }
      }
    }

    switch (tipoSolicitacao) {
      case "modificacao_produto_existente":
      case "modificacao_de_reg_info":
      case "criacao_de_reg_info":
        hideSections(sectionsToHide);
        break;
      default:
        break;
    }
  }

  setTimeout(function () {
    hideSwitch();
  }, 500);
}
