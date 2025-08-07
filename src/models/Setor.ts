import type Funcionarios from "./Funcionarios";

export default interface Setor {
    id: number;
    nome: string;
    funcionarios?: Funcionarios[] | null;
}