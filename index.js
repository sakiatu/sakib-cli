#!/usr/bin/env node

import { program } from 'commander';
import CFonts from 'cfonts';


// Configure the CLI
program
  .name('sakib')
  .description('CLI for helpful utilities')
  .version('0.0.3');

// Define commands
program
  .command('about')
  .description('About the CLI')
  .action(() => {
    CFonts.say('BeeCoder.dev', {
      font: 'block',
      align: 'center',
      gradient: ['red', 'blue']
    });
  });

// Parse command line arguments
program.parse(process.argv);

// Display help if no arguments provided
if (!process.argv.slice(2).length) {
  program.help();
}