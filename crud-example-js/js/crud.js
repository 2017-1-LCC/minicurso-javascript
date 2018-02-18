var alunos = [];
var idSeq = 1;
var position = null;

document.getElementById("btnAlterar").style.display = "none";
document.getElementById("btnCancelar").style.display = "none";

var form = document.getElementById('formulario');

form.addEventListener('submit', function(e) {

    var aluno = {
        id:idSeq++,
        nome:document.getElementById('nomeAluno').value,
        idade:document.getElementById('idadeAluno').value,
        matricula:document.getElementById('matriculaAluno').value
    };

    alunos.push(aluno);

    listarTodos(alunos);

    clearValuesForm();

    e.preventDefault();

});

function listarTodos(rows) {

    var html = "<table border='1|1'>";

    for (var i = 0; i < rows.length; i++) {
        
        html+="<tr>";
        html+="<td>"+rows[i].id+"</td>";
        html+="<td>"+rows[i].nome+"</td>";
        html+="<td>"+rows[i].idade+"</td>";
        html+="<td>"+rows[i].matricula+"</td>";
        html+="<td onClick=remover("+i+")>"+"remover"+"</td>";
        html+="<td onClick=alterar("+i+")>"+"editar"+"</td>";
        
        html+="</tr>";

    }

    html+="</table>";

    document.getElementById("boxTable").innerHTML = html;

}

function clearValuesForm() {

    document.getElementById('nomeAluno').value = "";
    document.getElementById('idadeAluno').value = "";
    document.getElementById('matriculaAluno').value = "";

}

function remover(posicao) {

    alunos.splice(posicao,1);

    listarTodos(alunos);

}

function alterar(posicao) {

    document.getElementById('nomeAluno').value = alunos[posicao].nome;
    document.getElementById('idadeAluno').value = alunos[posicao].idade;
    document.getElementById('matriculaAluno').value = alunos[posicao].matricula;

    document.getElementById("btnAlterar").style.display = "block";
    document.getElementById("btnCancelar").style.display = "block";
    document.getElementById("btnEnviar").style.display = "none";

    position = posicao;

}

function atualizar() {

    if(position != null) {
        alunos[position].nome = document.getElementById('nomeAluno').value;
        alunos[position].idade = document.getElementById('idadeAluno').value;
        alunos[position].matricula = document.getElementById('matriculaAluno').value;

        cancelar();

        listarTodos(alunos);
    }
}

function cancelar() {
    
    clearValuesForm();

    document.getElementById("btnAlterar").style.display = "none";
    document.getElementById("btnCancelar").style.display = "none";
    document.getElementById("btnEnviar").style.display = "block";

}