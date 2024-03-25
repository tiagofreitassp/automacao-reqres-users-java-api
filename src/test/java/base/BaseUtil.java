package base;

import static com.jayway.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.hamcrest.Matchers.is;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.client.ClientProtocolException;
import org.junit.Assert;

import static io.restassured.RestAssured.*;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class BaseUtil {
    public Response response;
    public RequestSpecification request;
    public String url = "https://reqres.in/api/";

    public void requisitarListaDeUsuarios(){
        response = request.get(url+"users?page=2");
    }

    public void validarRetornoListaDeUsuarios(){
        response.then().body(matchesJsonSchemaInClasspath("json.schemas/getlistusers.json"));
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
}
