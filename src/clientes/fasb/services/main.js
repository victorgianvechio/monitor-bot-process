import AreaDocente from './AreaDocenteFASB';
import AreaAluno from './AreaAlunoFASB';
import Database from './DatabaseFASB';

const timer = process.env.FASB_TIMER;

setInterval(async () => {
  await AreaAluno();
  await AreaDocente();
  await Database();
}, timer);
