import program from 'commander';
import cli from '../cli';

const { args } = program
  .option('-s, --service [name]', 'Specify service')
  .parse(process.argv);

cli([args[0], program.service]);
