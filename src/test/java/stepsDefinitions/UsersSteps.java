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
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Quando("^que eu enviei uma requisição do tipo Patch para alterar dados \"([^\"]*)\", \"([^\"]*)\" e \"([^\"]*)\" de um usuario (\\d+)$")
    public void queEuEnvieiUmaRequisiçãoDoTipoPatchParaAlterarDadosEDeUmUsuario(String email, String nome, String sobrenome, int id) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Entao("^os dado do usuario foram alterados com sucesso$")
    public void osDadoDoUsuarioForamAlteradosComSucesso() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}
