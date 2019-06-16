export class TarefasBase {
    constructor() {

    }

    public listaDeTarefas: any[] = [
        { id: 'addMelgueira', valor: 'Adicionar quadro de melgueira' },
        { id: 'delMelgueira', valor: 'Remover quadro de melgueira' },
        { id: 'quadroMelgueira', valor: 'Troca de quadro de melgueira' },
        { id: 'addNinho', valor: 'Adicionar quadro de ninho' },
        { id: 'delNinho', valor: 'Remover quadro de ninho' },
        { id: 'quadroNinho', valor: 'Troca de quadro de ninho' },
        { id: 'tampa', valor: 'Troca de tampa' },
        { id: 'fundo', valor: 'Troca de fundo' },
        { id: 'rainha', valor: 'Troca de rainha' },
        { id: 'outra', valor: 'Outro' },
    ];
    public descricao(id: string): string {
        let item = this.listaDeTarefas.find(x => x.id == id);
        if (item) return item.valor;
        else return '';
    }
}