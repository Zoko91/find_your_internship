const rootEndpoint = "https://workadventureapi.azurewebsites.net/api/CompanyApi/";

// Model class for a company
export class Company {
    constructor(id, name, companyGrade=null, logo=null,website=null) {
        this.id = id;
        this.name = name;
        this.companyGrade = companyGrade;
        this.logo = logo;
        this.website = website;
    }
}

class CompanyService {

    
    async findCompanyById(id) {
        try {
            root = rootEndpoint+'/'+id;
            const response = await fetch(root);
            const json = await response.json();
            return createCompany(json);
        } catch (error) {
            console.error(error);
            return error;
        }
    };
    

    async findCompanies() {
        try {
            console.log("Here in findCompanies");
            const response = await fetch(rootEndpoint);
            console.log("Here in response");
            const json = await response.json();
            return this.createCompanies([json]);
        } catch (error) {
            console.error(error);
            return error;
        }
    };

    // Create a Cocktail model object from a subset of data fields returned by API
    createCompany(company) {
        return new Company(
            company.id,
            company.name,
            company.companyGrade,
            company.logo,
            company.website
        );
    }

    // Create a Cocktail model object list from the array returned by API
    createCompanies(companies) {
        // Create a cocktail object for each element in the array
        return companies.map((company) => this.createCompany(company));
    }
}

export default new CompanyService();