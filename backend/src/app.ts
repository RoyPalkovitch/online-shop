import cors from 'cors'
import express from 'express';
import yargs from 'yargs/yargs';
import { User } from './dao/User';
import { UsersDao } from './dao/UserDao';
import { ClientCode } from './CacheFactory';
import { UsersService } from './services/UserService';
import { UsersController } from './contoller/UserController';
import { AbstractCacheAlgo } from './functionality/AbstractCacheAlgo';

export const server = express();

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

let algoStr = <string | undefined>yargsArgv.algo;
let capacity = <number>yargsArgv.capacity;

let cacheAlgo: AbstractCacheAlgo<number, User> = ClientCode(algoStr, capacity);

const userController = new UsersController(server,
  new UsersService(cacheAlgo, new UsersDao()));

