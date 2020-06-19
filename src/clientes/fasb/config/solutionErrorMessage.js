function solution(str) {
  const { errorNum } = str;

  // ORA-12170 - connection timeout

  if (errorNum === 12170) {
    return `Possíveis soluções:
            <br />- Verificar se a rede interna e internet estão funcionando;
            <br />- Verificar se o servidor de Banco de Dados está ligado e com logon efetuado;
            <br />
            <br />`;
  }

  if (errorNum === 12541) {
    return `Possíveis soluções:
            <br />- Verificar se a rede interna e internet estão funcionando;
            <br />- Verificar se o servidor de Banco de Dados está ligado e com logon efetuado;
            <br />
            <br />`;
  }

  return '';
}

export default solution;
