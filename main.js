const form = document.getElementById('form-adicao');
const nomeSobrenome = document.getElementById('nome-pessoa');
const numeroTelefone = document.getElementById('numero-tel');
const contatos = [];
const telefones = [];
let formEValido = false;
let linhas = '';

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
};

nomeSobrenome.addEventListener('keyup', function(e) {
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nomeSobrenome.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeSobrenome.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();

    verificanome();
    verificafone();
    adicionaLinha();
    atualizaTabela();
    atualizaQuantidade();
});

function verificanome() {
    formEValido = validaNome(nomeSobrenome.value)
    if (formEValido) {
    } else {
        alert("O nome nao esta completo")
    }
}

function verificafone() {
}

function adicionaLinha() {

    if (contatos.includes(nomeSobrenome.value)) {
        alert(`O Contato ${nomeSobrenome.value} já foi inserido`);
    } else {
        contatos.push(nomeSobrenome.value);
        telefones.push(numeroTelefone.value);

        let linha = '<tr>';
        linha += `<td>${nomeSobrenome.value}</td>`;
        linha += `<td>${numeroTelefone.value}</td>`;
        linha += '</th>';

        linhas += linha;
    }

    nomeSobrenome.value = '';
    numeroTelefone.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};

