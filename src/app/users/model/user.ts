export interface IUser {
  id: number;
  nome: string;
  apelido: string;
  time: string;
  cpf: string;
  hobbie: string;
  cidade: {
    id: number;
    cidade: string;
    estado: string;
  };
}
