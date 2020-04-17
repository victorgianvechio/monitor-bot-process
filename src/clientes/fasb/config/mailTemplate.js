import solution from './solutionErrorMessage';

export default obj => {
  return {
    title: `${obj.title}`,
    message: `${obj.message}
                <br />
                <br />
                <b>${obj.log}</b>
                <br />
                <br />
                ${solution(obj.log)}
                <b>Monitor Bot</b>`,
  };
};
