var tipos =
  "Form Layout,Form Sections,List Element,List Layout,Related List Entry,Related Lists,Section Element,UI Policy,UI Policy Action,UI View,Business Rule,Access Control,Access Roles,Business Rule,Form Layout,Form Sections,Role,UI Action,User Role,Access Control,Access Roles,Business Rule,Client Script,Dictionary,Dictionary Attribute,Field Label,Fix Script,Form Layout,Message,Role,Script Include,Translated Text,UI Action,UI localPage,UI Policy,UI Policy Action,Access Control,Access Roles,Application Menu,Basic Auth Configuration,Business Rule,Choice list,Client Script,Dictionary,Dictionary,Dictionary Attribute,Dictionary Entry Override,Field Label,Fix Script,Form Layout,Form Layout,Form Sections,Form Sections,Group,Group Role,Group Type,HTTP Headers,HTTP Method,List Layout,Message,Module,Related List Entry,Related Lists,Related Lists,REST Message,Role,Script IncludeStyle,Table,Translated Name / Field,Translated Text,UI Action,UI Action Role,UI Formatter,UI Page,UI Policy,UI Policy Action,UI View,User,User Role,Variable Substitutions,View Rule,Access Control,Access Roles,Business Rule,Dictionary,Field Label,Form Layout,List Control,List Layout,Message,Role,Script Include,UI Action,UI Page,Access Control,Access Roles,Form Layout,List Control,Role,UI Action,UI Policy,UI Policy Action,UI Action,UI Action Role,Form Layout,List Control,Related Lists,Access Control,Access Roles,List Control,Role,UI Policy Action,Catalog Item,Catalog UI Policy Action,Catalog Variable Set,Variable,Variable Set,Category Property,Dynamic Filter Options,Report,Report Users and Groups,System Property,System Property Category,Scheduled Email of Report,User Role,Flow,User Criteria,Record Producer,Catalog Items Catalog,Catalog Item Category,Catalog Item Available for,Catalog Client Scripts,Action Type,Widget";

var uss = [
  "d5e69f7c1bee79907129eca0f54bcb2a",
  "4223174ddb3ef154ac580fbca39619de",
  "b8372b0ddbb23554ac580fbca396197f",
];

var obj = {};

uss.forEach(function (element, index, array) {
  var grSUX = new GlideRecord("sys_update_xml");
  grSUX.addEncodedQuery(
    "update_set=" + element + "^action=INSERT_OR_UPDATE^typeIN" + tipos
  );
  grSUX.orderBy("type");
  grSUX.query();
  while (grSUX.next()) {
    if (
      obj[grSUX.type.toString()].length <= 0 ||
      obj[grSUX.type.toString()] == null ||
      obj[grSUX.type.toString()] == undefined
    ) {
      obj[grSUX.type.toString()] = [];
    }

    if (
      obj[grSUX.type.toString()].indexOf(grSUX.target_name.toString()) == -1
    ) {
      obj[grSUX.type.toString()].push(grSUX.target_name.toString());
    }
  }
});

gs.info(JSON.stringify(obj));
