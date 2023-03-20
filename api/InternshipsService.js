// Non terminée

const rootEndpoint =
  "https://workadventureapi.azurewebsites.net/api/InternshipApi/";

// Model class for a Internship
export class Internship {
  constructor(
    id,
    title,
    compensation,
    description = null,
    illustration = null,
    grade = null,
    country = null,
    department = null,
    remote = null,
    schedule = null,
    type = null,
    skills = null,
    userId,
    user = null,
    companyId,
    company = null
  ) {
    this.id = id;
    this.title = title;
    this.compensation = compensation;
    this.description = description;
    this.illustration = illustration;
    this.grade = grade;
    this.country = country;
    this.department = department;
    this.remote = remote;
    this.schedule = schedule;
    this.type = type;
    this.skills = skills;
    this.userId = userId;
    this.user = user;
    this.companyId = companyId;
    this.company = company;
  }
}

class InternshipService {
  async findInternshipById(id) {
    try {
      const root = rootEndpoint + "/" + id;
      const response = await fetch(root);
      const json = await response.json();
      return this.createInternship(json);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async findInternships() {
    try {
      const response = await fetch(rootEndpoint);
      const json = await response.json();
      return this.createInternships(json);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  // Create a Cocktail model object from a subset of data fields returned by API
  createInternship(internship) {
    return new Internship(
      internship.id,
      internship.title,
      internship.compensation,
      internship.description,
      internship.illustration,
      internship.grade,
      internship.country,
      internship.department,
      internship.remote,
      internship.schedule,
      internship.type,
      internship.skills,
      internship.userId,
      internship.user,
      internship.companyId,
      internship.company
    );
  }

  // Create a Cocktail model object list from the array returned by API
  createInternships(internships) {
    // Create a cocktail object for each element in the array
    return internships.map((internship) => this.createInternship(internship));
  }
}

export default new InternshipService();
