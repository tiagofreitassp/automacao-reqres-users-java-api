$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/users.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
    }
  ],
  "line": 4,
  "name": "Validar requisições Reqres",
  "description": "",
  "id": "validar-requisições-reqres",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@Regressivo"
    }
  ]
});
formatter.scenarioOutline({
  "line": 28,
  "name": "\"\u003cCenario\u003e\" - \"\u003cDescricaoDoCenario\u003e\"",
  "description": "",
  "id": "validar-requisições-reqres;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\"",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 27,
      "name": "@CT2.3"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "que eu verifiquei os dados antigos \"\u003cemail\u003e\", \"\u003cfirst_name\u003e\" e \"\u003clast_name\u003e\" de um usuario \u003cid\u003e",
  "keyword": "Dado "
});
formatter.step({
  "line": 30,
  "name": "que eu enviei uma requisição do tipo Patch para alterar dados \"\u003cnew_email\u003e\", \"\u003cnew_first_name\u003e\" e \"\u003cnew_last_name\u003e\" de um usuario \u003cid\u003e",
  "keyword": "Quando "
});
formatter.step({
  "line": 31,
  "name": "os dado do usuario foram alterados com sucesso",
  "keyword": "Entao "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "validar-requisições-reqres;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";",
  "rows": [
    {
      "cells": [
        "Cenario",
        "DescricaoDoCenario",
        "id",
        "email",
        "first_name",
        "last_name",
        "new_email",
        "new_first_name",
        "new_last_name"
      ],
      "line": 34,
      "id": "validar-requisições-reqres;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;1"
    },
    {
      "cells": [
        "CT2.3",
        "Validar Patch",
        "2",
        "anet.weaver@reqres.in",
        "Janet",
        "Weaver",
        "homer.simpson@reqres.in",
        "Homer",
        "Simpsons"
      ],
      "line": 35,
      "id": "validar-requisições-reqres;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 606421596,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "\"CT2.3\" - \"Validar Patch\"",
  "description": "",
  "id": "validar-requisições-reqres;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 27,
      "name": "@CT2.3"
    },
    {
      "line": 3,
      "name": "@Regressivo"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "que eu verifiquei os dados antigos \"anet.weaver@reqres.in\", \"Janet\" e \"Weaver\" de um usuario 2",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 30,
  "name": "que eu enviei uma requisição do tipo Patch para alterar dados \"homer.simpson@reqres.in\", \"Homer\" e \"Simpsons\" de um usuario 2",
  "matchedColumns": [
    2,
    6,
    7,
    8
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 31,
  "name": "os dado do usuario foram alterados com sucesso",
  "keyword": "Entao "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});