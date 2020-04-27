function solution(str) {
  if (str.indexOf('ORA-12170') !== -1) {
    return `Possíveis soluções:
            <br />- Verificar se a rede interna e internet estão funcionando;
            <br />- Verificar se o servidor de Banco de Dados está ligado e com logon efetuado;
            <br />
            <br />`;
  }

  if (str.indexOf('ORA-12541') !== -1) {
    return `Possíveis soluções:
            <br />- Verificar se a rede interna e internet estão funcionando;
            <br />- Verificar se o servidor de Banco de Dados está ligado e com logon efetuado;
            <br />
            <br />`;
  }

  return '';
}

export default solution;
