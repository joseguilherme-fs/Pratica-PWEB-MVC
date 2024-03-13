class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigoDisc, nomeDisc) {
        const DisciplinaPesquisada = this.pesquisarPorCodigo(codigoDisc);
        if (DisciplinaPesquisada) {
            throw new Error('Disciplina já cadastrada!');
        }
        const disciplinaNova = new Disciplina(codigoDisc, nomeDisc);
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova;

        

    }

    pesquisarPorCodigo(codigoDisc) {
        return this.repositorio.listar().find(disciplina => disciplina.codigo === codigoDisc) || null;
    }

    remover(codigoDisc) {
        this.repositorio.remover(codigoDisc);
    }

    inserirAluno(matricula) {
        const AlunoPesquisado = this.AlunoService.pesquisarPorMatricula(matricula);
        if (AlunoPesquisado.length < 0) {
            throw new Error('Aluno não cadastrado!');
        }
        this.repositorio.inserirAlunoNaDisciplina(AlunoPesquisado);
        return aluno;
    }
}