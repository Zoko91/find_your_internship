const rootEndpoint = "https://www.workadventureapi.azurewebsites.fr/api/UserApi";

// Model class for a company
export class User {
    constructor(id, username, password, admin=false, email,internship,avatar=null) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.admin = admin;
        this.email = email;
        this.internship = internship;
        this.avatar = avatar;
    }
}

class UserService {
    async searchUsersByName(name) {
        const drinks = await this.fetchFromApi(
            `${rootEndpoint}/search.php?s=${name.trim()}`
        );
        return this.createUsers(drinks);
    }

    async findUserById(id) {
        const user = await this.fetchFromApi(
            `${rootEndpoint}/${id}`
        );
        return this.createUser(user);
    }

    async findUsers() {
        const users = await this.fetchFromApi(
            `${rootEndpoint}/`
        );
        return this.createUsers(users);
    }

    async fetchFromApi(query) {
        console.log(`Fetching API with query ${query}`);
        try {
            const response = await fetch(query);
            const content = await response.json();
            return content;
        } catch (e) {
            console.error(e);
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
            user.avatar
        );
    }

    // Create a User model object list from the array returned by API
    createUsers(users) {
        // Create a user object for each element in the array
        return users.map((user) => this.createCocktail(user));
    }
}

export default new UserService();