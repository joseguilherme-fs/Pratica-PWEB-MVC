class Disciplina {

    constructor(codigo, nome) {
        this.codigo = codigo;
        this._nome = nome;
        this.arrayAlunos = [];
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get alunos() {
        return this.arrayAlunos;
    }

    set aluno(novoAluno) {
        this.arrayAlunos.push(novoAluno);
    }
}