#language:pt

@Regressivo
Funcionalidade: Validar requisições Reqres
  @CT2.1
  Esquema do Cenario: "<Cenario>" - "<DescricaoDoCenario>"
    Dado que eu enviei uma requisição do tipo GET para retornar todos os usuarios
    Entao a lista de todos os usuarios e retornada com sucesso

    Exemplos:
      | Cenario | DescricaoDoCenario     |
      | CT2.1   | Validar Get List Users |


  @CT2.2
  Esquema do Cenario: "<Cenario>" - "<DescricaoDoCenario>"
    Dado que eu enviei uma requisição do tipo GET para retornar os daos pelo <id> de um usuario
    Entao os dados "<email>", "<first_name>" e "<last_name>" são retornadas com sucesso

    Exemplos:
      | Cenario | DescricaoDoCenario      | id | email                    | first_name | last_name |
      | CT2.2   | Validar Get Single User | 7  | michael.lawson@reqres.in | Michael    | Lawson    |
      | CT2.2   | Validar Get Single User | 12 | rachel.howell@reqres.in  | Rachel     | Howell    |
      | CT2.2   | Validar Get Single User | 10 | byron.fields@reqres.in   | Byron      | Fields    |


  @CT2.3
  Esquema do Cenario: "<Cenario>" - "<DescricaoDoCenario>"
    Dado que eu verifiquei os dados antigos "<email>", "<first_name>" e "<last_name>" de um usuario <id>
    Quando que eu enviei uma requisição do tipo Patch para alterar dados "<new_email>", "<new_first_name>" e "<new_last_name>" de um usuario <id>
    Entao os dado do usuario foram alterados com sucesso

    Exemplos:
      | Cenario | DescricaoDoCenario | id | email                  | first_name | last_name | new_email                | new_first_name | new_last_name |
      | CT2.3   | Validar Patch      | 2  | anet.weaver@reqres.in  | Janet      | Weaver    | homer.simpson@reqres.in  | Homer          | Simpsons      |


#  @CT2.4
#  Esquema do Cenario: "<Cenario>" - "<DescricaoDoCenario>"
#    Dado que eu enviei uma requisição do tipo GET para retornar todos os usuarios
#    Entao a lista de todos os usuarios e retornada com sucesso
#
#    Exemplos:
#      | Cenario | DescricaoDoCenario |
#      | CT2.4   | Validar Post       |