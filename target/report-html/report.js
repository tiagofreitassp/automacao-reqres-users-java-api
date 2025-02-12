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
  "line": 6,
  "name": "\"\u003cCenario\u003e\" - \"\u003cDescricaoDoCenario\u003e\"",
  "description": "",
  "id": "validar-requisições-reqres;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\"",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 5,
      "name": "@CT2.1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que eu enviei uma requisição do tipo GET para retornar todos os usuarios",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "a lista de todos os usuarios e retornada com sucesso",
  "keyword": "Entao "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "validar-requisições-reqres;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";",
  "rows": [
    {
      "cells": [
        "Cenario",
        "DescricaoDoCenario"
      ],
      "line": 11,
      "id": "validar-requisições-reqres;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;1"
    },
    {
      "cells": [
        "CT2.1",
        "Validar Get List Users"
      ],
      "line": 12,
      "id": "validar-requisições-reqres;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 1013222900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "\"CT2.1\" - \"Validar Get List Users\"",
  "description": "",
  "id": "validar-requisições-reqres;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 5,
      "name": "@CT2.1"
    },
    {
      "line": 3,
      "name": "@Regressivo"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "que eu enviei uma requisição do tipo GET para retornar todos os usuarios",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "a lista de todos os usuarios e retornada com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "location": "UsersSteps.queEuEnvieiUmaRequisiçãoDoTipoGETParaRetornarTodosOsUsuarios()"
});
formatter.result({
  "duration": 1759896200,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.aListaDeTodosOsUsuariosERetornadaComSucesso()"
});
formatter.result({
  "duration": 40011500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "\"\u003cCenario\u003e\" - \"\u003cDescricaoDoCenario\u003e\"",
  "description": "",
  "id": "validar-requisições-reqres;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\"",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 15,
      "name": "@CT2.2"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "que eu enviei uma requisição do tipo GET para retornar os daos pelo \u003cid\u003e de um usuario",
  "keyword": "Dado "
});
formatter.step({
  "line": 18,
  "name": "os dados \"\u003cemail\u003e\", \"\u003cfirst_name\u003e\" e \"\u003clast_name\u003e\" são retornadas com sucesso",
  "keyword": "Entao "
});
formatter.examples({
  "line": 20,
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
        "last_name"
      ],
      "line": 21,
      "id": "validar-requisições-reqres;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;1"
    },
    {
      "cells": [
        "CT2.2",
        "Validar Get Single User",
        "7",
        "michael.lawson@reqres.in",
        "Michael",
        "Lawson"
      ],
      "line": 22,
      "id": "validar-requisições-reqres;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;2"
    },
    {
      "cells": [
        "CT2.2",
        "Validar Get Single User",
        "12",
        "rachel.howell@reqres.in",
        "Rachel",
        "Howell"
      ],
      "line": 23,
      "id": "validar-requisições-reqres;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;3"
    },
    {
      "cells": [
        "CT2.2",
        "Validar Get Single User",
        "10",
        "byron.fields@reqres.in",
        "Byron",
        "Fields"
      ],
      "line": 24,
      "id": "validar-requisições-reqres;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 11858100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "\"CT2.2\" - \"Validar Get Single User\"",
  "description": "",
  "id": "validar-requisições-reqres;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 15,
      "name": "@CT2.2"
    },
    {
      "line": 3,
      "name": "@Regressivo"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "que eu enviei uma requisição do tipo GET para retornar os daos pelo 7 de um usuario",
  "matchedColumns": [
    2
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 18,
  "name": "os dados \"michael.lawson@reqres.in\", \"Michael\" e \"Lawson\" são retornadas com sucesso",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 68
    }
  ],
  "location": "UsersSteps.queEuEnvieiUmaRequisiçãoDoTipoGETParaRetornarOsDaosPeloDeUmUsuario(int)"
});
formatter.result({
  "duration": 488898100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "michael.lawson@reqres.in",
      "offset": 10
    },
    {
      "val": "Michael",
      "offset": 38
    },
    {
      "val": "Lawson",
      "offset": 50
    }
  ],
  "location": "UsersSteps.osDadosESãoRetornadasComSucesso(String,String,String)"
});
formatter.result({
  "duration": 924742400,
  "status": "passed"
});
formatter.before({
  "duration": 664800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "\"CT2.2\" - \"Validar Get Single User\"",
  "description": "",
  "id": "validar-requisições-reqres;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 15,
      "name": "@CT2.2"
    },
    {
      "line": 3,
      "name": "@Regressivo"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "que eu enviei uma requisição do tipo GET para retornar os daos pelo 12 de um usuario",
  "matchedColumns": [
    2
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 18,
  "name": "os dados \"rachel.howell@reqres.in\", \"Rachel\" e \"Howell\" são retornadas com sucesso",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 68
    }
  ],
  "location": "UsersSteps.queEuEnvieiUmaRequisiçãoDoTipoGETParaRetornarOsDaosPeloDeUmUsuario(int)"
});
formatter.result({
  "duration": 482193400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rachel.howell@reqres.in",
      "offset": 10
    },
    {
      "val": "Rachel",
      "offset": 37
    },
    {
      "val": "Howell",
      "offset": 48
    }
  ],
  "location": "UsersSteps.osDadosESãoRetornadasComSucesso(String,String,String)"
});
formatter.result({
  "duration": 41173300,
  "status": "passed"
});
formatter.before({
  "duration": 2021400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "\"CT2.2\" - \"Validar Get Single User\"",
  "description": "",
  "id": "validar-requisições-reqres;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 15,
      "name": "@CT2.2"
    },
    {
      "line": 3,
      "name": "@Regressivo"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "que eu enviei uma requisição do tipo GET para retornar os daos pelo 10 de um usuario",
  "matchedColumns": [
    2
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 18,
  "name": "os dados \"byron.fields@reqres.in\", \"Byron\" e \"Fields\" são retornadas com sucesso",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 68
    }
  ],
  "location": "UsersSteps.queEuEnvieiUmaRequisiçãoDoTipoGETParaRetornarOsDaosPeloDeUmUsuario(int)"
});
formatter.result({
  "duration": 471478000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "byron.fields@reqres.in",
      "offset": 10
    },
    {
      "val": "Byron",
      "offset": 36
    },
    {
      "val": "Fields",
      "offset": 46
    }
  ],
  "location": "UsersSteps.osDadosESãoRetornadasComSucesso(String,String,String)"
});
formatter.result({
  "duration": 67233500,
  "status": "passed"
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
  "name": "que eu enviei uma requisição do tipo Patch para alterar dados \"\u003cnew_email\u003e\", \"\u003cnew_first_name\u003e\" e \"\u003cnew_last_name\u003e\" deste usuario \u003cid\u003e",
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
        "janet.weaver@reqres.in",
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
  "duration": 452500,
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
  "name": "que eu verifiquei os dados antigos \"janet.weaver@reqres.in\", \"Janet\" e \"Weaver\" de um usuario 2",
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
  "name": "que eu enviei uma requisição do tipo Patch para alterar dados \"homer.simpson@reqres.in\", \"Homer\" e \"Simpsons\" deste usuario 2",
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
formatter.match({
  "arguments": [
    {
      "val": "janet.weaver@reqres.in",
      "offset": 36
    },
    {
      "val": "Janet",
      "offset": 62
    },
    {
      "val": "Weaver",
      "offset": 72
    },
    {
      "val": "2",
      "offset": 94
    }
  ],
  "location": "UsersSteps.queEuVerifiqueiOsDadosAntigosEDeUmUsuario(String,String,String,int)"
});
formatter.result({
  "duration": 146366900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "homer.simpson@reqres.in",
      "offset": 63
    },
    {
      "val": "Homer",
      "offset": 90
    },
    {
      "val": "Simpsons",
      "offset": 100
    },
    {
      "val": "2",
      "offset": 124
    }
  ],
  "location": "UsersSteps.queEuEnvieiUmaRequisiçãoDoTipoPatchParaAlterarDadosEDeUmUsuario(String,String,String,int)"
});
formatter.result({
  "duration": 522325300,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.osDadoDoUsuarioForamAlteradosComSucesso()"
});
formatter.result({
  "duration": 57572300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 39,
  "name": "\"\u003cCenario\u003e\" - \"\u003cDescricaoDoCenario\u003e\"",
  "description": "",
  "id": "validar-requisições-reqres;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\"",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 38,
      "name": "@CT2.4"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "que eu enviei uma requisição do tipo POST para criar um usuario com os dados \"\u003cnome\u003e\" e \"\u003cjob\u003e\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 41,
  "name": "o cadastro do usuario e criado com sucesso",
  "keyword": "Entao "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "validar-requisições-reqres;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";",
  "rows": [
    {
      "cells": [
        "Cenario",
        "DescricaoDoCenario",
        "nome",
        "job"
      ],
      "line": 44,
      "id": "validar-requisições-reqres;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;1"
    },
    {
      "cells": [
        "CT2.4",
        "Validar Post",
        "lisa",
        "developer"
      ],
      "line": 45,
      "id": "validar-requisições-reqres;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 812500,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "\"CT2.4\" - \"Validar Post\"",
  "description": "",
  "id": "validar-requisições-reqres;\"\u003ccenario\u003e\"---\"\u003cdescricaodocenario\u003e\";;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 38,
      "name": "@CT2.4"
    },
    {
      "line": 3,
      "name": "@Regressivo"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "que eu enviei uma requisição do tipo POST para criar um usuario com os dados \"lisa\" e \"developer\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 41,
  "name": "o cadastro do usuario e criado com sucesso",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "lisa",
      "offset": 78
    },
    {
      "val": "developer",
      "offset": 87
    }
  ],
  "location": "UsersSteps.que_eu_enviei_uma_requisição_do_tipo_POST_para_criar_um_usuario_com_os_dados_e(String,String)"
});
formatter.result({
  "duration": 260300,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.o_cadastro_do_usuario_e_criado_com_sucesso()"
});
formatter.result({
  "duration": 529503500,
  "status": "passed"
});
});