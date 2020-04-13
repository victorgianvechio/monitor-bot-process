/* eslint-disable no-shadow */
import '../../utils/dotenv';
import pm2 from 'pm2';
import mkdir from '../../utils/logsFolder';

const company = 'coronavirus';

const path = mkdir(company);

pm2.connect(err => {
  if (err) {
    console.error(err);
    process.exit(2);
  }

  pm2.start(
    [
      {
        name: `${company}-bot`,
        namespace: `${company}`,
        script: './dist/clientes/coronavirus/services/BingTracker.js',
        exec_mode: 'fork',
        watch: false,
        env_production: {
          NODE_ENV: 'production',
        },
        log_date_format: 'DD-MM-YYYY HH:mm:ss',
        error_file: `${path}/${company}-error.log`,
        out_file: `${path}/${company}-out.log`,
      },
    ],
    err => {
      pm2.disconnect();
      if (err) throw err;
    }
  );
});
