package base;

import static org.hamcrest.Matchers.is;

import static io.restassured.RestAssured.*;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class BaseUtil {
    public Response response;
    public RequestSpecification request;
    public String url = "https://reqres.in/api/";

    private String email, nome, sobrenome, profissao, dataJSON;
    private int id;

    public void requisitarListaDeUsuarios(){
        response = request.get(url+"users?page=2");
    }

    public void validarRetornoListaDeUsuarios(){
        response.then().statusCode(200).assertThat();
    }

    public void enviarRequisicaoPorID(int id){
        response = request.get(url+"users/"+id);
    }

    public void validarDadosDoretornoPorID(String email, String nome, String sobrenome){
        response.then().body("data.email", is(email));
        response.then().body("data.first_name", is(nome));
        response.then().body("data.last_name", is(sobrenome));
        response.then().statusCode(200).assertThat();
    }

    public void verificarOsDadosAntigosEDeUmUsuario(String email, String nome, String sobrenome, int id){
        response = request.get(url+"users/"+id);
        response.then().body("data.email", is(email));
        response.then().body("data.first_name", is(nome));
        response.then().body("data.last_name", is(sobrenome));
        response.then().statusCode(200).assertThat();
    }

    public void enviarRequisicaoDoTipoPatch(String email, String nome, String sobrenome, int id){
        this.email = email;
        this.nome = nome;
        this.sobrenome = sobrenome;

        String dadosJson = "{\n" +
                "    \"data\": {\n" +
                "        \"id\": "+id+",\n" +
                "        \"email\": \""+email+"\",\n" +
                "        \"first_name\": \""+nome+"\",\n" +
                "        \"last_name\": \""+sobrenome+"\",\n" +
                "        \"avatar\": \"https://reqres.in/img/faces/2-image.jpg\"\n" +
                "    }\n" +
                "}";

        response = given()
                .contentType(ContentType.JSON)
                .body(dadosJson)
                .patch(url+"users/"+id);
        response.then()
                .log().all()
                .statusCode(200);
    }

    public void validarDadosAlteradosPorPatch(){
        response.then().body("data.email", is(email));
        response.then().body("data.first_name", is(nome));
        response.then().body("data.last_name", is(sobrenome));
    }

    public void enviarRequisicaoDoTipoPost_CriarUsuario(String nome, String profissao){
        this.nome = nome;
        this.profissao = profissao;

        String dadosJson = "{\n" +
                "    \"name\": \""+nome+"\",\n" +
                "    \"job\": \""+profissao+"\"\n" +
                "}";

        dataJSON = dadosJson;
    }

    public void validarDadosAlteradosPorPost(){
        response = given()
                .contentType(ContentType.JSON)
                .body(dataJSON)
                .post(url+"users");
        response.then()
                .log().all()
                .statusCode(201)
                .body("name", is(nome))
                .body("job", is(profissao));
    }
}
