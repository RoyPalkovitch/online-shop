import express, { Express, Request, Response } from 'express';
import yargs from 'yargs/yargs';
import cors from 'cors'
import { AbstractCacheAlgo } from 'functionality/AbstractCacheAlgo';



const server = express();
const port = 9000;

server.use(cors());
server.use(express.json());


const yargsArgv = yargs(process.argv.slice(2)).command('algo', 'Run server with algo cache', {
  algo: {
    description: 'Cache algorithms are optimizing instructions, or algorithms, that a computer program or a hardware-maintained structure can utilize in order to manage a cache of information stored on the computer.',
    alias: 'a'
  },
  capacity: {
    description: 'Cache algo capacity',
    alias: 'c',
  }
})
  .help()
  .parseSync();

let algoStr = yargsArgv.algo;
let capacity = <number>yargsArgv.capacity;

//let cacheAlgo: AbstractCacheAlgo<number,User> = undefined;