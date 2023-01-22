import { Client, QueryResult } from "pg";
import { createConnection } from "./config";
import { CrudDao } from "./Dao";
import { User } from "./user";

class UsersDao extends CrudDao<User>{

  private client: Client;
  constructor() {
    super();
    this.client = createConnection();
  }

  async add(t: User): Promise<boolean> {
    const query = {
      text: 'INSERT INTO public.persons(lastname, firstname, address, city) VALUES ($1, $2, $3, $4);',
      values: [t.lastname, t.firstname, t.address, t.city]
    }
    const res = await this.client.query(query)
      .catch((e: { stack: any; }) => { throw e })
    return true;
  }

  remove(t: User): boolean {
    throw new Error("Method not implemented.")
  }

  async find(id: number): Promise<User> {
    console.log('Here')
    const query = {
      text: 'SELECT * FROM persons WHERE id = $1',
      values: [id]
    }

    const res = await this.client.query(query)
      .catch((e: { stack: any; }) => console.error(e.stack));
    const resType: QueryResult<any> = res as QueryResult<any>;
    return new User(resType.rows[0].id,
      resType.rows[0].lastname,
      resType.rows[0].firstname,
      resType.rows[0].address,
      resType.rows[0].city);
  }
}

export { UsersDao };