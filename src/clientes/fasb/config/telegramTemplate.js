import solution from './solutionErrorMessageTelegram';

export default obj => {
  if (obj.isError) {
    return `${obj.message}\n\n${new Date()}\n\n${obj.log}\n\n${solution(
      obj.log
    )}`;
  }
  return `${obj.message}\n\n${new Date()}\n\n${obj.log}`;
};
