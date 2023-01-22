import express, { Express, Request, Response } from 'express';
import { UsersService } from '../services/UserService.js';

class UsersController {

  server: express.Application;
  userService: UsersService;

  constructor(server: express.Application, userService: UsersService) {
    this.server = server;
    this.userService = userService;
    this.configureRoutes();
  }

  private configureRoutes() {
    this.server.get('/user', async (req, res) => {
      const user = await this.userService.readById(req.body.id);
      res.status(200).send(user);
    });
    this.server.post('/user', async (req, res) => {
      const user = await this.userService.create(req.body);
      res.status(201).send(user);
    });
  }



  // async getUserById(req: Request, res: Response) {
  //     const user = await this.userService.readById(req.body.id);
  //     res.status(200).send(user);
  // }

  // async createUser(req: Request, res: Response) {
  //     const body = this.userService.create(req.body);
  //     res.status(201).send({ body: body });
  // }

}


export { UsersController }