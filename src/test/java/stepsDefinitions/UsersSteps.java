package stepsDefinitions;

import base.BaseUtil;
import cucumber.api.PendingException;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class UsersSteps extends BaseUtil {
    private BaseUtil base;

    public UsersSteps(BaseUtil base) {
        this.base = base;
    }
    @Dado("^que eu enviei uma requisição do tipo GET para retornar todos os usuarios$")
    public void queEuEnvieiUmaRequisiçãoDoTipoGETParaRetornarTodosOsUsuarios() throws Throwable {
        base.requisitarListaDeUsuarios();
    }

    @Entao("^a lista de todos os usuarios e retornada com sucesso$")
    public void aListaDeTodosOsUsuariosERetornadaComSucesso() throws Throwable {
        base.validarRetornoListaDeUsuarios();
    }

    @Dado("^que eu enviei uma requisição do tipo GET para retornar os daos pelo (\\d+) de um usuario$")
    public void queEuEnvieiUmaRequisiçãoDoTipoGETParaRetornarOsDaosPeloDeUmUsuario(int id) throws Throwable {
        base.enviarRequisicaoPorID(id);
    }

    @Entao("^os dados \"([^\"]*)\", \"([^\"]*)\" e \"([^\"]*)\" são retornadas com sucesso$")
    public void osDadosESãoRetornadasComSucesso(String email, String nome, String sobrenome) throws Throwable {
        base.validarDadosDoretornoPorID(email,nome,sobrenome);
    }

    @Dado("^que eu verifiquei os dados antigos \"([^\"]*)\", \"([^\"]*)\" e \"([^\"]*)\" de um usuario (\\d+)$")
    public void queEuVerifiqueiOsDadosAntigosEDeUmUsuario(String email, String nome, String sobrenome, int id) throws Throwable {
        base.verificarOsDadosAntigosEDeUmUsuario(email, nome, sobrenome, id);
    }

    @Quando("^que eu enviei uma requisição do tipo Patch para alterar dados \"([^\"]*)\", \"([^\"]*)\" e \"([^\"]*)\" deste usuario (\\d+)$")
    public void queEuEnvieiUmaRequisiçãoDoTipoPatchParaAlterarDadosEDeUmUsuario(String email, String nome, String sobrenome, int id) throws Throwable {
        base.enviarRequisicaoDoTipoPatch(email, nome, sobrenome, id);
    }

    @Entao("^os dado do usuario foram alterados com sucesso$")
    public void osDadoDoUsuarioForamAlteradosComSucesso() throws Throwable {
        base.validarDadosAlteradosPorPatch();
    }

    @Dado("^que eu enviei uma requisição do tipo POST para criar um usuario com os dados \"([^\"]*)\" e \"([^\"]*)\"$")
    public void que_eu_enviei_uma_requisição_do_tipo_POST_para_criar_um_usuario_com_os_dados_e(String nome, String profissao) throws Throwable {
        base.enviarRequisicaoDoTipoPost_CriarUsuario(nome,profissao);
    }

    @Entao("^o cadastro do usuario e criado com sucesso$")
    public void o_cadastro_do_usuario_e_criado_com_sucesso() throws Throwable {
        base.validarDadosAlteradosPorPost();
    }
}
