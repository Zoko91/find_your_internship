const rootEndpoint =
  "https://jbeasse-workadventure.azurewebsites.net/api/UserApi/";

// Model class for a User
export class User {
  constructor(
    id,
    username,
    password,
    admin = false,
    email,
    internship = null,
    avatar = null,
    promoMail = false,
    mailUpdate = false
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.admin = admin;
    this.email = email;
    this.internship = internship;
    this.avatar = avatar;
    this.promoMail = promoMail;
    this.mailUpdate = mailUpdate;
  }
}

class UserService {
  async findUserById(id) {
    try {
      const root = rootEndpoint + id;
      const response = await fetch(root);
      const json = await response.json();
      return this.createUser(json);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async findUsers() {
    try {
      const response = await fetch(rootEndpoint);
      const json = await response.json();
      return this.createUsers(json);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  // Create a User model object from a subset of data fields returned by API
  createUser(user) {
    return new User(
      user.id,
      user.username,
      user.password,
      user.admin,
      user.email,
      user.internship,
      user.avatar,
      user.promoMail,
      user.mailUpdate
    );
  }

  // Create a User model object list from the array returned by API
  createUsers(users) {
    // Create a user object for each element in the array
    return users.map((user) => this.createUser(user));
  }
}

export default new UserService();
