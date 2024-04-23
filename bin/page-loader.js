#!/usr/bin/env node

import { Command } from 'commander';
import pageLoader from '../src/index.js';

const program = new Command();

program
    .name('page-loader')
    .description('Page loader')
    .version('0.0.1');
