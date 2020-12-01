class UserStorage {
  async loginUser(id, password) {
    if (
      (id === 'ellie' && password === 'dream') ||
      (id === 'coder' && password === 'academy')
    ) {
      return id;
    } else {
      throw new Error('not found');
    }
  }

  async getRoles(id) {
    if (id === 'ellie') {
      return { name: 'ellie', role: 'admin' };
    } else {
      throw new Error('no access');
    }
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
  .loginUser(id, password)
  .then((id) => userStorage.getRoles(id))
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch((error) => console.log(error));
