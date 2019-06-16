export class TarefasBase {
    constructor() {

    }

    public listaDeTarefas: any[] = [
        { id: 'addMelgueira', valor: 'Adicionar quadro de melgueira', estatico: true },
        { id: 'delMelgueira', valor: 'Remover quadro de melgueira', estatico: true },
        { id: 'addNinho', valor: 'Adicionar quadro de ninho', estatico: true },
        { id: 'delNinho', valor: 'Remover quadro de ninho', estatico: true },
        { id: 'quadroMelgueira', valor: 'Troca de quadro de melgueira', estatico: false },
        { id: 'quadroNinho', valor: 'Troca de quadro de ninho', estatico: false },
        { id: 'tampa', valor: 'Troca de tampa', estatico: false },
        { id: 'fundo', valor: 'Troca de fundo', estatico: false },
        { id: 'rainha', valor: 'Troca de rainha', estatico: false },
        { id: 'outra', valor: 'Outro', estatico: false },
    ];

    public descricao(id: string): string {
        let item = this.listaDeTarefas.find(x => x.id == id);
        if (item) return item.valor;
        else return '';
    }
    public estatico(id: string): boolean {
        let item = this.listaDeTarefas.find(x => x.id == id);
        if (item) return item.estatico;
        else return false;
    }
}