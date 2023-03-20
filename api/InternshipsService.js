// Non terminée

const rootEndpoint = "https://workadventureapi.azurewebsites.net/api/InternshipApi/";

// Model class for a Internship
export class Internship {
    constructor(id, name, InternshipGrade=null, logo=null,website=null) { // mettre les bons paramètres
        this.id = id;
        this.name = name;
        this.InternshipGrade = InternshipGrade;
        this.logo = logo;
        this.website = website;
    }
}

class InternshipService {
    async findInternshipById(id) {
        try {
            const root = rootEndpoint+'/'+id;
            const response = await fetch(root);
            const json = await response.json();
            return this.createInternship(json);
        } catch (error) {
            console.error(error);
            return error;
        }
    };
    

    async findInternships() {
        try {
            const response = await fetch(rootEndpoint);
            const json = await response.json();
            return this.createInternships(json);
        } catch (error) {
            console.error(error);
            return error;
        }
    };

    // Create a Cocktail model object from a subset of data fields returned by API
    createInternship(internship) {
        return new Internship(
            internship.id,
            internship.name,
            internship.InternshipGrade,
            internship.logo,
            internship.website
        );
    }

    // Create a Cocktail model object list from the array returned by API
    createInternships(internships) {
        // Create a cocktail object for each element in the array
        return internships.map((internship) => this.createInternship(internship));
    }
}

export default new InternshipService();