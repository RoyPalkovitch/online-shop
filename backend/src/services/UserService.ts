import { ICacheAlgo } from "../functionality/ICacheAlgo";
import { CrudDao } from "../dao/Dao.js";
import { User } from "../dao/User.js";
import { UsersDao } from "../dao/UserDao.js";

class UsersService {

  private userDao: CrudDao<User>;
  private algoCache: ICacheAlgo<number, User>;

  constructor(algoCache: ICacheAlgo<number, User>, userDao: UsersDao) {
    this.userDao = userDao;
    this.algoCache = algoCache;
  }

  async create(resource: User) {
    return this.userDao.add(resource);
  }

  async readById(id: number) {
    let user = this.algoCache.getElement(id);
    if (user !== undefined) {
      return user;
    }
    user = await this.userDao.find(id);
    this.algoCache.setElement(user.id, user);
    return user;
  }

  async readUserProductList(id: number) {
    let user = this.readById(id);

    return user;
  }
}

export { UsersService };