#!/usr/bin/env node
import genDiff from '..';

const program = require('commander');

program
  .version('0.0.1')
  .arguments('[options] <firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference')
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'Output format')
  .action((firstConfig, secondConfig) => genDiff(firstConfig, secondConfig));

program.parse(process.argv);
