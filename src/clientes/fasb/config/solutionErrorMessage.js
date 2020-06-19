function solution(str) {
  const { errorNum } = str;

  // 0 - Client Oracle não encontrado
  // ORA-12170 - connection timeout

  if (errorNum === 0) {
    return `Possíveis soluções:
            <br />- Baixar o Oracle Instant Client;
            <br />- Adicionar o caminnho no PATH do Windows;
            <br />
            <br />`;
  }

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
