import type Setor from "./Setor";

export default interface Funcionarios {
  id: number;
  nome: string;
  cpf: string;
  salario: number;
  data_nascimento: string;
  data_admissao?: string; 
  setor: Setor | null;
}
