import solution from './solutionErrorMessage';

function sucess(str) {
  return `Problema solucioanado Banco de Dados\n\n${new Date()}\n\nConnection ${str}`;
}

function error(str) {
  return `Perda de conexão Banco de Dados\n\n${new Date()}\n\n${str}\n\n${solution(
    str
  )}`;
}

export default {
  sucess,
  error,
};
