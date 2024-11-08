export class Users {
id: number;
  name: string;
  city: string;
  salary: number;
  dob: Date

  constructor(id: number, name: string, city: string,salary:number,dob:Date) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.salary=salary;
    this.dob=dob;
  }
}
