//permissões grupos:

function onLoad() {
  g_form.clearOptions("u_indique_a_solicitacao");
  g_form.addOption("u_indique_a_solicitacao", "", "-- None --");

  if (g_user.hasRoleExactly("x_ibmbk_suppliers.materiais_novo")) {
    g_form.addOption(
      "u_indique_a_solicitacao",
      "u_criacao_novo_material",
      "Criação Novo Material"
    );
  }

  if (g_user.hasRoleExactly("x_ibmbk_suppliers.materiais_modificacao")) {
    g_form.addOption(
      "u_indique_a_solicitacao",
      "u_modificacao_material_existente",
      "Modificação Material Existente"
    );
  }

  if (g_user.hasRoleExactly("x_ibmbk_suppliers.materiais_ativacao")) {
    g_form.addOption(
      "u_indique_a_solicitacao",
      "u_ativacao_inativacao",
      "Ativação ou Inativação"
    );
  }

  if (g_user.hasRoleExactly("x_ibmbk_suppliers.materiais_reg_info")) {
    g_form.addOption(
      "u_indique_a_solicitacao",
      "u_criacao_reg_info",
      "Criação de Reg Info"
    );
    g_form.addOption(
      "u_indique_a_solicitacao",
      "u_modificacao_reg_info",
      "Modificação de Reg Info"
    );
  }
}
