import type Setor from "./Setor";

export default interface Funcionarios {
  id: number;
  nome: string;
  cpf: string;
  salario: number;
  data_nascimento: Date;
  data_admissao: Date; 
  setor: Setor | null;
}
