function solution(str) {
  const { errorNum } = str;

  // 0 - Client Oracle não encontrado
  // ORA-12170 - connection timeout

  if (errorNum === 0) {
    return `Possíveis soluções:\n- Baixar o Oracle Instant Client;\n- Adicionar o caminnho no PATH do Windows;\n\n`;
  }

  if (errorNum === 12170) {
    return `Possíveis soluções:\n- Verificar se a rede interna e internet estão funcionando;\n- Verificar se o servidor de Banco de Dados está ligado e com logon efetuado;\n\n`;
  }

  if (errorNum === 12541) {
    return `Possíveis soluções:\n- Verificar se a rede interna e internet estão funcionando;\n- Verificar se o servidor de Banco de Dados está ligado e com logon efetuado;\n\n`;
  }

  return '';
}

export default solution;
