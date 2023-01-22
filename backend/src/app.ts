import cors from 'cors'
import express from 'express';
import yargs from 'yargs/yargs';
import { UsersDao } from './dao/UserDao';
import { ClientCode } from './CacheFactory';
import { UsersService } from './services/UserService';
import { UsersController } from './contoller/UserController';
import { User } from 'dao/User';

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


const createUserController = () => {
  const cacheAlgo = ClientCode<number, User>(algoStr, capacity);
  return new UsersController(server,
    new UsersService(cacheAlgo.createCache(capacity), new UsersDao()))
};

const userController = createUserController();



